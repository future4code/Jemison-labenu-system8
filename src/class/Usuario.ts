export abstract class Usuario{
    protected id : string;
    protected nome: string;
    protected email: string;
    protected data_nasc : Date;
    protected turma_id : string;

    constructor (id:string, nome:string, email:string, data_nasc:Date, turma_id:string){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.data_nasc = data_nasc;
        this.turma_id = turma_id;
    }
}