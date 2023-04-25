class Horista extends Empregado{
    public precoHora: number;
    public horasTrabalhadas: number;

    constructor(nome: string, sobrenome: string, cpf: string, precoHora: number, horasTrabalhadas: number){
        super(nome, sobrenome, cpf);
        this.precoHora = precoHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }

    vencimento(): number {
        return this.precoHora * this.horasTrabalhadas;
    }
}