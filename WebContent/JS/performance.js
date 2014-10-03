
Performance  = {
		
	config  : "",
	
	init : function() {
		
		//Set Config Object to default values
		
		var configAttr = {
				testFilePath : "../JS/sampleTest.txt",
				timeOut : 5000000000000,
				preventDefault : false,
				publishEvent : true,
				message : "Your Internet Connection is slow...Try Lite Version?"
			};
			
		Performance.config = configAttr ;
		
		Performance.checkSpeed();
		
	 },	

	checkSpeed : function() {
		
		var start = new Date().getTime(); 
		
		require(["dojo/request"], function(request){
		
		    request(Performance.config.testFilePath).then(
		    	
		        function(text){
		    		var end = new Date().getTime();
		    		time = end - start;
		    		console.log();
		    		if( time > Performance.config.timeOut ){
		    			
		    			if(Performance.config.publishEvent) {
		
							require(["dojo/topic"],
								function(topic) {
									 topic.publish("page/slow", { timeToLoad : time});
							});
						}
						
						if(!Performance.config.preventDefault) {
							Performance._defaultAction();
						}
		    		}
		      },
		        function(error){
		           console.log("Failed Loading test file. Disabling Performance test");
//		           Performance.
		        }
		    );
		});
	
	},
	getConfig : function() {
		
		return Performance.config;
	},
	
	setConfig : function(configSet) {
			 Performance.config = dojo.mixin(Performance.config,configSet);
			 Performance.init();
		
	},
	_defaultAction : function() {
		
		dojo.destroy(dojo.byId('loadingOverlay'));
		
		var loader = '<div id="loadingOverlay" class="loadingOverlay pageOverlay">';
			loader += '<div class="loadingMessage">'+ Performance.config.message +'</div></div>';
		
		var body =  dojo.query("body")[0];
		dojo.place(loader,body,"first");
	},
	_disable : function() {
		
	}
}