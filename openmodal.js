
let openmodal = Object.create(modal);


openmodal.init = function() {

    Object.getPrototypeOf(this).init();

    this.currentOpenedFile = "";

    this.createView();
    this.cacheDom();
    this.setStyles();
    this.bindEvents();
    this.hide();

}

openmodal.createView = function(){

  Object.getPrototypeOf(this).createView();

  let opts = ``;

  for (let i=0; i< localStorage.length; i++) {
      let key = localStorage.key(i);

      if(!key.includes("pass-")){
        opts += `<option>${key}</option>`;
      }


  }

  let sel = `<select id="fname" size="${localStorage.length}"> ${opts} </select>`;

  let temp = `

            <label>Please select the document you want to open? </label>
            <br>
            <br>


            ${sel}
            <br>
            <br>

            <input type="password" placeholder="password" id="pass"></input>

            <br>
            <br>
            <button id="open">Open</button>

          `;

      document.querySelector('#modal #title').innerText = "Open";
      document.querySelector('#modal #mbody').innerHTML = temp;


}


openmodal.cacheDom = function() {

    Object.getPrototypeOf(this).cacheDom();

    this.filename = this.el.querySelector('#fname');
    this.pass = this.el.querySelector('#pass');
    this.openbutton = this.el.querySelector("#open");


}

openmodal.bindEvents = function() {

    Object.getPrototypeOf(this).bindEvents();

    this.openbutton.addEventListener("click", this.handleOpen.bind(this));

}

openmodal.handleOpen = function(){

    let password = localStorage.getItem("pass-" + this.filename.value);

    if(password && this.pass.value != password){

      alert("Wrong password!");
      return;

    }

    let data = localStorage.getItem(this.filename.value);
		if(data){
			editor.tfield.innerHTML = data;
		}

    this.currentOpenedFile = this.filename.value;


    this.hide();


}
