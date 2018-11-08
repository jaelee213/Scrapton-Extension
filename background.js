
chrome.browserAction.onClicked.addListener(clickedButton);

function clickedButton(tab) {
	let mssg = { text: "clicked" };
	chrome.tabs.sendMessage(tab.id, mssg);
}