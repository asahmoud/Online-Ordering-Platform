$(document).ready(function() {
   $("#item, #toppings, #nos, #replacements, #finished").hide();
var orders = [];
var currentOrder = {name: "", items: []};
var currentItem = {};

   $("#namenext").click(function(){
   		currentOrder.name = $('#nameinput').val();
   		if (currentOrder.name == "") {
        	alert("Name must be filled out");
        return false;
		}  
    	else {
    		$("#name").hide();
   			$("#item").show();
    	}
   });
   $("#itemback").click(function(){
   		$("#item").hide();
   		$("#name").show();
   })
   $("#itemnext").click(function(){
   	   	currentItem.food = $('#iteminput').val();
   	   	if (currentItem.food == "") {
        	alert("So you are not going to eat anything?");
        return false;
		}  
		else {
   		$("#item").hide();
   		$("#toppings").show();
   		}
   });
   $("#toppingsback").click(function(){
   		$("#toppings").hide();
   		$("#item").show();
   })
   $("#toppingsnext").click(function(){
   		currentItem.toppings = [];
   		$("#toppings").hide();
   		$("#nos").show();
   		$.each($("input[name='toppings']:checked"), function(){
              currentItem.toppings.push($(this).val());
          });
   });
   $("#nosback").click(function(){
   		$("#nos").hide();
   		$("#toppings").show();
   })
   $("#nosnext").click(function(){
   	currentItem.nos = [];
   		$("#nos").hide();
   		$("#replacements").show();
   		$.each($("input[name='nos']:checked"), function(){
              currentItem.nos.push($(this).val());
          });
   });
   $("#replacementsback").click(function(){
   		$("#replacements").hide();
   		$("#nos").show();
   })
   $("#replacementsfinish").click(function(){
   		currentItem.replacements = [];
   		$("#replacements").hide();
   		$("#finished").show();
   		$.each($("input[name='replacements']:checked"), function(){
              currentItem.replacements.push($(this).val());
          });
   		currentOrder.items.push(currentItem);
   		orders.push(currentOrder);
  		console.log("orders = ")   		
  		console.log(orders);
  		currentOrder = {name: "", items: []};;

  		var newHTML = [];
  		$.each(orders, function(orders, order) {
  		   newHTML.push('<span>' + JSON.stringify(order) + '</span>');
  		   console.log("order =" );
  		   console.log(order);
  		});
  		$("#ordersummary").html(newHTML.join(""));
      orderSummary ();
   });
   $("#newitem").click(function(){
   		currentItem.replacements = [];
   		$("#replacements").hide();
   		$("#item").show();
   		$.each($("input[name='replacements']:checked"), function(){
              currentItem.replacements.push($(this).val());
          });
   		function clone(currentItem){
    		return JSON.parse(JSON.stringify(currentItem));
		};
		  function clone(currentOrder){
    		return JSON.parse(JSON.stringify(currentOrder));
		};
   		currentOrder.items.push(clone(currentItem));
  		console.log("orders = ");   		
  		console.log(orders);
   });
   $("#newcustomer").click(function(){
   		currentItem.replacements = [];
   		$("#replacements").hide();
   		$("#name").show();
   		$.each($("input[name='replacements']:checked"), function(){
              currentItem.replacements.push($(this).val());
          });
   		function clone(currentOrder){
    		return JSON.parse(JSON.stringify(currentOrder));
		};
   		function clone(currentItem){
    		return JSON.parse(JSON.stringify(currentItem));
		};
   		currentOrder.items.push(clone(currentItem));
   		orders.push(clone(currentOrder));
		console.log("orders = ")   	
		console.log(orders);
		currentOrder = {name: "", items: []};;

		var newHTML = [];
		$.each(orders, function(orders, order) {
		   newHTML.push('<span>' + JSON.stringify(order) + '</span>');
		   console.log("order =" );
		   console.log(order);
		});
		$("#ordersummary").html(newHTML.join(""));
   });
   function orderSummary () {
      var divhtml = "<span> name: NAMENAME </span>\
      <span> food: FOODFOOD </span>\
      <span> toppings: TOPPINGSTOPPINGS </span>\
      ";
      var name = currentOrder;
            divhtml = divhtml.replace("NAMENAME",name);
            divhtml = divhtml.replace("FOODFOOD",currentItem.food);
            divhtml = divhtml.replace("TOPPINGSTOPPINGS",currentItem.toppings.join(", "));
            $("#ordersummary").html(divhtml);

   };
});


