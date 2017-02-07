$(document).ready(function(){
	
	var products = [];
    var n = 3;
    
    function addProducts(value)
	{
		products.push(value);
        
		var elementHtml = '<div class="row" id="row_'+value.id+'">\n <div id="productName_'+value.id+'" class="text">' + value.name + '</div>\n <div class="button_box">\n <button id="minus_'+value.id+'" class="minus_button" > - </button>\n <span class="number" id="number_'+value.id+'">1</span>\n <button id="plus_'+value.id+'" class="plus_button" > + </button>\n</div>\n <div class="box">\n <button id="buy_'+value.id+'" class="buy">Куплено</button>\n <button id="delete_'+value.id+'" class="delete"> x </button>\n<button id="not_buy_'+value.id+'" class="not_buy">Не куплено</button>\n </div>\n</div>';
        
		$("#menu_products").append(elementHtml);
        $("#row_"+value.id).addClass("not_buy_press");
		
		var remainedElementHtml = '<div id="remained_row_'+value.id+'" class="remained">'+value.name+'<div class="circular" id="remained_number_'+value.id+'">1</div></div>';
		
        $("#remained").append(remainedElementHtml);
		
		$("#minus_"+value.id).click(function() {
            value.number -= 1;
            if(value.number == 0){
                value.number += 1;
            } 
            $('#number_'+value.id).text(value.number);
            $('#remained_number_'+value.id).text(value.number);
        });
        
		$("#plus_"+value.id).click(function() {
            value.number += 1;
            $('#number_'+value.id).text(value.number);
            $('#remained_number_'+value.id).text(value.number);
        });
        
        $("#buy_"+value.id).click(function() {
            $("#row_"+value.id).addClass("buy_press");
            $("#row_"+value.id).removeClass("not_buy_press");
            $("#remained_row_"+value.id).remove();
            $("#bought").append(remainedElementHtml);
            $('#remained_number_'+value.id).text(value.number);
        });
        
        $("#not_buy_"+value.id).click(function() {
            $("#row_"+value.id).addClass("not_buy_press");
            $("#row_"+value.id).removeClass("buy_press");
            $("#remained_row_"+value.id).remove();
            $("#remained").append(remainedElementHtml);
            $('#remained_number_'+value.id).text(value.number);
        });
        
		$("#delete_"+value.id).click(function() {
            $("#row_"+value.id).remove();
            $("#remained_row_"+value.id).remove();
        });
	}
    
    $("#add").click(function() {		 
	   addProducts({id:n, name:$('#search').val(), number:1});
	   $('#search').val('');
        n++;
	});
    
    $("#search").keyup(function(event) {
        if(event.keyCode == 13){
	       $("#add").click();
        }
	});
    
    addProducts({id: 0, name: 'Помідори', number: 1});
	addProducts({id: 1, name: 'Печиво', number: 1});
	addProducts({id: 2, name: 'Сир', number: 1});
});