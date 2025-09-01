import type { ICompetidor } from "../interfaces/ICompetidor"
import { Jugador } from "./Jugador";

export class Equipo implements ICompetidor{
    nombre:string;
    private jugadores:Jugador [] = [];

    constructor(nombre: string){
        this.nombre = nombre;
    }

    get cantidad():number{
        return this.jugadores.length;
    }

    agregarJugador(jugador: Jugador): void{
        const existe = this.jugadores.some(jug => jug.id === jugador.id);
        if (existe){
            console.log(`El jugador con el ID ${jugador.id} ya existe`)
        }
        this.jugadores.push(jugador)
    }

    listarIntegrantes(): string[]{
        return this.jugadores.map(jug => jug.toString());
    }

    toString():string{
        return `Equipo "${this.nombre}" || Candidad de jugadores: ${this.cantidad}`;
    }
}