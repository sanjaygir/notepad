



//initializations
editor.init();

newmodal.init();
savemodal.init();
openmodal.init();

menubar.init();


document.addEventListener("click", function(e){

  if(e.target.tagName != "LI"){

    menubar.closeAllMenus();

  }


});
