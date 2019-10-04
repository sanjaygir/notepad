
let menubar = {
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
                          <li id="split">Split</li>
                          <li id="filter">Filter</li>
                          <li id="remove">Remove</li>

                          <li id="replace"> Replace </li>
                          <li id="sorta"> Sort Asc </li>
                          <li id="sortd"> Sort Desc </li>
                          <li> Time/Date </li>

                      </ul>

                    </li>
                    <li>Extract

                        <ul class="dropmenu">
                            <li id="emails"> Emails </li>
                            <li id="links"> Links </li>
                            <li id="money"> Money </li>
                            <li id="phone"> Phone Numbers </li>

                        </ul>

                    </li>


                    <li>Cipher

                          <ul class="dropmenu">
                              <li id="encrypt"> Encrypt </li>
                              <li id="decrypt"> Decrypt </li>

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
            this.el.querySelector('#open').addEventListener("click", this.handleOpen.bind(this));
            this.el.querySelector('#save').addEventListener("click", this.handleSave.bind(this));
            this.el.querySelector('#saveas').addEventListener("click", this.handleSaveAs.bind(this));
            this.el.querySelector('#exit').addEventListener("click", this.handleExit.bind(this));


            this.el.querySelector('#undo').addEventListener("click", this.handleUndo.bind(this));
            this.el.querySelector('#split').addEventListener("click", this.handleSplit.bind(this));
            this.el.querySelector('#filter').addEventListener("click", this.handleFilter.bind(this));
            this.el.querySelector('#remove').addEventListener("click", this.handleRemove.bind(this));
            this.el.querySelector('#replace').addEventListener("click", this.handleReplace.bind(this));

            this.el.querySelector('#sorta').addEventListener("click", this.handleSortAscending.bind(this));
            this.el.querySelector('#sortd').addEventListener("click", this.handleSortDescending.bind(this));



            this.el.querySelector('#emails').addEventListener("click", this.handleExtractEmails.bind(this));
            this.el.querySelector('#money').addEventListener("click", this.handleExtractMoney.bind(this));
            this.el.querySelector('#links').addEventListener("click", this.handleExtractLinks.bind(this));




            this.el.querySelector('#encrypt').addEventListener("click", this.handleEncrypt.bind(this));
            this.el.querySelector('#decrypt').addEventListener("click", this.handleDecrypt.bind(this));



    },
    handleNew: function(e){

      e.stopPropagation();
      openmodal.currentOpenedFile = "";

      newmodal.init();
      newmodal.show();
      this.closeAllMenus();


    },
    handleOpen: function(e){

      e.stopPropagation();

      openmodal.init();

      openmodal.show();

      this.closeAllMenus();

    },

    handleSave: function(e){
      e.stopPropagation();


      if(!openmodal.currentOpenedFile){

        this.handleSaveAs(e);

      }
      else{

        localStorage.setItem(openmodal.currentOpenedFile, editor.tfield.innerHTML);

      }

      this.closeAllMenus();

    },

    handleSaveAs: function(e){

      e.stopPropagation();

      savemodal.init();

      savemodal.show();

      savemodal.filename.focus();

      this.closeAllMenus();

    },

    handleExit: function(e){

      e.stopPropagation();

      this.closeAllMenus();


      if (confirm("Close Notepad?")) {
        window.close();
      }



    },
    handleUndo: function(e){

      e.stopPropagation();
      editor.undo();
      this.closeAllMenus();


    },
    handleSplit: function(e){

            let matches = editor.tfield.innerText.match(/\S+/g) || [];
            let emails = "";

            matches.forEach(function(v){
              emails += v;
              emails += "\n";
            });
            editor.tfield.innerText = emails;


    },

    handleFilter: function(e){
            e.stopPropagation();

            filtermodal.init();

            filtermodal.show();

            this.closeAllMenus();


    },
    handleRemove: function(e){
            e.stopPropagation();

            removemodal.init();

            removemodal.show();

            this.closeAllMenus();


    },
    handleReplace: function(e){
            e.stopPropagation();

            replacemodal.init();

            replacemodal.show();

            this.closeAllMenus();


    },

    handleSortAscending: function(e){

          let text = editor.tfield.innerText;

          let sorted = "";

          let lines = text.split("\n").sort();

          lines.forEach(function(v){

              sorted += v;
              sorted += "\n";

          });

          editor.tfield.innerText = sorted;




    },


    handleSortDescending: function(e){

            let text = editor.tfield.innerText;

            let sorted = "";

            let lines = text.split("\n").sort().reverse();

            lines.forEach(function(v){

                sorted += v;
                sorted += "\n";

            });

            editor.tfield.innerText = sorted;


    },

    handleExtractEmails: function(e){

      let matches = editor.tfield.innerText.match(/[a-z]+@[a-z]+[.][a-z]+/g);
      let emails = "";


      if(matches){
        matches.forEach(function(v){
          emails += v;
          emails += "\n";
        });
        editor.tfield.innerText = emails;

      }
      else{

        alert("No emails found!");

      }

    },

    handleExtractMoney: function(e){

      let matches = editor.tfield.innerText.match(/\$\d+([.]\d+)?/g);
      let money = "";

      if(matches){
        matches.forEach(function(v){
          money += v;
          money += "\n";
        });
        editor.tfield.innerText = money;

      }
      else{

        alert("No money found!");

      }

    },

    handleExtractLinks: function(e){

      let hrefsdouble = Array.from(editor.tfield.innerText.matchAll(/href[\s]*=[\s]*"([^"]*)"/g)) || [];
      let srcsdouble = Array.from(editor.tfield.innerText.matchAll(/src[\s]*=[\s]*"([^"]*)"/g)) || [];
      let hrefssingle = Array.from(editor.tfield.innerText.matchAll(/href[\s]*=[\s]*'([^']*)'/g)) || [];
      let srcssingle = Array.from(editor.tfield.innerText.matchAll(/src[\s]*=[\s]*'([^']*)'/g)) || [];

      let links = [];

      links = hrefsdouble.concat(srcsdouble.concat(hrefssingle.concat(srcssingle)));

      let linksstr = "";

        if(links.length > 0){

          links.forEach(function(v){
            linksstr += v[1];
            linksstr += "\n";
          });

        editor.tfield.innerText = linksstr;

      }
      else{

        alert("No links found!");

      }

    },

    handleEncrypt: function(e){


        editor.tfield.innerText = cipher.encrypt(editor.tfield.innerText);


    },
    handleDecrypt: function(e){

        editor.tfield.innerText = cipher.decrypt(editor.tfield.innerText).replace(/spacespace/g, " ");


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
