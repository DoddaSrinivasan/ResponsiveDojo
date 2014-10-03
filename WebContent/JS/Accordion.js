
accordion = {
		
		init : function() {
			Drf._attachViewPort();
		},
		
		_1 : function() {
			
			require([
			     	"dijit/layout/AccordionContainer",
			     	"dijit/layout/ContentPane",
			     	"dijit/layout/TabContainer"], 
			     	function(AccordionContainer,ContentPane,TabContainer){
				
				console.log("in");
				
				var tabQuery = dojo.query(".dijitTabContainer");
				if(tabQuery.length != 0) {
					dojo.forEach(tabQuery,function(tabWid,i){
						var tabContainer = tabWid;
						var tabsWidget = dijit.byNode(tabContainer);
						
						var parentNode = tabContainer.parentNode;
						var children = tabsWidget.getChildren();
						var aHeight = dojo.window.getBox().h - (children.length*25);
						var aContainer = new AccordionContainer({style:"height:"+ aHeight +"px;"}, "markup");
						dojo.forEach(children,function(child,i){
							var title = child.title;
							var content = child.get("content");
							var isSelected  = child.selected;
							if( isSelected) {
								aContainer.addChild(new ContentPane({
									title: title,
									content: content,
									selected : true
								}));
								
							} else {
								aContainer.addChild(new ContentPane({
									title: title,
									content: content
								
								}));
								
							}
							
						});
						aContainer.startup();
						tabsWidget.destroy();
						dojo.place(aContainer.domNode,parentNode);
						aContainer.resize();
					});					
				}	
			});
			
			
			
		},
		
		_2 : function() {
			
			//Same Behavior
			this._1();
		},
		
		_3 : function() {
			
			require([
				     	"dijit/layout/AccordionContainer",
				     	"dijit/layout/ContentPane",
				     	"dijit/layout/TabContainer"], 
				     	function(AccordionContainer,ContentPane,TabContainer){
				
				var accQuery = dojo.query(".dijitAccordionContainer");
				if( accQuery.length != 0){
					dojo.forEach(accQuery,function(accWid,i){
						var accContainer = accWid;
						var accWidget = dijit.byNode(accContainer);
						var parentNode = accContainer.parentNode;
						var tContainer = new TabContainer({
							//style: "height: 400px"
							doLayout:false
						});
						var children = accWidget.getChildren();
						dojo.forEach(children,function(child,i){
							var title = child.title;
							var content = child.get("content");
							var isSelected  = child.selected;
							
							if(isSelected) {
								tContainer.addChild(new ContentPane({
									title: title,
									content: content,
									selected : true
								}));
								
							} else {
								
								tContainer.addChild(new ContentPane({
									title: title,
									content: content
								}));
							}
							
						});
						tContainer.startup();
						accWidget.destroy();
						dojo.place(tContainer.domNode,parentNode);
						tContainer.resize();
					});					
				}
			});
			
		}
};