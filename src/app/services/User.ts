export class User {
    nombre: string;
    apellidos: string;
    direccion: string;
    email: string;
    edad: number;
    password: string;
    celular: number;
    estado: string;
    profesionista: boolean;

    constructor(nombre: string, apellidos: string, direccion: string,
                email: string,
                edad: number,
                password: string,
                celular: number,
                estado: string,
                profesionista: boolean) {

        this.nombre = nombre;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.email = email;
        this.edad = edad;
        this.password = password;
        this.celular = celular;
        this.estado = estado;
        this.profesionista = profesionista;
    }
}
