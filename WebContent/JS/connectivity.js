/*
 *  API to check internet connectivity status.
 */
dojo.require("dojox.timing");

connectivity = {
	
	config : "",
	
	connectionSuccessFlag : false,
	
	init : function() {
		
		var configAttr = {
			testFilePath : "/ResponsiveDojo/ResourceServe",
			timeOut : 4000,
			message : ""
		};
		//Default configuration
		connectivity.config = configAttr;
		
		connectivity.checkConnection();
		
	},
	showMessage : function() {
		
		if (connectivity.connectionSuccessFlag) {
			connectivity.config.message = "You are connected to Internet";
			notification.title = connectivity.config.message;
			notification.init();
		} 
	},
	checkConnection : function() {
		
		require([ "dojo/request" ], function(request) {

			request(connectivity.config.testFilePath,{
				
				
			}).then(

			function(text) {
				
				connectivity.connectionSuccessFlag = true;
					
			},function(err){
					connectivity.connectionSuccessFlag = false;
					notification.title = "Your Internet Connection is Lost.Reconnecting..";
					notification.init();
					
					setTimeout(function(){
						connectivity._reconnect();
					},5000);
					
			});
		});

	},
	_reconnect : function() {
	
		require([ "dojo/request" ], function(request) {
			
			request(connectivity.config.testFilePath,{
				
				
			}).then(

			function(text) {
				
					connectivity.connectionSuccessFlag = true;
					connectivity.showMessage();
				
			},function(err){
					
					connectivity.connectionSuccessFlag = false;
					
					notification.title = "Your Internet Connection is Lost.Reconnecting..";
					notification.init();
					
					setTimeout(function(){
						connectivity._reconnect();
					},5000);
					
			});
		});
		
	}

};
