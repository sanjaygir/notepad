
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

            <td><button id="replace">Replace</button></td>

            <td><input type"text" id="keyword" placeholder="containing"></input> from </td>

            <td>
              <label><input type="radio" name="replacetype" id="replacestart"> Start of Line </label>
              <label><input type="radio" name="replacetype" id="replaceend"> End of Line </label>
              <label><input type="radio" name="replacetype" id="replaceanywhere"> Anywhere </label>
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
    this.replacebutton = this.el.querySelector("#replace");
    this.rstart = this.el.querySelector("#replacestart");
    this.rend = this.el.querySelector("#replaceend");
    this.ranywhere = this.el.querySelector("#replaceanywhere");

    this.replacetext = this.el.querySelector('#replacetext');


}

replacemodal.bindEvents = function() {

    Object.getPrototypeOf(this).bindEvents();

    this.replacebutton.addEventListener("click", this.handleReplace.bind(this));

}

replacemodal.handleReplace = function(){

      let keywrd = this.tfield.value;
      let text = editor.tfield.innerText;
      let replacetext = this.replacetext.value;

      let replaced = "";

      let lines = text.split("\n");

      if(this.rstart.checked){

            lines.forEach(function(v){

                replaced += v.replace(new RegExp("^" + keywrd, "g"), replacetext);
                replaced += "\n";

            });
      }
      else if(this.rend.checked){

            lines.forEach(function(v){

                replaced += v.replace(new RegExp(keywrd + "$", "g"), replacetext);
                replaced += "\n";

            });

      }
      else if(this.ranywhere.checked){

            lines.forEach(function(v){

                replaced += v.replace(new RegExp(keywrd, "g"), replacetext);
                replaced += "\n";

            });

      }


      editor.tfield.innerText = replaced;




}
