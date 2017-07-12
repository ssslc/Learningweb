//原生js  
// window.onload = function(){
//         var _backtop=document.getElementById('backtop');   
//         _backtop.onclick =function(){
//            animate("document.documentElement.scrollTop = document.body.scrollTop =0;",2000);

//         } 
            
// }
//jquery 具有延缓的滑动
$('#backtop').on('click', move);
$(window).on('scroll', function (){ 
  checkPosition($(window).height());
});
checkPosition($(window).height());
function move(){
  $('html, body').animate({
    scrollTop:0
  }, 800);  
}
function checkPosition(pos){
  if ($(window).scrollTop() > pos){
    $('#backtop').fadeIn();
  } else {
    $('#backtop').fadeOut();
  }
}


// sub_guide
$(document).ready(function(){
    $("#sub_lg1").hover(
		function(){
			$("#lg1").show();
		},
		function(){
			$("#lg1").hide();
		}
    )
    $("#lg1").hover(
		function(){
			$("#lg1").show();
		},
		function(){
			$("#lg1").hide();
		}
    )

});

$(document).ready(function(){
    $("#sub_lg2").hover(
		function(){
			$("#lg2").show();
		},
		function(){
			$("#lg2").hide();
		}
    )
});

$(document).ready(function(){
    $("#lg2").hover(
		function(){
			$("#lg2").show();
		},
		function(){
			$("#lg2").hide();
		}
    )
    
});

$(document).ready(function(){
    $("#sub_lg4").hover(
		function(){
			$("#lg4").show();
		},
		function(){
			$("#lg4").hide();
		}
    )
    $("#lg4").hover(
		function(){
			$("#lg4").show();
		},
		function(){
			$("#lg4").hide();
		}
    )
});

$(document).ready(function(){
    $("#sub_lg5").hover(
		function(){
			$("#lg5").show();
		},
		function(){
			$("#lg5").hide();
		}
    )
    $("#lg5").hover(
		function(){
			$("#lg5").show();
		},
		function(){
			$("#lg5").hide();
		}
    )
});