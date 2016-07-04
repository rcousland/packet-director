Meteor.startup(function () {
    smoothScroll.init();
});

if (Meteor.isClient){
	Template.demo.events({
		
		// show ip source inputs when checkbox has been selected
		'change .js-src-limit':function(event){
			$(".js-src-input").toggle(300);
		},
		// show ip destination inputs when checkbox has been selected
		'change .js-dst-limit':function(event){
			$(".js-dst-input").toggle(300);
		}
	}) // Template.demo.events
} // (Meteor.isClient)
