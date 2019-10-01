
let replacemodal = Object.create(modal);

replacemodal.init = function() {

    Object.getPrototypeOf(this).init();

    this.createView();
    this.cacheDom();
    this.setStyles();
    this.bindEvents();
    this.hide();

}

replacemodal.createView = function(){

  Object.getPrototypeOf(this).createView();

  let temp = `


          <table>

          <tr>

            <td><button id="remove">Replace</button></td>

            <td><input type"text" id="keyword" placeholder="containing"></input> from </td>

            <td>
              <label><input type="radio" name="removetype" id="removestart"> Start of Line </label>
              <label><input type="radio" name="removetype" id="removeend"> End of Line </label>
              <label><input type="radio" name="removetype" id="removeanywhere"> Anywhere </label>
            </td>

            <td>to <input type"text" id="replacetext"></input></td>



          </tr>



          </table>

        `;

    document.querySelector('#modal #title').innerText = "Replace";
    document.querySelector('#modal #mbody').innerHTML = temp;

}


replacemodal.cacheDom = function() {

    Object.getPrototypeOf(this).cacheDom();

    this.tfield = this.el.querySelector('#keyword');
    this.removebutton = this.el.querySelector("#remove");
    this.rstart = this.el.querySelector("#removestart");
    this.rend = this.el.querySelector("#removeend");
    this.ranywhere = this.el.querySelector("#removeanywhere");

    this.replacetext = this.el.querySelector('#replacetext');


}

replacemodal.bindEvents = function() {

    Object.getPrototypeOf(this).bindEvents();

    this.removebutton.addEventListener("click", this.handleRemove.bind(this));

}



replacemodal.handleRemove = function(){

      let keywrd = this.tfield.value;
      let text = editor.tfield.innerText;
      let replacetext = this.replacetext.value;

      let filtered = "";

      let lines = text.split("\n");

      if(this.rstart.checked){

            lines.forEach(function(v){

                filtered += v.replace(new RegExp("^" + keywrd, "g"), replacetext);
                filtered += "\n";

            });
      }
      else if(this.rend.checked){

            lines.forEach(function(v){

                filtered += v.replace(new RegExp(keywrd + "$", "g"), replacetext);
                filtered += "\n";

            });

      }
      else if(this.ranywhere.checked){

            lines.forEach(function(v){

                filtered += v.replace(new RegExp(keywrd, "g"), replacetext);
                filtered += "\n";

            });

      }


      editor.tfield.innerText = filtered;




}
