import { IArea } from "./area";
import { ICategory } from "./category";

export interface ICv {
    id: number;
    name: string;
    cv: File;
    email: string;
    phone: number;
    gender: boolean;
    address: string;
    message?: string;
    created_at?: Date;
    updated_at?: Date;
    updated_by_id?: number;
    category?: ICategory;
    area?: IArea;
}
