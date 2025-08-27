import type { ICompetidor } from "../interfaces/ICompetidor"
import { Jugador } from "./Jugador";

export class Equipo implements ICompetidor{
    nombre:string;
    private jugadores:Jugador [] = [];

    constructor(nombre: string){
        this.nombre = nombre;
    }

    agregarJugador(jugador: Jugador): void{
        const existe = this.jugadores.some(j => j.id === jugador.id);
        if (existe){
            console.log(`El jugador con el ID ${jugador.id} ya existe`)
        }
        this.jugadores.push(jugador)
    }

    listarIntegrantes(): string[]{
        console.log(`Integrantes del equipo: ${this.nombre}`)
    }

    toString():void{

    }

    get cantidad():number{
        return this.jugadores.length;
    }
}