
let newmodal = Object.create(modal);

newmodal.init = function() {

    Object.getPrototypeOf(this).init();

    this.createView();
    this.cacheDom();
    this.setStyles();
    this.bindEvents();
    this.hide();

}

newmodal.createView = function(){

  Object.getPrototypeOf(this).createView();


  let temp = `
           <p> Are you sure you would like to clear the document? </p>

            <button id="yes">Yes</button>
            <button id="no">No</button>

          `;

      document.querySelector('#modal #title').innerText = "New";
      document.querySelector('#modal #mbody').innerHTML = temp;


}


newmodal.cacheDom = function() {

    Object.getPrototypeOf(this).cacheDom();

    this.yesbutton = this.el.querySelector("#yes");
    this.nobutton = this.el.querySelector("#no");



}

newmodal.bindEvents = function() {

    Object.getPrototypeOf(this).bindEvents();

    this.yesbutton.addEventListener("click", this.handleYes.bind(this));
    this.nobutton.addEventListener("click", this.handleNo.bind(this));

}


newmodal.handleYes = function(){

    editor.clearContent();
    this.hide();

}

newmodal.handleNo = function(){

    this.hide();

}
