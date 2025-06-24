
type Size = ''|'S'|'M'|'XL'

class Product {
    
    constructor(
        public name: string = '',
        public price: number = 0,
        public size : Size = '',
    ){
        
    }
    isProductReady():boolean{
        //No DRY
        // if (this.name.length <= 0 ) throw Error ('name is empty');
        // if (this.price <= 0 ) throw Error ('price is zero'); 
        // if (this.size.length <= 0 ) throw Error ('size is empty'); 
        for( const key in this){
            const datoDeAtributo = this[key]
            const atributo = key
            switch(typeof datoDeAtributo){
                case 'string':
                    if (datoDeAtributo.length <= 0) throw Error(`${atributo} is empty`);
                    break;
                case 'number':
                    if (datoDeAtributo <= 0) throw Error(`${atributo} is zero`);
                    break;
                default:
                    throw Error(`${typeof atributo} is not valid`);
            }
            
        }
        return true;
    }

    toString(){
        if (!this.isProductReady) return;
        return `${ this.name } (${ this.price }), ${this.size} `;
    }
}

(() => {
    const bluePants = new Product('Blue Large Pants',0,'M');
    // const bluePants = new Product('Blue large pants',10,'M');
})();