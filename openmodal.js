var openmodal = {
    init: function() {
        this.s_x = 0;
        this.s_y = 0;

        this.currentOpenedFile = "";

        this.createView();
        this.cacheDom();
        this.setStyles();
        this.bindEvents();

        this.hide();

    },
    createView: function(){


        let opts = ``;

        for (let i=0; i< localStorage.length; i++) {
            let key = localStorage.key(i);

            if(!key.includes("pass-")){
              opts += `<option>${key}</option>`;
            }


        }

        let sel = `<select id="fname" size="${localStorage.length}"> ${opts} </select>`;

        let temp = `
                <div id="mheading">
                    Open &nbsp;&nbsp;&nbsp;&nbsp;<span id="close">x</span>
                </div>
                <div id = "mbody">

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

                </div>`;




            document.querySelector('#openmodal').innerHTML = temp;


    },
    cacheDom: function() {

        this.el = document.querySelector('#openmodal');
        this.heading = this.el.querySelector('#mheading');
        this.body = this.el.querySelector("#mbody");
        this.close = this.el.querySelector('#close');
        this.filename = this.el.querySelector('#fname');
        this.pass = this.el.querySelector('#pass');
        this.openbutton = this.el.querySelector("#open");


    },
    setStyles: function(){
        this.el.style.position = "absolute";
        this.el.style.top = (window.innerHeight / 2 - 100) + "px";
        this.el.style.left = (window.innerWidth / 2 - 100) + "px";
        this.el.style.backgroundColor = "#f1f1f1";
        this.el.style.border = "1px solid #d3d3d3";
        this.el.style.textAlign = "center";
        this.el.style.boxShadow = "5px 5px grey";

        this.heading.style.cursor = "move";
        this.heading.style.backgroundColor = "#2196F3";
        this.heading.style.color = "#fff";
        this.heading.style.paddingTop = "10px";
        this.heading.style.paddingBottom = "10px";

        this.body.style.padding = "10px";

        this.close.style.cursor = "auto";

    },
    bindEvents: function() {

        this.heading.addEventListener("mousedown", this.handleDown.bind(this));
        this.close.addEventListener("click", this.handleCloseClick.bind(this));

        this.openbutton.addEventListener("click", this.handleOpen.bind(this));

    },
    handleCloseClick: function(){
      this.hide();
    },
    handleOpen: function(){

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


    },
    handleNo: function(){

      this.hide();

    },
    handleDown: function(e){

        this.s_x = e.clientX;
        this.s_y = e.clientY;

        this.moveHandler = this.handleMove.bind(this);
        this.upHandler = this.handleUp.bind(this);

        document.addEventListener("mousemove", this.moveHandler);
        document.addEventListener("mouseup", this.upHandler);


    },
    handleMove: function(e){

      e.preventDefault();


			this.el.style.top = this.el.offsetTop - (this.s_y - e.clientY ) + "px";
			this.el.style.left = this.el.offsetLeft - (this.s_x - e.clientX ) + "px";

			this.s_x = e.clientX;
			this.s_y = e.clientY;


    },
    handleUp: function(e){


        document.removeEventListener("mouseup", this.upHandler);
        document.removeEventListener("mousemove", this.moveHandler);

    },
    show:function(){


      this.el.style.display = "block";
      this.el.style.top = (window.innerHeight / 2 - 100) + "px";
      this.el.style.left = (window.innerWidth / 2 - 100) + "px";

    },
    hide: function(){

        this.el.style.display = "none";

    }


};
