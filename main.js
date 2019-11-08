




document.addEventListener('DOMContentLoaded', (event) => {
  //the event occurred



  //initializations
  editor.init();

  /*
  newmodal.init();
  savemodal.init();
  openmodal.init();
  filtermodal.init();
  */

  menubar.init();



  document.addEventListener("click", function(e){

    if(e.target.tagName != "LI"){


      menubar.closeAllMenus();

    }


  });



});
