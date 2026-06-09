import { AuthService } from './auth.service';
declare class RegisterDto {
    email: string;
    password: string;
    displayName?: string;
}
declare class LoginDto {
    email: string;
    password: string;
}
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
    register(body: RegisterDto): Promise<{
        token: string;
    }>;
    login(body: LoginDto): Promise<{
        token: string;
    }>;
}
export {};
