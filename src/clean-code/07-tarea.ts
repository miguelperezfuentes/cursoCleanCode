(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes{
        constructor(
            public value: string,
            public placeholder: string,
        ) {
            
        }
    }

    class InputEvents{
        constructor() {
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputElementProps{
        id: string;
        placeholder: string;
        value: string;
    }

    class InputElement {
        public htmlElements: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents; // Añadido

        constructor({id,value,placeholder}: InputElementProps){
            this.htmlElements = new HtmlElement(id,'input');
            this.inputAttributes = new InputAttributes(value,placeholder);
            this.inputEvents = new InputEvents();
        }
    }

    //? Idea para la nueva clase InputElement

    const nameField = new InputElement({value:'Fernando', placeholder:'Enter first name', id: 'txtName'});

    console.log({ nameField });

})()