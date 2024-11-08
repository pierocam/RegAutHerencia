"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Vehiculo_1 = __importDefault(require("./Vehiculo"));
class Auto extends Vehiculo_1.default {
    constructor(patente, marca, modelo, año) {
        super(patente, marca, modelo, año);
    }
}
exports.default = Auto;
