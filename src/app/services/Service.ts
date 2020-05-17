export class Servicio {
    _id: string;
    calificacion: number;
    uid: number;
    nombre: string;
    apellidos: string;
    trabajosRealizados: number;
    direccion: string;
    email: string;
    edad: number;
    password: string;
    celular: string;
    foto: string;
    estado: string;
    profesionista: boolean;
    precioPorHora: number;
    descripcion: string;
    profesion: string;


    constructor(_id: string, calificacion: number, uid: number, nombre: string, apellidos: string,
                trabajosRealizados: number, direccion: string,
                email: string,
                edad: number,
                password: string,
                celular: string,
                foto: string,
                estado: string,
                profesionista: boolean,
                precioPorHora: number,
                descripcion: string,
                profesion: string) {

        this._id = _id;
        this.calificacion = calificacion;
        this.uid = uid;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.trabajosRealizados = trabajosRealizados;
        this.direccion = direccion;
        this.email = email;
        this.edad = edad;
        this.password = password;
        this.celular = celular;
        this.foto = foto;
        this.estado = estado;
        this.profesionista = profesionista;
        this.precioPorHora = precioPorHora;
        this.descripcion = descripcion;
        this.profesion = profesion;

    }
}
