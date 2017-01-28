// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function init() {
	$.emailIDTxtFld.hintText = L("emailID");
	$.passwordTxtFld.hintText = L("password");

	$.signinBtn.title = L("signin");
	
	$.signInScreen.title = L("signin");

	//Ti.API.info('height : ' + $.loginView.height + " : " + $.mainView.toImage().height + " : " + Ti.Platform.displayCaps.platformHeight);
}

init();

function winClick(e) {

	if (e.source.apiName != "Ti.UI.TextField") {
		$.emailIDTxtFld.blur();
		$.emailIDTxtFld.hasfocus = 'false';
		$.passwordTxtFld.blur();
		$.passwordTxtFld.hasfocus = 'false';
		$.loginView.scrollingEnabled = true;
	}
}

function backFunc(e){
	$.signInScreen.close();
}
function shiftFocus(e) {

	if (e.source.id == 'emailIDTxtFld') {
		$.loginView.scrollingEnabled = true;
		$.passwordTxtFld.focus();
		$.emailIDTxtFld.hasfocus = 'false';
	} else if (e.source.id == 'passwordTxtFld') {
		$.passwordTxtFld.blur();
		$.loginView.scrollingEnabled = true;
		$.passwordTxtFld.hasfocus = 'false';
		grantAccessFunc($.signinBtn);
	}
}

function txtFldGotFocus(e) {
	e.source.hasfocus = true;
	$.loginView.scrollingEnabled = false;
	// setTimeout(function() {
	// $.loginView.scrollingEnabled = false;
	// }, 200);
}

function txtFldBlur(e) {
	e.source.hasfocus = true;
}

function txtFldGotFocus(e) {
	e.source.hasfocus = true;
	$.loginView.scrollingEnabled = true;
	setTimeout(function() {
		$.loginView.scrollingEnabled = false;
	}, 200);
}

function grantAccessFunc(e) {
	Alloy.Globals.LoadingScreen.open();
	if ($.emailIDTxtFld.value != null && $.emailIDTxtFld.value != "") {
		if (Alloy.Globals.checkemail($.emailIDTxtFld.value.trim())) {
			if ($.passwordTxtFld.value != null && $.passwordTxtFld.value != "") {
				var homeScreen = Alloy.createController("ProfileScreen");
				homeScreen.getView().open();
				Alloy.Globals.LoadingScreen.close();
			} else {
				Alloy.Globals.toast(L("Please_enter_password"));
				Alloy.Globals.LoadingScreen.close();
			}
		} else {
			Alloy.Globals.toast(L("Please_enter_valid_email"));
			Alloy.Globals.LoadingScreen.close();
		}

	} else {
		Alloy.Globals.toast(L("Please_enter_emailid"));
		Alloy.Globals.LoadingScreen.close();
	}

}

function signInFunc(e) {

}
