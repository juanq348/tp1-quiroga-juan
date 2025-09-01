export class Resultado{
    golesLocal : number;
    golesVisitante : number;

    constructor(golesLocal : number, golesVisitante : number){
        this.golesLocal = golesLocal;
        this.golesVisitante  = golesVisitante;
    }

    toString() : string{
        return `${this.golesLocal} | ${this.golesVisitante}`;
    };
}