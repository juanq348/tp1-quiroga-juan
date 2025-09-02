import { Basquet } from "./models/Basquet";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Jugador } from "./models/Jugador";
import { Partido } from "./models/Partido";
import { Torneo } from "./models/Torneo";

console.log("PRUEBAS")

//1. Creación de equipos con jugadores
const equipoFut1 = new Equipo("Barcelona");
const equipoFut2 = new Equipo("Real Madrid");

for (let i = 1; i <= 11; i++){
    equipoFut1.agregarJugador(new Jugador(`Equipo Futbol || 1 ${i}`, `Jugador Futbol Equipo 1 ||${i}`, 20 + i));
    equipoFut2.agregarJugador(new Jugador(`Equipo Futbol || 2 ${i}`, `Jugador Futbol Equipo 2 ||${i}`, 20 + i));
}

const equipoBasquet1 = new Equipo("Lakers");
const equipoBasquet2 = new Equipo("Celtics");

for (let i = 1; i <= 5; i++){
    equipoBasquet1.agregarJugador(new Jugador(`Equipo Basquet || 1 ${i}`, `Jugador Basquet Equipo 1 ||${i}`, 18 + i));
    equipoBasquet2.agregarJugador(new Jugador(`Equipo Basquet || 2 ${i}`, `Jugador Basquet Equipo 2 ||${i}`, 18 + i));
}

console.log("¡Equipos creados con éxito!")

//2. Validación de creación de equipos
const futbol = new Futbol();
const basquet = new Basquet();

console.log("\nVALIDACIÓN DE EQUIPOS:")
console.log(`Equipo de futbol válido:${futbol.validar(equipoFut1)}`);
console.log(`Equipo de futbol válido:${futbol.validar(equipoFut2)}`);
console.log(`Equipo de basquet válido: ${basquet.validar(equipoBasquet1)}`);
console.log(`Equipo de basquet válido: ${basquet.validar(equipoBasquet2)}`);

const equipoFutbolExcedido = new Equipo("Los Payos");
for(let i = 1; i <= 12; i++){
    equipoFutbolExcedido.agregarJugador(new Jugador(`Equipo Futbol Excedido || ${i}`, `Jugador Futbol Excedido - ${i}`, 20+i));
}

console.log(`Equipo de futbol excedido: ${futbol.validar(equipoFutbolExcedido)}`);

console.log("\n");

//3. Creación de partidos
const partidoFutbol = new Partido("P1", equipoFut1, equipoFut2, futbol);
const partidoBasquet = new Partido("P2", equipoBasquet1, equipoBasquet2, basquet);

console.log("PARTIDOS PROGRAMADOS:");
console.log(partidoFutbol.toString());
console.log(partidoBasquet.toString());

function numeroRandom(min : number, max : number): number{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("\nJUGANDO PARTIDOS");
partidoFutbol.jugar(numeroRandom(0, 5), numeroRandom(0,5));
partidoBasquet.jugar(numeroRandom(10, 100), numeroRandom(10,100));

console.log(partidoFutbol.toString());
console.log(partidoBasquet.toString());

//4. Creación de torneo
const torneo = new Torneo("Torneo 1", "Supercampeones");
torneo.programarPartido(partidoFutbol);
torneo.programarPartido(partidoBasquet);

console.log("\nPARTIDOS DEL TORNEO:");
torneo.listarPartidos().forEach(partido => console.log(partido));

console.log("\n Buscando partido P1: ");
console.log(torneo.buscarPartidos("P1")?.toString());

console.log("\n");

//5. Polimorfismo
const deportes = [futbol, basquet];
const equipos = [equipoFut1, equipoBasquet1];

console.log("Polimorfismo con validar():");
deportes.forEach((deporte, index)=>{
    const equipo = equipos[index];
    console.log(`${equipo.nombre} en ${deporte.nombre}: ${deporte.validar(equipo)}`);
});