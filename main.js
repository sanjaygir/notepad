



//initializations
editor.init();

newmodal.init();
savemodal.init();
openmodal.init();
findmodal.init();
filtermodal.init();

menubar.init();



document.addEventListener("click", function(e){


  if(e.target.tagName != "LI"){


    menubar.closeAllMenus();

  }


});
