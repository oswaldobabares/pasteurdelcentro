$(document).on("ready", init);

var view;
var controller;
var model;

function init() {
    model = new Model();
    controller = new Controller();
    view = new View();
}

function View() {    
	controller.instafeed();
	controller.resizeInstagram();	
}

function Controller() {
    
	this.instafeed = function() {

        var userFeed = new Instafeed({
            get: 'user',
            userId: 1510430526,
            accessToken: distributorToken,
            limit: 4,
            resolution: 'standard_resolution' ,
            template: '<a class="animation" href="{{link}}" target="_blank"><img id="instagramImg" class="instaFeedImage" src="{{image}}"" /></a>'
        });
        userFeed.run();
    };

    this.resizeInstagram = function () {
        var width = $("body").width();
    };
}

function Model() {

}