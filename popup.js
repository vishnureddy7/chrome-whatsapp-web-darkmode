let cb = document.getElementById("checkbox");

cb.onchange = function () {
  change_mode(cb.checked);
  update_mode(cb.checked);
}

function update_mode(cbchecked){
  chrome.storage.sync.set({ "enable-dark-whatsapp-web": cbchecked }, function () {
    console.log(cb.checked);
  });
}

function change_mode(cbchecked){
  if(cbchecked){
    chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.executeScript(tab.id, { "code":`
document.body.classList.add("dark");
localStorage['whatsapp-web-mode']="dark";
`});
    });
  }
  else{
    chrome.tabs.getSelected(null, function(tab){
      chrome.tabs.executeScript(tab.id, { "code":`
document.body.classList.remove("dark");
localStorage['whatsapp-web-mode']="light";
`});
    });
  }
}

chrome.storage.sync.get("enable-dark-whatsapp-web",function(config){
  cb.checked = config["enable-dark-whatsapp-web"];
  change_mode(cb.checked);
});

