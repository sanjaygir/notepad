
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
          <button id="remove">Remove</button> <br><br>

          <input type"text" id="keywordl"></input>
          <button id="removel">Remove Lines</button> <br>

        `;

    document.querySelector('#modal #title').innerText = "Remove";
    document.querySelector('#modal #mbody').innerHTML = temp;

}


removemodal.cacheDom = function() {

    Object.getPrototypeOf(this).cacheDom();

    this.tfieldl = this.el.querySelector('#keywordl');
    this.tfield = this.el.querySelector('#keyword');

    this.removelbutton = this.el.querySelector("#removel");
    this.removebutton = this.el.querySelector("#remove");


}

removemodal.bindEvents = function() {

    Object.getPrototypeOf(this).bindEvents();

    this.removelbutton.addEventListener("click", this.handleRemoveLine.bind(this));
    this.removebutton.addEventListener("click", this.handleRemove.bind(this));

}

removemodal.handleRemoveLine = function(){

    let keywrd = this.tfieldl.value;
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

removemodal.handleRemove = function(){

      let keywrd = this.tfield.value;

      let text = editor.tfield.innerText;

      let replaced = text.replace(new RegExp(keywrd, "g"), "");

      editor.tfield.innerText = replaced;

}
