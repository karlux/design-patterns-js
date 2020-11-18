class Mubleria{
    constructor(){
        console.log('Producto ensamblado');
    }
}

class Silla extends Mubleria{
    constructor(){
        console.log('--> Silla en producción');
        super();
    }
}

class Mesa extends Mubleria{
    constructor(){
        console.log('--> Mesa en producción');
        super();
    }
}

class MuebleriaFactory{
    constructor(producto){
        switch(producto){
            case 'silla': return new Silla();
            case 'mesa': return new Mesa();
            default: return null;
        }
    }
}

const silla = new MuebleriaFactory('silla');
const mesa = new MuebleriaFactory('mesa');