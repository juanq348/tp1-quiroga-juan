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

    toString(): void{
        console.log(`Nombre: ${this.nombre} || Edad: ${this.edad} || Posicion: ${this.posicion}`) ;
    }
}