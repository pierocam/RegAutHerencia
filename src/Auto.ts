import Vehiculo from './Vehiculo';

class Auto extends Vehiculo {
    constructor(patente: string, marca: string, modelo: string, año: number) {
        super(patente, marca, modelo, año);
    }
}

export default Auto;
