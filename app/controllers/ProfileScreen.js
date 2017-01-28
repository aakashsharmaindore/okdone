// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
Alloy.Globals.navWindow = $.navWindow;
function checkClick(e) {
	Ti.API.info('e.source.children.id' + e.source.id);
	if (e.source.children[0].text == "Shared") {
		$.shared.backgroundColor = "#3385ff";
		$.privateView.backgroundColor = "#FFFFFF";
		$.sharedLabel.color = "#FFFFFF";
		$.privateLabel.color = "#3385ff";

	}
	if (e.source.children[0].text == "Private") {
		$.shared.backgroundColor = "#FFFFFF";
		$.privateView.backgroundColor = "#3385ff";
		$.sharedLabel.color = "#3385ff";
		$.privateLabel.color = "#FFFFFF";
	}
}

function startEffect(e) {
	e.source.backgroundColor = "#ff80df";
}

function stopEffect(e) {
	e.source.backgroundColor = "#3385ff";
}

function opneGreedScreen(e){
	var greedScreen=Alloy.createController('ProductList').getView();
	if(OS_IOS)
	Alloy.Globals.navWindow.openWindow(greedScreen);
	if(OS_ANDROID)
	greedScreen.open({
		animated : false,
	});
}
