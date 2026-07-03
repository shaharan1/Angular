



export interface UserModel {

    id?: number; // Optional because it is generated automatically by the DB
    name: string;
    email: string;
    phone: string;
    password?: string; // Optional so you don't have to pass it back when loading lists
    //   role: Role;
    active: boolean;


}