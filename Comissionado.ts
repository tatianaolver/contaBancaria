class Comissionado extends Empregado{
    public totalVenda: number;
    public taxaComissao: number;

    constructor(nome: string, sobrenome: string, cpf: string, totalVenda: number, taxaComissao: number) {
        super(nome, sobrenome, cpf);
        this.totalVenda = totalVenda;
        this.taxaComissao = taxaComissao;
    }

    vencimento(): number {
        return this.totalVenda * this.taxaComissao;
    }
}