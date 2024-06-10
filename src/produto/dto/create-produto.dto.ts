export class CreateProdutoDto {
    id?: number;
    nome: string;
    descricao: string;
    categoria: string;
    preco: number;
    imagem: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    quantidade: number;
    tamanho: number;
    maioridade: boolean;
}
