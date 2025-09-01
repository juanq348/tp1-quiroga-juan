import { Partido } from "./Partido";

export class Torneo{
    readonly id : number;
    nombre : string;
    private partidos : Partido[] = [];

    constructor(id : number, nombre : string){
        this.id = id;
        this.nombre = nombre;
    }

    programarPartido(partido:Partido):void{
        const partidoExistente = this.partidos.some(juego => juego.id === partido.id);
        if(partidoExistente){
            throw new Error(`El partido con el ID ${partido.id} ya esta programado`);
        } else {
            this.partidos.push(partido);
        }
    }

    listarPartidos(): string[]{
        return this.partidos.map(juego => juego.toString());
    }

    buscarPartidos(id:number) : Partido | undefined{
        return this.partidos.find(juego => juego.id === id);
    }
}