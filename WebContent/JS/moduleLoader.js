
loader = {

	load : function() {
		
		configObj = Drf.config;
		
		//Load notification module
		require([ "dojo/request/xhr" ], function(script) {

			script("../JS/notification.js", {

				handleAs : "javascript",
				
				sync : true

			}).then(function(data) {
				
				
			
			}, function(err) {
				console.log('failed' + err);
			});

		
		});
		
		
		if(configObj['includeAll'] || configObj['layout'] ) {
						
			require([ "dojo/request/script" ], function(script) {

				script.get("../JS/Layout.js", {

					handleAs : "javascript",
					sync : true

				}).then(function(data) {

					layout.init();

				}, function(err) {
					console.log('layout Script Failed' + err);
				});

			});
		}
		
		if(configObj['includeAll'] || configObj['accordion'] ) {
			
			require([ "dojo/request/xhr" ], function(script) {

				script("../JS/Accordion.js", {

					handleAs : "javascript",
					sync : true

				}).then(function(data) {

				}, function(err) {
					console.log('failed' + err);
				});

			});
		}
		
		if(configObj['includeAll'] || configObj['Grid'] ) {
			
			require([ "dojo/request/xhr" ], function(script) {

				script("../JS/Grid.js", {

					handleAs : "javascript",
					sync : true

				}).then(function(data) {
						console.log('loaded');
				}, function(err) {
					console.log('failed' + err);
				});

			});
		}
		
		if(configObj['includeAll'] || configObj['Performance'] ) {
				
			 require(["dojo/request"], function(script){
					script("../JS/performance.js", {
						  
						  handleAs : "javascript",
						  sync:true
						  
					  }).then(function(){
						 
						  Performance.init();
						  
					  }, function(err){
						  	console.log('failed' + err);
					  });
					 
				});
		}
		
		if(configObj['includeAll'] || configObj['visibility']) {
			
			require([ "dojo/request/xhr" ], function(script) {

				script("../JS/Visibility.js", {

					handleAs : "javascript",
					sync : true

				}).then(function(data) {
					pageVisibility.init();
				
				}, function(err) {
					console.log('failed' + err);
				});

			});
		}
		
		if(configObj['includeAll'] || configObj['speech']) {
			
			require([ "dojo/request/xhr" ], function(script) {

				script("../JS/speech.js", {

					handleAs : "javascript",
					sync : true

				}).then(function(data) {
					speech.init();
				
				}, function(err) {
					console.log('failed' + err);
				});

			});
		}
		
		if(configObj['includeAll'] || configObj['connectivity']) {
			
			require([ "dojo/request/xhr" ], function(script) {

				script("../JS/connectivity.js", {

					handleAs : "javascript",
					sync : true

				}).then(function(data) {
					
					connectivity.init();
				
				}, function(err) {
					console.log('failed' + err);
				});

			});
		}
		
		
			
			
	}

};
