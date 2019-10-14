let editor = {
    init: function() {
        this.createView();
        this.cacheDom();
        this.setStyles();
        this.bindEvents();
        this.render();
        this.history = [];
    },
    createView: function(){

      let temp = `<div id = "tarea" contenteditable="true" style="word-break: break-all; height: 600px; overflow:scroll;"></div><p id="status"></p>`;

        document.querySelector('#editor').innerHTML = temp;

    },
    cacheDom: function() {
        this.$el = document.querySelector('#editor');
        this.tfield = this.$el.querySelector('#tarea');
        this.status = this.$el.querySelector('#status');
    },
    setStyles: function(){

        this.tfield.style.fontSize = "18px";
        this.tfield.style.lineHeight = 1;

    },
    bindEvents: function() {
        this.tfield.addEventListener('input', this.updateStatus.bind(this));

    },
    render: function() {

    },
    undo: function(){
        this.tfield.innerHTML = this.history.pop();

    },
    updateStatus: function(){

        this.history.push(this.tfield.innerHTML);

        this.status.innerHTML = `Total characters = ${this.tfield.innerText.length}`;

    },
    clearContent: function(){
        this.tfield.innerHTML = "";
    }

};
