abstract class Empregado{
    public nome: string;
    public sobrenome: string;
    public cpf: string;

    constructor(nome: string, sobrenome: string, cpf: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cpf = cpf;
    }

    abstract vencimento();
         
    
}