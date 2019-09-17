var editor = {
    init: function() {
        this.createView();
        this.cacheDom();
        this.setStyles();
        this.bindEvents();
        this.render();
    },
    createView: function(){

      let temp = `
      <div id = "tarea" contenteditable="true" style="word-break: break-all; height: 400px; overflow:scroll;">

        This is a editable section

      </div>

      <p id="status">
      </p>


      `;

        document.querySelector('#editor').innerHTML = temp;

    },
    cacheDom: function() {
        this.$el = document.querySelector('#editor');
        this.tfield = this.$el.querySelector('#tarea');
        this.status = this.$el.querySelector('#status');
    },
    setStyles: function(){
        
        this.tfield.style.fontSize = "20px";
        this.tfield.style.lineHeight = 1;

    },
    bindEvents: function() {
        this.tfield.addEventListener('input', this.updateStatus.bind(this));
        //this.$ul.delegate('i.del', 'click', this.deletePerson.bind(this));

    },
    render: function() {

    },
    updateStatus: function(){
        this.status.innerHTML = `Total characters = ${this.tfield.innerText.length}`;
        //this.tfield.innerText = this.tfield.innerText;

    },
    clearContent: function(){
        this.tfield.innerHTML = "";
    }

};
