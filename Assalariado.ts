class Assalariado extends Empregado{
    public salario: number;

    constructor(nome: string, sobrenome: string, cpf: string,salario: number){
        super(nome, sobrenome, cpf);
        this.salario = salario;
    }

    vencimento(): number {
        return this.salario;
    }

}