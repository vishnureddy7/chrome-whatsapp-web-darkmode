if(localStorage['whatsapp-web-mode']==undefined){
  document.body.classList.add("dark");
  localStorage['whatsapp-web-mode']="dark";
}
else if(localStorage['whatsapp-web-mode']=="dark"){
  document.body.classList.add("dark");
}
else{
  document.body.classList.remove("dark");
}
