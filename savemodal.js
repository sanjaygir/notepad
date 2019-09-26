
let savemodal = Object.create(modal);


savemodal.init = function() {

    Object.getPrototypeOf(this).init();

    this.createView();
    this.cacheDom();
    this.setStyles();
    this.bindEvents();
    this.hide();

}

savemodal.createView = function(){

  Object.getPrototypeOf(this).createView();

  let temp = `

            <label>Please enter the name you want to save this document as </label>
            <input type"text" id="fname"></input>
            <br>

            <label>Please enter password to lock this file </label>
            <input type="password" id="pass"></input>
            <br>

            <button id="save">Save</button>

          `;

      document.querySelector('#modal #mbody').innerHTML = temp;

}


savemodal.cacheDom = function() {

    Object.getPrototypeOf(this).cacheDom();

    this.filename = this.el.querySelector('#fname');
    this.pass = this.el.querySelector('#pass');
    this.savebutton = this.el.querySelector("#save");


}

savemodal.bindEvents = function() {

    Object.getPrototypeOf(this).bindEvents();

    this.savebutton.addEventListener("click", this.handleSave.bind(this));

}


savemodal.handleSave = function(){

    localStorage.setItem(this.filename.value, editor.tfield.innerHTML);

    if(this.pass.value){
      localStorage.setItem("pass-" + this.filename.value, this.pass.value);
    }

    openmodal.currentOpenedFile = this.filename.value;

    this.hide();


}
