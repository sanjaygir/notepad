
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
                          <li> Save </li>
                          <li id="saveas"> Save As </li>
                          <li> Page Setup </li>
                          <li> Print </li>
                          <li> Exit </li>

                      </ul>

                    </li>

                    <li>Edit

                      <ul class="dropmenu">
                          <li> Undo </li>
                          <li> Cut </li>
                          <li> Copy </li>
                          <li> Paste </li>
                          <li> Delete </li>
                          <li> Find </li>
                          <li> Find Next </li>
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
      }

      let dropmenus = this.el.querySelectorAll(".dropmenu");
      for(let i = 0; i < dropmenus.length; i ++ ){
        dropmenus[i].style.display = "none";
      }

    },
    bindEvents: function() {

            let lis = this.el.querySelectorAll('ul.bar > li');
            for(let i = 0; i < lis.length; i ++ ){

              lis[i].addEventListener("click", function(){

                this.displayMenu(i);

              }.bind(this));

            }


            this.el.querySelector('#new').addEventListener("click", this.handleNew.bind(this));
            this.el.querySelector('#saveas').addEventListener("click", this.handleSaveAs.bind(this));
            this.el.querySelector('#open').addEventListener("click", this.handleOpen.bind(this));



    },
    handleNew: function(e){

        newmodal.show();
        this.closeAllMenus();

    },
    handleSaveAs: function(e){

        savemodal.show();
        this.closeAllMenus();

    },
    handleOpen: function(e){
      openmodal.show();
      this.closeAllMenus();
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

    }

};
