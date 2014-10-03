
/**
 * JS : Handles the Different Screen sizes for IE.For other browsers Media queries will come into play.
 *      
 */
 layout = {
		 
		init : function() {
			
			var lastColumn = dojo.query(".col3");
			if( lastColumn.length == 3) {
				dojo.addClass(lastColumn[2],"marginRight0");
			};
			console.log('set');
		},
		
		_1 : function() {
			
			if( dojo.isIE != undefined) {
				
				//3
				var columns = dojo.query(".col3");
				dojo.forEach(columns , function(col,i){						
					dojo.addClass(col,"ie");
					dojo.addClass(col,"one");
				});
				//4
				var columns = dojo.query(".col4");
				dojo.forEach(columns , function(col,i){
					dojo.removeClass(col,"four");
					dojo.removeClass(col,"two");
					
					dojo.addClass(col,"ie");
					dojo.addClass(col,"one");
				});
			}
			
		},

		_2: function(){
			
			if( dojo.isIE != undefined) {
				//3
				
				var columns = dojo.query(".col3");
				dojo.forEach(columns , function(col,i){
					
					dojo.addClass(col,"ie");
					dojo.addClass(col,"three");
				});
				
				//4
				var columns = dojo.query(".col4");
				dojo.forEach(columns , function(col,i){
					
					dojo.removeClass(col,"one");
					dojo.removeClass(col,"four");
					
					dojo.addClass(col,"ie");
					dojo.addClass(col,"two");
				});
			}
			
		},
		_3: function(){
			
			if( dojo.isIE != undefined) {
				//3
				var columns = dojo.query(".col3");
				dojo.forEach(columns , function(col){						
					dojo.removeClass(col,"one");
					dojo.addClass(col,"three");
				});
				//4
				var columns = dojo.query(".col4");
				dojo.forEach(columns , function(col){						
					dojo.removeClass(col,"one");
					dojo.removeClass(col,"two");
					dojo.addClass(col,"four");
				});
			}
			
		}
		
};