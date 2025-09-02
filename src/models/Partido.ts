import { Equipo } from "./Equipo";
import { Deporte } from "./Deporte";
import { Resultado } from "./Resultado";

export class Partido { 
    readonly id : string;
    readonly local : Equipo;
    readonly visitante : Equipo;
    readonly deporte : Deporte;
    private _resultado? : Resultado;

    constructor(id : string, local : Equipo, visitante : Equipo , deporte : Deporte){
    if(local === visitante){
        throw new Error(`El equipo local no puede ser el mismo que el visitante`)
    }
        this.id = id;
        this.local = local;
        this.visitante = visitante;
        this.deporte = deporte;
    }

    get resultado(): Resultado | undefined{
        return this.resultado;
    }

    jugar(golesLocal:number, golesVisitante:number): void{
        if(!this.deporte.validar(this.local)){
            throw new Error(`El equipo local ${this.local.nombre} no cumple las reglas de ${this.deporte.nombre}`);
        }
        if(!this.deporte.validar(this.visitante)){
            throw new Error(`El equipo visitante ${this.visitante.nombre} no cumple las reglas de ${this.deporte.nombre}`);
        }
        this._resultado = new Resultado(golesLocal, golesVisitante);
    }

    toString() : string{
        const resultado = this._resultado ? `Resultado : ${this._resultado.toString()}` : "Todavia no se juega";
        return `Partido [${this.id} || ${this.local.nombre} vs ${this.visitante.nombre} || ${this.deporte.nombre} -> ${resultado}]`
    }
}