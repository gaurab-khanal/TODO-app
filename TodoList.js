class TodoList extends HTMLElement{
    constructor(){
        super();

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                
                button{
                    border: none;
                    padding: 6px 10px;
                    border-radius: 10px;
                    cursor: pointer;
                }
                
            </style>
            <div class='container'>
                <input type='text' id='inputBox'>
                <button id='itemButton'>Add Item</button>
                <ul id='itemList'></ul>
            </div>
        `
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true))

        //access the elements
        this.inputBox = this.shadowRoot.querySelector('#inputBox');
        this.itemButton = this.shadowRoot.querySelector('#itemButton');
        this.itemList = this.shadowRoot.querySelector('#itemList');

        // add event listener
        this.itemButton.addEventListener('click', this.addItem.bind(this));
    }

    addItem(){
        console.log("button CLicked");
        const list = document.createElement('li');
        list.textContent = this.inputBox.value;
        this.itemList.appendChild(list);
        this.inputBox.value = '';
    }

    
}

customElements.define("todo-list", TodoList);