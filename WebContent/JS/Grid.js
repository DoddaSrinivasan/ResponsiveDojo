
/***
 * Handles responsive behavior for dojox enhanced grids.
 */


Grid = {
		
	init : function() {
		
	},
	//determines the level to stop rerendering same grid
	"level" : "0",
	
	_1 : function() {
		if(Grid.level!="1"){
			console.log("1");
			Grid.level ="1";
			var gridArray =dojo.query("[role=grid]");
			if(gridArray[0]){
				var gridId= gridArray[0].id;
				var finalLayout =[];
				var gridWidget = dijit.byId(gridId);
				var parentNode=gridArray[0].parentNode;
				parentNode.setAttribute("style","width:"+(dojo.window.getBox().w-20)+"px;height:"+(dojo.window.getBox().h-20)+"px");
				dojo.forEach(gridWidget.layout.cells, function(cell,idx){ 
					var tempLayout = [];
					var newItem={};
					newItem.name=cell.name;
					newItem.field = cell.field;
					newItem.width="auto";
					tempLayout.push(newItem);				
					finalLayout.push(tempLayout);
				});
				gridWidget.setStructure(finalLayout);
				gridWidget.resize();
			}
		}else{
			var gridArray =dojo.query("[role=grid]");
			var parentNode=gridArray[0].parentNode;
			var gridId= gridArray[0].id;
			var gridWidget = dijit.byId(gridId);
			parentNode.setAttribute("style","width:"+(dojo.window.getBox().w-20)+"px;");
			gridWidget.resize();
		}
	},
	
	_2 : function() {
		if(Grid.level!="2"){
			console.log("2");
			Grid.level ="2";
			var gridArray =dojo.query("[role=grid]");
			if(gridArray[0]){
				var gridId= gridArray[0].id;
				var layout =[];
				var layout1 = [];
				var layout2 = [];
				var gridWidget = dijit.byId(gridId);
				var numcells = gridWidget.structure.length;
				var parentNode=gridArray[0].parentNode;
				parentNode.setAttribute("style","width:"+(dojo.window.getBox().w-20)+"px;");
			
				dojo.forEach(gridWidget.layout.cells, function(cell,idx){
					var newItem={};
					newItem.name=cell.name;
					newItem.field = cell.field;
					newItem.width="auto";
					if(idx<numcells/2){
						layout1.push(newItem);
					}
					else{
						layout2.push(newItem);
					}			
				});
				layout.push(layout1);
				layout.push(layout2);
				gridWidget.setStructure(layout);
				gridWidget.resize();
			}
		}else{
			var gridArray =dojo.query("[role=grid]");
			var parentNode=gridArray[0].parentNode;
			var gridId= gridArray[0].id;
			var gridWidget = dijit.byId(gridId);
			parentNode.setAttribute("style","width:"+(dojo.window.getBox().w-20)+"px;");
			gridWidget.resize();
		}
		
	},
	_3 : function() {
		
		if(Grid.level!="3"){
			console.log("3");
			Grid.level ="3";
        var gridArray =dojo.query("[role=grid]");
		if(gridArray[0]){
			var gridId= gridArray[0].id;
			var gridWidget = dijit.byId(gridId);
			var parentNode=gridArray[0].parentNode;
			var layout =[];
			parentNode.setAttribute("style","width:700px;");
			dojo.forEach(gridWidget.layout.cells, function(cell,idx){ 
				var newItem={};
				newItem.name=cell.name;
				newItem.field = cell.field;
				newItem.width="auto";
				layout.push(newItem);
			});
			gridWidget.setStructure(layout);
			gridWidget.resize();
		}
		}
	}
		
};