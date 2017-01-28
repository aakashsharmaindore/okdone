// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function init() {
	$.firstNameTxtFld.hintText = L("firstName");
	$.lastNameTxtFld.hintText = L("lastName");
	$.emailIDTxtFld.hintText = L("emailID");
	$.passwordTxtFld.hintText = L("password");
	$.confirmPswdTxtFld.hintText = L("confirm_password");

	$.signupBtn.title = L("signup");

	$.login_quest_Lbl.text = L("do_you_have_existing_account");
	$.signinBtn.title = L("signin");
	$.fbLoginBtn.title = L("facebook_connect");
	
	$.loginScreen.title = L("app_name");

	//Ti.API.info('height : ' + $.loginView.height + " : " + $.mainView.toImage().height + " : " + Ti.Platform.displayCaps.platformHeight);
}

init();

function winClick(e) {

	if (e.source.apiName != "Ti.UI.TextField") {
		$.firstNameTxtFld.blur();
		$.firstNameTxtFld.hasfocus = 'false';
		$.lastNameTxtFld.blur();
		$.lastNameTxtFld.hasfocus = 'false';
		$.emailIDTxtFld.blur();
		$.emailIDTxtFld.hasfocus = 'false';
		$.passwordTxtFld.blur();
		$.passwordTxtFld.hasfocus = 'false';
		$.confirmPswdTxtFld.blur();
		$.confirmPswdTxtFld.hasfocus = 'false';
		$.loginView.scrollingEnabled = true;
	}
}

function shiftFocus(e) {

	if (e.source.id == 'firstNameTxtFld') {
		$.loginView.scrollingEnabled = true;
		$.lastNameTxtFld.focus();
		$.firstNameTxtFld.hasfocus = 'false';
	} else if (e.source.id == 'lastNameTxtFld') {
		$.loginView.scrollingEnabled = true;
		$.emailIDTxtFld.focus();
		$.lastNameTxtFld.hasfocus = 'false';
	} else if (e.source.id == 'emailIDTxtFld') {
		$.loginView.scrollingEnabled = true;
		$.passwordTxtFld.focus();
		$.emailIDTxtFld.hasfocus = 'false';
	} else if (e.source.id == 'passwordTxtFld') {
		$.loginView.scrollingEnabled = true;
		$.confirmPswdTxtFld.focus();
		$.passwordTxtFld.hasfocus = 'false';
	} else if (e.source.id == 'confirmPswdTxtFld') {
		$.confirmPswdTxtFld.blur();
		$.loginView.scrollingEnabled = true;
		$.confirmPswdTxtFld.hasfocus = 'false';
		signUpFunc($.signupBtn);

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

function signUpFunc(e) {
	Alloy.Globals.LoadingScreen.open();
	if ($.firstNameTxtFld.value != null && $.firstNameTxtFld.value != "") {
		if ($.lastNameTxtFld.value != null && $.lastNameTxtFld.value != "") {
			if ($.emailIDTxtFld.value != null && $.emailIDTxtFld.value != "") {
				if (Alloy.Globals.checkemail($.emailIDTxtFld.value.trim())) {
					if ($.passwordTxtFld.value != null && $.passwordTxtFld.value != "") {
						if ($.passwordTxtFld.value == $.confirmPswdTxtFld.value) {
							var homeScreen = Alloy.createController("ProfileScreen");
							homeScreen.getView().open();
							Alloy.Globals.LoadingScreen.close();
						} else {
							Alloy.Globals.toast(L("Please_confirm_password"));
							Alloy.Globals.LoadingScreen.close();
						}
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
		} else {
			Alloy.Globals.toast(L("Please_enter_last_name"));
			Alloy.Globals.LoadingScreen.close();
		}
	} else {
		Alloy.Globals.toast(L("Please_enter_first_name"));
		Alloy.Globals.LoadingScreen.close();
	}
}

function signInFunc(e) {
	var signInScreen = Alloy.createController("SigninScreen").getView();	
	if (OS_IOS)
		$.loginNavWindow.openWindow(signInScreen);
	else if (OS_ANDROID)
		signInScreen.open();
}
