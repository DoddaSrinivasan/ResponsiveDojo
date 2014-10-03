
/**
 * 
 */

notification = {
		
		title : "" ,
		message : "" ,
		
		init : function() {
			
			// check for notifications support
			// you can omit the 'window' keyword
			
			if (dojo.isChrome  && window.webkitNotifications) {
			  
				if (window.webkitNotifications.checkPermission() == 0) { 
					// 0 is PERMISSION_ALLOWED
				    
					notify = window.webkitNotifications.createNotification(
				        '../Images/ajax-loader.gif', notification.title , notification.message);
					
				  
				} else {
					  window.webkitNotifications.requestPermission();
				 }
			  
			}
			
			if( dojo.isFF && ("Notification" in window) ) {
				
				if (Notification.permission !== 'denied') {
				    Notification.requestPermission(function (permission) {

				      // Whatever the user answers, we make sure we store the information
				      if(!('permission' in Notification)) {
				        Notification.permission = permission;
				      }

				      // If the user is okay, let's create a notification
				      if (permission === "granted") {
				        notify = new Notification(notification.title,{ icon:"../Images/ajax-loader.gif"});
				      }
				    });
				
			}
			
			}
			
		},
		_show : function() {
			
			notify.show();
		}
};