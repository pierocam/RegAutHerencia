class Vehiculo {
    private patente: string;
    private marca: string;
    private modelo: string;
    private año: number;
    
    constructor(patente: string, marca: string, modelo: string, año: number) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    // Getters y Setters
    getPatente(): string {
        return this.patente;
    }

    setPatente(patente: string): void {
        this.patente = patente;
    }

    getMarca(): string {
        return this.marca;
    }

    setMarca(marca: string): void {
        this.marca = marca;
    }

    getModelo(): string {
        return this.modelo;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    getAño(): number {
        return this.año;
    }

    setAño(año: number): void {
        this.año = año;
    }

    getInfo(): string {
        return `Patente: ${this.patente}, Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

export default Vehiculo;
