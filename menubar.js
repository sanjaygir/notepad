
let menubar = {
    init: function() {
        this.createView();
        this.cacheDom();
        this.setStyles();
        this.bindEvents();
    },
    createView: function(){

            let temp = `

                  <div class="drop">
                      <a href="#">File</a>
                      <div class="drop-content">

                        <a href="#" id="new"> New </a>
                        <a href="#" id="open"> Open </a>
                        <a href="#" id="save"> Save </a>
                        <a href="#" id="saveas"> Save As </a>
                        <a href="#" id="exit"> Exit </a>

                      </div>

                  </div>

                    <div class="drop">
                        <a href="#">Edit</a>
                        <div class="drop-content">

                          <a href="#" id="undo"> Undo </a>
                          <a href="#" id="split">Split</a>
                          <a href="#" id="filter">Filter</a>
                          <a href="#" id="unique">Unique</a>
                          <a href="#" id="remove">Remove</a>

                          <a href="#" id="replace"> Replace </a>
                          <a href="#" id="sorta"> Sort Asc </a>
                          <a href="#" id="sortd"> Sort Desc </a>
                          <a href="#" > Time/Date </a>

                        </div>

                    </div>




                    <div class="drop">
                        <a href="#">Font</a>
                        <div class="drop-content">

                          <a href="#" id="fontdown"> Decrease Size </a>
                          <a href="#" id="fontup"> Increase Size </a>


                        </div>

                    </div>



                    <div class="drop">
                        <a href="#">Extract</a>
                        <div class="drop-content">

                          <a href="#" id="emails"> Emails </a>
                          <a href="#" id="links"> Links </a>
                          <a href="#" id="money"> Money </a>
                          <a href="#" id="table"> Table </a>


                        </div>

                    </div>



                      <div class="drop">
                          <a href="#">Cipher</a>
                          <div class="drop-content">

                              <a href="#" id="encrypt"> Encrypt </a>
                              <a href="#" id="decrypt"> Decrypt </a>


                          </div>

                      </div>



                      <div class="drop">
                          <a href="#">Table</a>
                          <div class="drop-content">

                              <a href="#"> Extract Column/s </a>


                          </div>

                      </div>


                        <div class="drop">
                            <a href="#">Help</a>
                            <div class="drop-content">

                                <a href="#"> View Help </a>

                                <a href="#"> About Notepad </a>


                            </div>

                        </div>

            `;

      document.querySelector('#menubar').innerHTML = temp;


    },
    cacheDom: function() {
        this.el = document.querySelector('#menubar');
    },
    setStyles: function(){

      this.el.style.backgroundColor = "#333";
      this.el.style.fontFamily = "Arial";
      //this.el.style.overflow = "hidden";


      let as = this.el.querySelectorAll('a');
      for(let i=0; i<as.length; i++){
        as[i].style.textDecoration = "none";
        as[i].style.float = "left";
        as[i].style.padding = "10px";
        as[i].style.color = "white";
        as[i].style.fontSize = "20px";
      }


      let drops = this.el.querySelectorAll('.drop');
      for(let i=0; i<drops.length; i++){
        drops[i].style.float = "left";
      }

      let dcontents = this.el.querySelectorAll('.drop .drop-content');
      for(let i=0; i<dcontents.length; i++){
        dcontents[i].style.display = "none";
        dcontents[i].style.position = "absolute";
        dcontents[i].style.top = "45px";

      }



      let dcontentsas = this.el.querySelectorAll('.drop .drop-content a');
      for(let i=0; i<dcontentsas.length; i++){
        dcontentsas[i].style.width = "100px";
        dcontentsas[i].style.float = "none";
        dcontentsas[i].style.display = "block";
        dcontentsas[i].style.color = "black";
        dcontentsas[i].style.backgroundColor = "white";



      }



    },
    bindEvents: function() {


      let dcontentshover = this.el.querySelectorAll('.drop');
      for(let i=0; i<dcontentshover.length; i++){

        dcontentshover[i].addEventListener("mouseover", function(e){

          this.querySelector('.drop-content').style.display = "block";

        });

        dcontentshover[i].addEventListener("mouseout", function(e){

          this.querySelector('.drop-content').style.display = "none";

        });

      }



      let contentlinks = this.el.querySelectorAll('.drop-content a');
      for(let i=0; i<contentlinks.length; i++){
        //dcontentshover[i].style.display = "block";

        contentlinks[i].addEventListener("mouseover", function(e){

          this.style.backgroundColor = "#ddd";

        });

        contentlinks[i].addEventListener("mouseout", function(e){

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
            this.el.querySelector('#unique').addEventListener("click", this.handleUnique.bind(this));

            this.el.querySelector('#remove').addEventListener("click", this.handleRemove.bind(this));
            this.el.querySelector('#replace').addEventListener("click", this.handleReplace.bind(this));

            this.el.querySelector('#sorta').addEventListener("click", this.handleSortAscending.bind(this));
            this.el.querySelector('#sortd').addEventListener("click", this.handleSortDescending.bind(this));


            this.el.querySelector('#fontup').addEventListener("click", this.handleIncreaseFont.bind(this));
            this.el.querySelector('#fontdown').addEventListener("click", this.handleDecreaseFont.bind(this));



            this.el.querySelector('#emails').addEventListener("click", this.handleExtractEmails.bind(this));
            this.el.querySelector('#money').addEventListener("click", this.handleExtractMoney.bind(this));
            this.el.querySelector('#links').addEventListener("click", this.handleExtractLinks.bind(this));
            this.el.querySelector('#table').addEventListener("click", this.handleExtractTable.bind(this));




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

    handleUnique: function(e){

      let text = editor.tfield.innerText;

      let unique = "";

      let lines = Array.from(new Set(text.split("\n")));

      lines.forEach(function(v){

          unique += v;
          unique += "\n";

      });

      editor.tfield.innerText = unique;


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


    handleIncreaseFont: function(e){

      editor.tfield.style.fontSize = (parseInt(editor.tfield.style.fontSize) + 2) + "px";

    },

    handleDecreaseFont: function(e){

      editor.tfield.style.fontSize = (parseInt(editor.tfield.style.fontSize) - 2) + "px";

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



    handleExtractTable: function(e){

      let lines = "";

      let d = document.createElement('div');

      d.innerHTML = editor.tfield.innerText;


      let s = d.querySelectorAll('table tr');

      s.forEach(function(v){

        lines += v.innerText.trim().split("\n").join(",");
        lines += "\n";

      });


      editor.tfield.innerText = lines;


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
