// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

Ti.API.info('args' + args.model);

$.productListWindow.title = args.model;
$.productName.text = args.model;
$.productImage.image = args.images;
$.productPrice.text = args.price;
$.ratingView.width = ((20 * args.rating) + "%");

