// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var data = [{
	'model' : 'Canon XLS-1',
	'images' : '/images/camera.png',
	'rating' : '4',
	'price' : "$ 450",
}, {
	'model' : 'Canon XLS-2',
	'images' : '/images/a.png',
	'rating' : '1',
	'price' : "$ 550",
}, {
	'model' : 'Canon XLS-3',
	'images' : '/images/b.png',
	'rating' : '5',
	'price' : "$ 890",
}, {
	'model' : 'Canon XLS-4',
	'images' : '/images/c.png',
	'rating' : '3',
	'price' : "$ 420",
}, {
	'model' : 'Canon XLS-5',
	'images' : '/images/d.png',
	'rating' : '5',
	'price' : "$ 360",
}, {
	'model' : 'Canon XLS-6',
	'images' : '/images/camera.png',
	'rating' : '2',
	'price' : "$ 600",
}, {
	'model' : 'Canon XLS-7',
	'images' : '/images/a.png',
	'rating' : '4',
	'price' : "$ 750",
}, {
	'model' : 'Canon XLS-8',
	'images' : '/images/b.png',
	'rating' : '3',
	'price' : "$ 780",
}, {
	'model' : 'Canon XLS-9',
	'images' : '/images/c.png',
	'rating' : '2',
	'price' : "$ 360",
}, {
	'model' : 'Canon XLS-10',
	'images' : '/images/d.png',
	'rating' : '4',
	'price' : "$ 460",
}, {
	'model' : 'Canon XLS-11',
	'images' : '/images/camera.png',
	'rating' : '3',
	'price' : "$ 450",
}, {
	'model' : 'Canon XLS-12',
	'images' : '/images/a.png',
	'rating' : '4',
	'price' : "$ 500",
}, {
	'model' : 'Canon XLS-13',
	'images' : '/images/b.png',
	'rating' : '2',
	'price' : "$ 510",
}];
Ti.API.info('length of data is : ' + data.length);
var rowCount = 0;
var ViewIs;
var productImage;
if (data.length > 0) {

	for (var i = 1; i <= parseInt(data.length / 2) + 1; i++) {
		var viewone = Ti.UI.createView({
			left : "10dp",
			right : "10dp",
			layout : "horizontal",
			top : "10dp",
			//backgroundColor : "red",
		});
		if(OS_IOS)
		viewone.height="35%";
		if(OS_ANDROID)
		viewone.height="150dp";
		
		$.productScroll.add(viewone);
		for (var k = rowCount; k < data.length; k++) {
			Ti.API.info('value of k' + k);
			ViewIs = Ti.UI.createView({
				height : "90%",
				width : "45%",
				left : "10dp",
				top : "10dp",
				layout : "vertical",
				//backgroundColor : "pink",

			});
			viewone.add(ViewIs);
			var nameOfProduct = Ti.UI.createLabel({
				text : data[k].model,
				top : "5",
				color : "#000",
				font : {
					fontSiz : "14ps",
				}
			});
			ViewIs.add(nameOfProduct);
			productImage = Ti.UI.createImageView({
				image : data[k].images,
				top : "5",
				height : "80dp",
				productDetail : data[k],

			});
			ViewIs.add(productImage);
			var ratingOne = Ti.UI.createView({
				left : "20%",
				top : 10,
				right : "20%",
				height : "5",
				borderColor : "#bfbfbf"
			});

			ViewIs.add(ratingOne);
			var ratingInside = Ti.UI.createView({
				left : "0",
				right : "0",
				height : "5",
				backgroundColor : "#008000",
			});
			ratingOne.add(ratingInside);
			ratingInside.width = ((20 * data[k].rating) + "%");
			if (k >= (rowCount + 1)) {
				rowCount = k + 1;
				Ti.API.info('k : ' + k + " : " + rowCount);
				break;
			}

		}
	}
} else {
	var noRecord = Ti.UI.createLabel({
		text : "No Product Record Available",
		top : "50",
		font : {
			fontSiz : "15ps",
		}
	});

	$.productScroll.add(noRecord);
}

$.productScroll.addEventListener('click', function(e) {
	Ti.API.info('e is now : ' + JSON.stringify(e.source.productDetail));
	openDetailScreen = Alloy.createController('ProductDetail',e.source.productDetail).getView();
	if(OS_IOS)
	Alloy.Globals.navWindow.openWindow(openDetailScreen);
	if(OS_ANDROID)
	openDetailScreen.open({animated : false});
});
