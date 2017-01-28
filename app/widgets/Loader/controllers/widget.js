// function hideActionBar(e) {
//
// $.loderWin.activity.actionBar.hide();
// }
//
// $.loderWin.addEventListener('android:back', function(e) {
// e.cancelBubble = false;
//
// Ti.App.fireEvent('android_back_button');
// });

//$.loader.show();

function showIndicator(e) {
	$.activityIndicator.show();
	// setTimeout(function(){
	// e.source.close();
	// $.activityIndicator.hide();
	// }, 6000);
}

exports.open = function() {
	$.activityIndicatorAnd.show();
};

exports.close = function() {
	$.activityIndicatorAnd.hide();
};

