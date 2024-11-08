import Auto from './Auto';
import Moto from './Moto';
import Camion from './Camion';
import RegistroAutomotor from './RegistroAutomotor';

const registro = new RegistroAutomotor();

const auto1 = new Auto('ABC123', 'Ford', 'Ka', 2010);
const moto1 = new Moto('XYZ789', 'Zanella', 'RX 150', 2018);
const camion1 = new Camion('LMN456', 'Mercedes', '1634', 2007);

registro.agregarVehiculo(auto1);
registro.agregarVehiculo(moto1);
registro.agregarVehiculo(camion1);

console.log("Vehículos en el registro:");
registro.mostrarVehiculos();

console.log("\nModificando vehículo con patente 'ABC123':");
registro.modificarVehiculo('ABC123', { marca: 'Chevrolet', modelo: 'Corsa', año: 2006 });

console.log("\nVehículos después de modificar:");
registro.mostrarVehiculos();

console.log("\nDando de baja el vehículo con patente 'XYZ789':");
registro.darDeBaja('XYZ789');

console.log("\nVehículos después de dar de baja:");
registro.mostrarVehiculos();
