
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


          <table>

          <tr>

            <td><button id="remove">Remove</button></td>

            <td><input type"text" id="keyword" placeholder="containing"></input> from </td>

            <td>
              <label><input type="radio" name="removetype" id="removestart"> Start of Line </label>
              <label><input type="radio" name="removetype" id="removeend"> End of Line </label>
              <label><input type="radio" name="removetype" id="removeanywhere"> Anywhere </label>
            </td>



          </tr>

          <tr>

            <td><button id="removel">Remove Lines</button></td>

            <td><label for = "not"> Not  <input type="checkbox" id="not"> </label> <input type"text" id="keywordl" placeholder="containing"></input> from </td>

            <td>
              <label><input type="radio" name="removelinetype" id="removelinestart"> Start of Line </label>
              <label><input type="radio" name="removelinetype" id="removelineend"> End of Line </label>
              <label><input type="radio" name="removelinetype" id="removelineanywhere"> Anywhere </label>
            </td>

          </tr>






          </table>

        `;

    document.querySelector('#modal #title').innerText = "Remove";
    document.querySelector('#modal #mbody').innerHTML = temp;

}


removemodal.cacheDom = function() {

    Object.getPrototypeOf(this).cacheDom();

    this.tfield = this.el.querySelector('#keyword');
    this.removebutton = this.el.querySelector("#remove");
    this.rstart = this.el.querySelector("#removestart");
    this.rend = this.el.querySelector("#removeend");
    this.ranywhere = this.el.querySelector("#removeanywhere");


    this.tfieldl = this.el.querySelector('#keywordl');
    this.removelbutton = this.el.querySelector("#removel");
    this.rlstart = this.el.querySelector("#removelinestart");
    this.rlend = this.el.querySelector("#removelineend");
    this.rlanywhere = this.el.querySelector("#removelineanywhere");
    this.not = this.el.querySelector('#not');




}

removemodal.bindEvents = function() {

    Object.getPrototypeOf(this).bindEvents();

    this.removelbutton.addEventListener("click", this.handleRemoveLine.bind(this));
    this.removebutton.addEventListener("click", this.handleRemove.bind(this));

}



removemodal.handleRemove = function(){


      let keywrd = this.tfield.value;
      let text = editor.tfield.innerText;

      let removed = "";

      let lines = text.split("\n");

      if(this.rstart.checked){

            lines.forEach(function(v){

                removed += v.replace(new RegExp("^" + keywrd, "g"), "");
                removed += "\n";

            });
      }
      else if(this.rend.checked){

            lines.forEach(function(v){

                removed += v.replace(new RegExp(keywrd + "$", "g"), "");
                removed += "\n";

            });

      }
      else if(this.ranywhere.checked){

            lines.forEach(function(v){

                removed += v.replace(new RegExp(keywrd, "g"), "");
                removed += "\n";

            });

      }


      editor.tfield.innerText = removed;




}



removemodal.handleRemoveLine = function(){


    let notContaining = this.not.checked;


    let keywrd = this.tfieldl.value;
    let text = editor.tfield.innerText;

    let removed = "";

    let lines = text.split("\n");


    if(notContaining){


      if(this.rlstart.checked){

            lines.forEach(function(v){
              if(v.startsWith(keywrd)){
                removed += v;
                removed += "\n";
              }
            });
      }
      else if(this.rlend.checked){

            lines.forEach(function(v){
              if(v.endsWith(keywrd)){
                removed += v;
                removed += "\n";
              }
            });

      }
      else if(this.rlanywhere.checked){


            lines.forEach(function(v){
              if(v.includes(keywrd)){
                removed += v;
                removed += "\n";
              }
            });
      
      }


    }
    else{



      if(this.rlstart.checked){

            lines.forEach(function(v){
              if(!v.startsWith(keywrd)){
                removed += v;
                removed += "\n";
              }
            });
      }
      else if(this.rlend.checked){

            lines.forEach(function(v){
              if(!v.endsWith(keywrd)){
                removed += v;
                removed += "\n";
              }
            });

      }
      else if(this.rlanywhere.checked){


            lines.forEach(function(v){
              if(!v.includes(keywrd)){
                removed += v;
                removed += "\n";
              }
            });

      }


    }




    editor.tfield.innerText = removed;

}
