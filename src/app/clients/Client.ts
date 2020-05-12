export class Client{
    favoritos:number[];
    _id:string;
    uid: number;
    nombre: string;
    apellidos: string;
    direccion: string;
    email:string;
    edad:number;
    password:string;
    celular:number;
    foto:string;
    estado:string;
    profesionista:boolean;

    constructor(favoritos:number[],_id:string,uid: number,nombre: string,
        apellidos: string,direccion: string,email:string,edad:number,
        password:string,celular:number,foto:string,estado:string,
        profesionista:boolean){

            this.favoritos = favoritos;
            this._id = _id;
            this.uid = uid;
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.direccion = direccion;
            this.password = password;
            this.celular = celular;
            this.foto = foto;
            this.estado = estado;
            this.profesionista = profesionista;
       
    }
}