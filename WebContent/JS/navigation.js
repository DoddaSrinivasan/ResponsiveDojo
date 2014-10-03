navigation = {};

var menuList,inLineMenu;

navigation.init = function(){
	require([ "dojo/ready", "dojo/parser","dojox/mvc/parserExtension", "dijit/form/DropDownButton", "dijit/TooltipDialog",
	  		"dojox/mvc/Group", "dojox/mvc/Repeat", "dojox/mobile/RoundRectList",
	  		"dojox/mobile/ListItem", "dojox/mvc/getStateful", "dojox/mvc/Output"], function() {
	  	var menuItems = {
	  		"items" : []
	  	};
	  	var inlinemenu = {
	  		"items" : [ {
	  						"item" : "Home",
	  						"hf" : "codesngears.html"
	  					}, {
	  						"item" : "Features",
	  						"hf" : "features.html"
	  					}, {
	  						"item" : "Widgets",
	  						"hf" : "widgets.html"
	  					}, {
	  						"item" : "Performance",
	  						"hf" : "performance.html"
	  					}, {
	  						"item" : "Snooper",
	  						"hf" : "snooper.html"
	  					}, {
	  						"item" : "Connectivity",
	  						"hf" : "connectivity.html"
	  					}, {
	  						"item" : "Join Us",
	  						"hf" : "#"
	  					} ]
	  	};
	  	menuList = dojox.mvc.getStateful(menuItems);
	  	inLineMenu = dojox.mvc.getStateful(inlinemenu);
	  });
};

navigation._All = function(){
	require(["dojo/window"], function(win){
		 winWidth = (win.getBox().w);
		 inlineMenuWidth = (inLineMenu.items.length + 1)*100;
		 widthAvail = winWidth - inlineMenuWidth;
		try{
			if(widthAvail < 0){
				if(widthAvail<0){
					widthAvail *= -1;
				}
				for(var i=0; i< widthAvail/90; i++){
					var item = inLineMenu.items.pop();
					if(item != undefined){
						menuList.items.push(item);
						document.getElementById("dropDownMenuButton").style.display = "";
					}
				}
			}else if(widthAvail >= 128){
				for(var i=0; i< widthAvail/100; i++){
					var item = menuList.items.pop();
					if(item != undefined){
						inLineMenu.items.push(item);
					}
					if(menuList.items.length==0){
						document.getElementById("dropDownMenuButton").style.display = "none";
					}
				}
			}
		}catch(e){}
	});
};

navigation.showOrHideMenu = function(){
	dojo.toggleClass(dojo.byId("dropDownMenu"),"hide");
};

navigation.init();