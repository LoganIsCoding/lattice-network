import { TurnsService } from './turns.service';
export declare class TurnsController {
    private turns;
    constructor(turns: TurnsService);
    begin(req: any): Promise<{
        turnId: string;
        token: string;
        systemPrompt: string;
        expiresAt: Date;
    }>;
    recent(req: any): Promise<{
        id: string;
        status: import("@lattice/db").$Enums.TurnStatus;
        expiresAt: Date;
        submittedAt: Date | null;
        createdAt: Date;
        artifactId: string | null;
    }[]>;
}
