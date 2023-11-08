import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    public id: number;
    public nome: string
    public dataNascimento: Date
    public dataCadastro: Date
    public telefones: Telefone[] = []
    public endereco: Endereco
    public documentos: Documento[] = []
    public dependentes: Cliente[] = []
    public titular: Cliente | null

    constructor() {
        this.id = 0;
        this.titular = null;
    }
}