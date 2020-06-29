chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ "enable-dark-whatsapp-web": true }, function () {
    console.log(true);
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "web.whatsapp.com" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
});

