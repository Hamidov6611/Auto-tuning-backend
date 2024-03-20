import { ConfigService } from '@nestjs/config';
import { IAdmin } from 'src/types/types';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigService);
    validate(admin: IAdmin): Promise<{
        id: string;
        email: string;
    }>;
}
export {};
