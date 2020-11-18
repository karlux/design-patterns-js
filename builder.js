// builder
class Cup{
    constructor(){
        this.material = 'plastic';
        this.handle = false;
        this.colour = 'white';
        this.lid = false;
    }

    setMaterial(material){
        this.material = material;
        return this;
    }

    setHandle(){
        this.handle = true;
        return this;
    }

    setColour(colour){
        this.colour = colour;
        return this;
    }

    setLid(){
        this.lid = true;
        return this;
    }

    build(){
        return {
            material : this.material,
            handle : this.handle,
            colour : this.colour,
            lid : this.lid
        };
    }
}

const cup1 = new Cup().build();
console.log(cup1);

const cup2 = new Cup()
.setColour('Black')
.setHandle()
.build();

console.log(cup2);

const cup3 = new Cup()
.setMaterial('Ceramic')
.setColour('Black')
.setHandle()
.setLid()
.build();

console.log(cup3);