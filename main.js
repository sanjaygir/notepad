



//initializations
editor.init();

newmodal.init();
menubar.init();

document.addEventListener("click", function(e){

  if(e.target.tagName != "LI"){

    menubar.closeAllMenus();

  }


});
