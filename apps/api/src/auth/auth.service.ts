import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
    ) {}

    async register(email: string, password: string, displayName?: string) {
        const existing = await this.prisma.user.findUnique({ where: { email } });
        if (existing) throw new ConflictException('Email already in use');

        const passwordHash = await bcrypt.hash(password, 12);
        const user = await this.prisma.user.create({
            data: { email, passwordHash, displayName },
        });

        return { token: this.signToken(user.id, user.email) };
    }

    async login(email: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (!user) throw new UnauthorizedException('Invalid credentials');

        const valid = await bcrypt.compare(password, user.passwordHash);
        if (!valid) throw new UnauthorizedException('Invalid credentials');

        return { token: this.signToken(user.id, user.email) };
    }

    private signToken(userId: string, email: string) {
        return this.jwt.sign({ sub: userId, email });
    }
}
