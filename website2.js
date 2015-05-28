var main = function () {
  "use strict";
  $("a").on("click", function(){
  	$("li").removeClass("onzichtbaar");
  	$(this).closest("li").addClass("selected");
  	$(".home").addClass("onzichtbaar");
  	$(".photography").addClass("onzichtbaar");
  	$(".graphicdesign").addClass("onzichtbaar");
  	$(".about").addClass("onzichtbaar");
  	$(".contact").addClass("onzichtbaar");
  	var paragraaftetonen = "." + $(this).data("par");
  	$(paragraaftetonen).removeClass("onzichtbaar");
  });
 };

$("document").ready(main);
