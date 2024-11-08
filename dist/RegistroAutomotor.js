"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegistroAutomotor {
    constructor() {
        this.vehiculos = [];
    }
    agregarVehiculo(vehiculo) {
        this.vehiculos.push(vehiculo);
    }
    obtenerVehiculo(patente) {
        return this.vehiculos.find(v => v.getPatente() === patente);
    }
    modificarVehiculo(patente, datos) {
        let vehiculo = this.obtenerVehiculo(patente);
        if (vehiculo) {
            if (datos.marca)
                vehiculo.setMarca(datos.marca);
            if (datos.modelo)
                vehiculo.setModelo(datos.modelo);
            if (datos.año)
                vehiculo.setAño(datos.año);
            console.log(`Vehículo con patente ${patente} modificado.`);
        }
        else {
            console.log(`Vehículo con patente ${patente} no encontrado.`);
        }
    }
    darDeBaja(patente) {
        this.vehiculos = this.vehiculos.filter(v => v.getPatente() !== patente);
        console.log(`Vehículo con patente ${patente} dado de baja.`);
    }
    mostrarVehiculos() {
        this.vehiculos.forEach(vehiculo => {
            console.log(vehiculo.getInfo());
        });
    }
}
exports.default = RegistroAutomotor;
