export class CreateEnderecoDto {
    id?: number;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    UF: string;
    cep: string;
    pessoa_id: number;
}
