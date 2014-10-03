/**
 * Base JS
 * Initializes all dependencies & binds modules.
 * 
 */

require(["dojo/request/xhr","dojo/dom", "dojo/domReady!"], function(script,dom){

		 Drf.init(); 
});

Drf = {
		
	config : "",
	
	init : function() {
		
		  var scripts = document.getElementsByTagName("script");
		  var configAttr = null;
		  dojo.forEach(scripts,function(script,idx){
			  if( dojo.hasAttr(script,"data-module")){
				  configAttr = script.getAttribute("data-module");
			  }
			  
		  });
		  
		  if( configAttr == null ) {
				configAttr = " { includeAll : true } ";	
		  }
		  
		  Drf.config = dojo.fromJson(configAttr);
		  
		  //Performance Calculator
		
		  
		  require(["dojo/request/xhr"], function(script){
			  
			script("../JS/moduleLoader.js", {
				  
				  handleAs : "javascript",
				  sync:true
				  
			  }).then(function(data){
				
				  //Invoke Loader
				  loader.load();
				 
				  require(["dojo/window"], function(win){
						Drf._attachViewPort(win);
					});
				    
			  }, function(err){
				  	console.log('failed' + err);
			  });
			 
		});

		Drf.bindListners();
		
	},
	
	bindListners : function() {
		dojo.connect(window, "onload", function(event) {	
			require(["dojo/window"], function(win){
				Drf._attachViewPort(win);
			});
		});
		dojo.connect(window, "onresize", function(event) {	
			require(["dojo/window"], function(win){
				Drf._attachViewPort(win);
			});
		});

	},
	
	_attachViewPort : function (win) {
			var width = win.getBox().w;
			navigation._All();
			if(width <= 400) {
				
				if( Drf.config['layout']){
					layout._1();
				}
				
				if( Drf.config['accordion']){
					accordion._1();
				}
				
				if( Drf.config['Grid']){
					Grid._1();
				}
					
			}else if(width >=400 && width <= 700 ){
				
				
				if( Drf.config['layout']){
					layout._2();
				}
				
				if( Drf.config['accordion']){
					accordion._2();
				}
				
				if( Drf.config['Grid']){
					Grid._2();
				}
								
			} else {
				
				if( Drf.config['layout']){
					layout._3();
				}
				if( Drf.config['accordion']){
					accordion._3();
				}
				if( Drf.config['Grid']){
					Grid._3();
				}
							
			}
	},
	
	getConfig : function() {
		
		return this.config;
	},
	
	setConfig : function(configSet) {
		
		require(["dojo/request/xhr"], function(script){
			
			script("../JS/moduleLoader.js", {
				  
				  handleAs : "javascript",
				  sync:true
				  
			  }).then(function(data){
				 
				  loader.load(dojo.toJson(configSet));
				  
				  Drf.config = configSet;
				  Drf.init();
				  
			  }, function(err){
				  	console.log('failed' + err);
			  });	
			
		});
			 
	}
		
};