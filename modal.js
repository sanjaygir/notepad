let modal = {
    init: function() {
        this.s_x = 0;
        this.s_y = 0;

        this.createView();
        this.cacheDom();
        this.setStyles();
        this.bindEvents();

        this.hide();

    },
    createView: function(){

        let temp = `
                <div id="mheading">
                    <span id="title"></span> &nbsp;&nbsp;&nbsp;&nbsp;<span id="close">x</span>
                </div>
                <div id = "mbody">


                </div>`;

            document.querySelector('#modal').innerHTML = temp;


    },
    cacheDom: function() {

        this.el = document.querySelector('#modal');
        this.heading = this.el.querySelector('#mheading');
        this.body = this.el.querySelector("#mbody");
        this.close = this.el.querySelector('#close');

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

    },
    handleCloseClick: function(){
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
