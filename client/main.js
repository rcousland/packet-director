Meteor.startup(function () {
    smoothScroll.init();
});

if (Meteor.isClient){
	Template.demo.events({
		'change .js-src-limit':function(event){
			$(".js-src-input").toggle(300);
		},
		'change .js-dst-limit':function(event){
			$(".js-dst-input").toggle(300);
		}
	})

}