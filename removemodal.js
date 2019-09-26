
let removemodal = Object.create(modal);

removemodal.init = function() {

    Object.getPrototypeOf(this).init();

    this.createView();
    this.cacheDom();
    this.setStyles();
    this.bindEvents();
    this.hide();

}

removemodal.createView = function(){

  Object.getPrototypeOf(this).createView();

  let temp = `
          <input type"text" id="keyword"></input>

          <button id="remove">Remove Lines</button>
        `;

    document.querySelector('#modal #title').innerText = "Remove";
    document.querySelector('#modal #mbody').innerHTML = temp;

}


removemodal.cacheDom = function() {

    Object.getPrototypeOf(this).cacheDom();

    this.tfield = this.el.querySelector('#keyword');
    this.removebutton = this.el.querySelector("#remove");

}

removemodal.bindEvents = function() {

    Object.getPrototypeOf(this).bindEvents();

    this.removebutton.addEventListener("click", this.handleRemove.bind(this));

}

removemodal.handleRemove = function(){

    let keywrd = this.tfield.value;
    let text = editor.tfield.innerText;

    let filtered = "";

    let lines = text.split("\n");

    lines.forEach(function(v){
      if(!v.includes(keywrd)){
        filtered += v;
        filtered += "\n";
      }
    });

    editor.tfield.innerText = filtered;


}
