
let filtermodal = Object.create(modal);

filtermodal.init = function() {

    Object.getPrototypeOf(this).init();

    this.createView();
    this.cacheDom();
    this.setStyles();
    this.bindEvents();
    this.hide();

}


filtermodal.createView = function(){

  Object.getPrototypeOf(this).createView();

  let temp = `
          <input type"text" id="keyword"></input>

          <button id="find">Filter</button>
        `;

    document.querySelector('#modal #mbody').innerHTML = temp;

}


filtermodal.cacheDom = function() {

    Object.getPrototypeOf(this).cacheDom();

    this.tfield = Object.getPrototypeOf(this).el.querySelector('#keyword');
    this.findbutton = Object.getPrototypeOf(this).el.querySelector("#find");

}

filtermodal.bindEvents = function() {

    Object.getPrototypeOf(this).bindEvents();

    this.findbutton.addEventListener("click", this.handleFilter.bind(this));

}

filtermodal.handleFilter = function(){

    let keywrd = this.tfield.value;
    let text = editor.tfield.innerText;

    let filtered = "";

    let lines = text.split("\n");

    lines.forEach(function(v){
      if(v.includes(keywrd)){
        filtered += v;
        filtered += "\n";
      }
    });

    editor.tfield.innerText = filtered;


}
