var findmodal = {
    init: function() {
        this.s_x = 0;
        this.s_y = 0;

        this.lastText = "";
        this.lastIndex = 0;

        this.createView();
        this.cacheDom();
        this.setStyles();
        this.bindEvents();

        this.hide();

    },
    createView: function(){

        let temp = `
                <div id="mheading">
                    Find &nbsp;&nbsp;&nbsp;&nbsp;<span id="close">x</span>
                </div>
                <div id = "mbody">

                  <input type"text" id="keyword"></input>

                  <button id="find">Find</button>

                </div>`;

            document.querySelector('#findmodal').innerHTML = temp;


    },
    cacheDom: function() {

        this.el = document.querySelector('#findmodal');
        this.heading = this.el.querySelector('#mheading');

        this.body = this.el.querySelector("#mbody");
        this.close = this.el.querySelector('#close');

        this.tfield = this.el.querySelector('#keyword');
        this.findbutton = this.el.querySelector("#find");


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

        this.findbutton.addEventListener("click", this.searchText.bind(this));

    },

    indicesOf: function(s, k){

      let indices = [];
      let idx = s.indexOf(k);
      while (idx != -1) {
        indices.push(idx);
        idx = s.indexOf(k, idx + 1);
      }

      return indices;

    },

    countRows: function(s){

        let r = 1;

        let i = 0;
        let c = 0;

        for(i = 0; i<s.length; i++){
          if(s[i] == "\n"){
              r += 1;
              c = 0;
          }
          if(c > 123){
              r += 1;
              c = 0;
          }

          c += 1;

        }

        return r;

    },

    highlightText: function(text, ni, l){

          editor.tfield.focus();
          //editor.tfield.setSelectionRange(ni, ni + l);

          let row = this.countRows(text.substring(0, ni));

        //  alert(row);
          editor.tfield.scrollTop = 20 * row - 200;

          this.tfield.focus();

    },
    searchText: function(){

        let keywrd = this.tfield.value;
        let text = editor.tfield.innerText;
        let i = 0;

        let indics = this.indicesOf(text, keywrd);

        let ni = indics[i];


        if(this.lastText == keywrd){


          if(this.lastIndex == (indics.length - 1)){

              this.lastIndex = -1;

          }


          ni = indics[this.lastIndex + 1];
          this.lastIndex += 1;

        }
        else{

          this.lastIndex = 0;

        }

        this.highlightText(text, ni, keywrd.length);


        this.lastText = keywrd;

    },
    handleCloseClick: function(){
      this.hide();
    },
    handleSave: function(){

        localStorage.setItem(this.filename.value, editor.tfield.innerHTML);

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
