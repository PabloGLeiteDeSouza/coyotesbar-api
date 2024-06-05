export class CreateUserDto {
    username: string;
    email: string;
    password: string;
    private_key: string;
    public_key: string;
    id_pessoa: number;
}

export class CreateUserDtoRevcive {
    username: string;
    email: string;
    password: string;
    id_pessoa: number;
}
