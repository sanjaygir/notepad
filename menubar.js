
var menubar = {
    init: function() {
        this.createView();
        this.cacheDom();
        this.setStyles();
        this.bindEvents();
    },
    createView: function(){

      let temp = `
                <ul class="bar">
                    <li>File
                      <ul class="dropmenu">
                          <li id="new"> New </li>
                          <li id="open"> Open </li>
                          <li id="save"> Save </li>
                          <li id="saveas"> Save As </li>
                          <li id="exit"> Exit </li>
                      </ul>

                    </li>

                    <li>Edit

                      <ul class="dropmenu">
                          <li id="undo"> Undo </li>

                          <!--
                          <li id="cut"> Cut </li>
                          <li> Copy </li>
                          <li id="paste"> Paste </li>
                          <li> Delete </li>
                          -->


                          <li id="find"> Find </li>


                          <!--
                          <li> Find Next </li>
                          -->

                          <li> Replace </li>
                          <li> Go to </li>
                          <li> Select All </li>
                          <li> Time/Date </li>

                      </ul>

                    </li>
                    <li>Format

                        <ul class="dropmenu">
                            <li> Word Wrap </li>
                            <li> Font </li>

                        </ul>

                    </li>
                    <li>View

                          <ul class="dropmenu">
                              <li> Status Bar </li>

                          </ul>


                    </li>
                    <li>Help

                          <ul class="dropmenu">
                              <li> View Help </li>

                              <li> About Notepad </li>

                          </ul>

                    </li>
                </ul>

      `;

      document.querySelector('#menubar').innerHTML = temp;


    },
    cacheDom: function() {
        this.el = document.querySelector('#menubar');
    },
    setStyles: function(){

      let uls = this.el.querySelectorAll('ul');
      for(let i=0; i<uls.length; i++){
        uls[i].style.listStyleType = "none";
      }

      let lis = this.el.querySelectorAll('ul.bar > li');
      for(let i = 0; i < lis.length; i ++ ){
        lis[i].style.float = "left";
        lis[i].style.padding = "20px";
        lis[i].style.cursor = "default";


      }

      let dropmenus = this.el.querySelectorAll(".dropmenu");
      for(let i = 0; i < dropmenus.length; i ++ ){
        dropmenus[i].style.display = "none";
      }

    },
    bindEvents: function() {

            let lis = this.el.querySelectorAll('ul.bar > li');
            for(let i = 0; i < lis.length; i ++ ){

              lis[i].addEventListener("mouseover", function(e){

                this.displayMenu(i);


              }.bind(this));


              lis[i].addEventListener("mouseout", function(e){


                this.closeMenu(i);

              }.bind(this));

            }


            let droplis = this.el.querySelectorAll('ul.dropmenu > li');

            for(let i = 0; i < droplis.length; i ++ ){

                droplis[i].addEventListener("mouseover", function(e){

                  this.style.backgroundColor = "grey";
                  this.style.cursor = "default";

                });
                droplis[i].addEventListener("mouseout", function(e){

                  this.style.backgroundColor = "white";

                });


            }



            this.el.querySelector('#new').addEventListener("click", this.handleNew.bind(this));
            this.el.querySelector('#saveas').addEventListener("click", this.handleSaveAs.bind(this));
            this.el.querySelector('#save').addEventListener("click", this.handleSave.bind(this));

            this.el.querySelector('#open').addEventListener("click", this.handleOpen.bind(this));

            this.el.querySelector('#exit').addEventListener("click", this.handleExit.bind(this));

            this.el.querySelector('#undo').addEventListener("click", this.handleUndo.bind(this));
            this.el.querySelector('#find').addEventListener("click", this.handleFind.bind(this));


    },
    handleUndo: function(e){

      e.stopPropagation();
      editor.undo();
      this.closeAllMenus();


    },
    handleNew: function(e){

      e.stopPropagation();
      newmodal.init();
      newmodal.show();
      this.closeAllMenus();


    },

    handleSave: function(e){
      e.stopPropagation();

      localStorage.setItem(openmodal.currentOpenedFile, editor.tfield.innerHTML);

      this.closeAllMenus();

    },

    handleSaveAs: function(e){

      e.stopPropagation();

      savemodal.init();

      savemodal.show();

      savemodal.filename.focus();

      this.closeAllMenus();

    },

    handleFind: function(e){

      e.stopPropagation();

      findmodal.init();

      findmodal.show();
      findmodal.tfield.focus();

      this.closeAllMenus();

    },
    handleOpen: function(e){

      e.stopPropagation();

      openmodal.init();

      openmodal.show();

      this.closeAllMenus();

    },
    handleExit: function(e){

      e.stopPropagation();

      this.closeAllMenus();


      if (confirm("Close Notepad?")) {
        window.close();
      }



    },
    closeAllMenus: function(){

          let dropmenus = this.el.querySelectorAll(".dropmenu");
          for(let i = 0; i < dropmenus.length; i ++ ){

              dropmenus[i].style.display = "none";


          }

    },
    displayMenu: function(ii){

            let dropmenus = this.el.querySelectorAll(".dropmenu");
            for(let i = 0; i < dropmenus.length; i ++ ){
              if(ii == i){
                dropmenus[i].style.display = "block";

              }
              else{
                dropmenus[i].style.display = "none";

              }

            }

    },
    closeMenu: function(ii){

            let dropmenus = this.el.querySelectorAll(".dropmenu");
            for(let i = 0; i < dropmenus.length; i ++ ){
              if(ii == i){

                dropmenus[i].style.display = "none";

              }

            }

    }

};
