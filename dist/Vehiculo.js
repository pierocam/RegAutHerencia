"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    constructor(patente, marca, modelo, año) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    // Getters y Setters
    getPatente() {
        return this.patente;
    }
    setPatente(patente) {
        this.patente = patente;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    getAño() {
        return this.año;
    }
    setAño(año) {
        this.año = año;
    }
    getInfo() {
        return `Patente: ${this.patente}, Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}
exports.default = Vehiculo;
