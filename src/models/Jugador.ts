import type { IIdentificable } from "../interfaces/IIdentificable";

export class Jugador implements IIdentificable{
    readonly id : number;
    nombre : string;
    edad: number;
    posicion?: string;

    constructor(id : number, nombre : string, edad: number, posicion?:string){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }

    toString(): string{
        return `Nombre: ${this.nombre} || Edad: ${this.edad} || ${this.posicion ? "" + this.posicion : ""}`;
    }
}