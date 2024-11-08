import Vehiculo from './Vehiculo';

class RegistroAutomotor {
    private vehiculos: Vehiculo[];

    constructor() {
        this.vehiculos = [];
    }

    agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }

    obtenerVehiculo(patente: string): Vehiculo | undefined {
        return this.vehiculos.find(v => v.getPatente() === patente);
    }

    modificarVehiculo(patente: string, datos: { marca?: string, modelo?: string, año?: number }): void {
        let vehiculo = this.obtenerVehiculo(patente);
        if (vehiculo) {
            if (datos.marca) vehiculo.setMarca(datos.marca);
            if (datos.modelo) vehiculo.setModelo(datos.modelo);
            if (datos.año) vehiculo.setAño(datos.año);
            console.log(`Vehículo con patente ${patente} modificado.`);
        } else {
            console.log(`Vehículo con patente ${patente} no encontrado.`);
        }
    }

    darDeBaja(patente: string): void {
        this.vehiculos = this.vehiculos.filter(v => v.getPatente() !== patente);
        console.log(`Vehículo con patente ${patente} dado de baja.`);
    }

    mostrarVehiculos(): void {
        this.vehiculos.forEach(vehiculo => {
            console.log(vehiculo.getInfo());
        });
    }
}

export default RegistroAutomotor;
