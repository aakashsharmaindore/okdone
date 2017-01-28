// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

/***
 *
 *  Implementing the Loading Screen
 *
 ***/

if (OS_IOS) {
	Alloy.Globals.LoadingScreen = Alloy.createWidget("Loader").getView();
} else {
	Alloy.Globals.LoadingScreen = Alloy.createWidget("Loader");
}

/***
 *  Toast Message Througout the App This is a widget
 *
 */

var toast = Alloy.createWidget('nl.fokkezb.toast', 'global', {
	// defaults
});

Alloy.Globals.toast = toast.show;
// same as toast.info
Alloy.Globals.error = toast.error;
// applies the 'error' theme

/*
 *get android version
 */

Alloy.Globals.version = Ti.Platform.version.split('.');

/******** Check Valid Email ************/
Alloy.Globals.checkemail = function(emailAddress) {
	Ti.API.info('in check mail ' + emailAddress);
	var str = emailAddress;
	var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (filter.test(str)) {
		testresults = true;
	} else {
		testresults = false;
	}
	return (testresults);
};