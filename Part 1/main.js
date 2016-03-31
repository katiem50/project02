$(document).ready(function(){

$("dd").hide();

});

$("dt").click(function(){

$(this).next().toggle();

});

function showall()

{

$("dd").show();

}
function hideall()

{

$("dd").hide();

}



//I used a website called webmonkey to help me get started on this jquery
  
