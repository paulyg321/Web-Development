//check off specific todos by clicking
$("body").on("click", "li", function(){
	$(this).toggleClass("completed");
});
$("body").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
var todoText = $(this).val();
	if(event.which === 13)
	{
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + " </li>");
		$(this).val("");
	}
})
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})