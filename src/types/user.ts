export interface User {
    id: string;
    email: string;
    firstName?: string;  
    lastName?: string;  
    role: string;     
    isActive: boolean;  
    createdAt: Date;
    updatedAt: Date;

}