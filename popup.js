chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
	if (message.text === "clicked") {
		window.alert('SCRAPTON TIME');
		let audio = './sounds/ots.mp3';
		audio = chrome.extension.getURL(audio);
		audio = new Audio(audio);
		audio.play();
		setTimeout(() => {
			audio.pause();
		}, 17678);
		scrapton();
	}
}
function scrapton() {
	let filenames = ["jim.png", "dwight.png", "michael.png", "pam.png", "dwightkevin.png", "kevinmalone.png", "kevinchilli.png", "kevinstare.png", "om1.png", "om2.png", "om3.png", "om4.png", "om5.png"];
	let soundnames = ["jim.mp3", "dwight.mp3", "michael.mp3", "pam.mp3", "dwightkevin.mp3", "kevinmalone.mp3", "kevinchilli.mp3", "kevinstare.mp3", "om1.mp3", "michael.mp3", "dwight.mp3", "om1.mp3", "om5.mp3"];
	let imgs = document.querySelectorAll('img');
	for (imgElt of imgs) {
		let randomNum = Math.floor(Math.random() * filenames.length);
		let file = './images/' + filenames[randomNum];
		imgElt.src = chrome.extension.getURL(file);
		imgElt.srcset = chrome.extension.getURL(file);
		let sound = './sounds/' + soundnames[randomNum];
		sound = chrome.extension.getURL(sound);
		imgElt.setAttribute('onclick', '(function() { new Audio("' + sound + '").play(); })()');
	}
}