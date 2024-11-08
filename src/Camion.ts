import Vehiculo from './Vehiculo';

class Camion extends Vehiculo {
    constructor(patente: string, marca: string, modelo: string, año: number) {
        super(patente, marca, modelo, año);
    }
}

export default Camion;
