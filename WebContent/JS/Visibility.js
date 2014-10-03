
dojo.require("dojox.timing");

pageVisibility = {
		
		visible : true,
		
		config : "",		
		
		timeSpent : 0,
		
		timeAway: 0,
		
		totalTime : 0,
		
		focusTimer : "",
		
		totalTimer : "",
		
		idealTime:10,
		
		idealTimer:"",
		
		calculatedIdealTime:0,
		
		stopIdealTime: false,
		
		init : function() {
			
			pageVisibility.bindPageVisibleEvent();
			
			var configAttr = {
					enableNotification : true,
					
				};
				
			pageVisibility.config = configAttr ;
			
			//For focus
			var timer =  new dojox.timing.Timer(1000);
			
			timer.onTick = function() {
				
				pageVisibility.timeSpent += 1;
			};
			pageVisibility.focusTimer = timer;
			pageVisibility.focusTimer.start();
			
			//idealTimer
			var idealTimer=new dojox.timing.Timer(1000);			
			idealTimer.onTick = function() {				
				pageVisibility.calculatedIdealTime += 1;
				
				if(pageVisibility.calculatedIdealTime>pageVisibility.idealTime){
					pageVisibility.stopIdealTime=true;
					pageVisibility.idealTimer.stop();
					require(["dojo/topic"],
							function(topic) {
								 topic.publish("idealTimeListner");
						});
				}

			};
			pageVisibility.idealTimer = idealTimer;
			pageVisibility.idealTimer.start();

			
			//Entire TimeAfter page load
			var timer_complete = new dojox.timing.Timer(1000);
			
			timer_complete.onTick = function() {
				pageVisibility.totalTime += 1;
				pageVisibility.timeAway = pageVisibility.totalTime - pageVisibility.timeSpent;	
			}
			pageVisibility.totalTimer = timer_complete;
			pageVisibility.totalTimer.start();
		},
		bindPageVisibleEvent : function() {
			property = pageVisibility.getHiddenProp();
			if (property) {
			  var evtname = property.replace(/[H|h]idden/,'') + 'visibilitychange';
			  document.addEventListener(evtname, pageVisibility._statusChanged);
			}
		},
		_statusChanged : function() {
			
			var prop = pageVisibility.getHiddenProp();
			if (!prop) {
				console.log('Error');
			}else{
				pageVisibility.visible = document[prop];
			} 
			
			if(pageVisibility.focusTimer.isRunning){
				pageVisibility.focusTimer.stop();
			}else{
				pageVisibility.focusTimer.start();
			}
			require(["dojo/topic"],
					function(topic) {
						 topic.publish("visible","true");
				});
			
		},
		
		getHiddenProp: function (){
		    var prefixes = ['webkit','moz','ms','o'];
		    
		    // if 'hidden' is natively supported just return it
		    if ('hidden' in document) return 'hidden';
		    
		    // otherwise loop over all the known prefixes until we find one
		    for (var i = 0; i < prefixes.length; i++){
		        if ((prefixes[i] + 'Hidden') in document) 
		            return prefixes[i] + 'Hidden';
		    }
		    // otherwise it's not supported
		    return null;
		}
		
};