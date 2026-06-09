import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

class RegisterDto {
    email: string;
    password: string;
    displayName?: string;
}

class LoginDto {
    email: string;
    password: string;
}

@Controller('auth')
export class AuthController {
    constructor(private auth: AuthService) {}

    @Post('register')
    register(@Body() body: RegisterDto) {
        return this.auth.register(body.email, body.password, body.displayName);
    }

    @Post('login')
    login(@Body() body: LoginDto) {
        return this.auth.login(body.email, body.password);
    }
}
