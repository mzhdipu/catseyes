

// Show Header Slow
$(document).ready(function() {
		$("header").show(5000);
	});


// for seacher
function dipu()
{
window.open("html/search.html","mywindow","height=200px","width=200px")
}



// for dropdown-menu

/*$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
});*/







// for fontFamily Change
function myFunction(selectTag) {
	var listValue = selectTag.options[selectTag.selectedIndex].text;
	var changeFont= document.getElementById("myP");
		changeFont.style.fontFamily = listValue;}
		
		

// for div backgroundColor Change
var modern = document.getElementById("modernBg")
var modern_1 = document.getElementById("modernBg_1")
var modern_2 = document.getElementById("modernBg_2")

var sport = document.getElementById("sportBg")
var sport_1 = document.getElementById("sportBg_1")
var sport_2 = document.getElementById("sportBg_2")

var hipstar = document.getElementById("hipstarBg")
var hipstar_1 = document.getElementById("hipstarBg_1")
var hipstar_2 = document.getElementById("hipstarBg_2")

//  modern  
function color_1 ()
{
	modern.style.backgroundColor="#A7F050"
	modern.style.h2="red"
	modernFont.style.fontColor = "yellow"
}
function color_2 ()
{
	modern.style.backgroundColor="#50E3F0"
	modern.style.h2="red"
}
function color_3 ()
{
	modern.style.backgroundColor="#EEEEEE"
	modern.style.h2="red"
}

// first modern  
function color_11 ()
{
	modern_1.style.backgroundColor="#A7F050"
	modern.style.h2="red"
}
function color_12 ()
{
	modern_1.style.backgroundColor="#50E3F0"
	modern.style.h2="red"
}
function color_13 ()
{
	modern_1.style.backgroundColor="#EEEEEE"
	modern.style.h2="red"
}
// second modern  
function color_21 ()
{
	modern_2.style.backgroundColor="#A7F050"
	modern.style.h2="red"
}
function color_22 ()
{
	modern_2.style.backgroundColor="#50E3F0"
	modern.style.h2="red"
}
function color_23 ()
{
	modern_2.style.backgroundColor="#EEEEEE"
	modern.style.h2="red"
}



// sport
function color_4 ()
{
	sport.style.backgroundColor="#7D3F99"
	modern.style.borderLeft="1px solid #F7F7F7"
}
function color_5 ()
{
	sport.style.backgroundColor="#3481C7"
	modern.style.borderLeft="1px solid #F7F7F7"
}
function color_6 ()
{
	sport.style.backgroundColor="#BF584B"
	modern.style.borderLeft="1px solid #F7F7F7"
}

// first sport
function color_14 ()
{
	sport_1.style.backgroundColor="#7D3F99"
	modern.style.borderLeft="1px solid #F7F7F7"
}
function color_15 ()
{
	sport_1.style.backgroundColor="#3481C7"
	modern.style.borderLeft="1px solid #F7F7F7"
}
function color_16 ()
{
	sport_1.style.backgroundColor="#BF584B"
}

// first sport
function color_24 ()
{
	sport_2.style.backgroundColor="#7D3F99"
	modern.style.borderLeft="1px solid #F7F7F7"
}
function color_25 ()
{
	sport_2.style.backgroundColor="#3481C7"
	modern.style.borderLeft="1px solid #F7F7F7"
}
function color_26 ()
{
	sport_2.style.backgroundColor="#BF584B"
	modern.style.borderLeft="1px solid #F7F7F7"
}

// hipstar
function color_7 ()
{
	hipstar.style.backgroundColor="#3B8BD5"
	modern.style.borderLeft="1px solid #F7F7F7"
	modern.style.borderRight="1px solid #F7F7F7"
}
function color_8 ()
{
	hipstar.style.backgroundColor="#E1191D"
	modern.style.borderLeft="1px solid #F7F7F7"
	modern.style.borderRight="1px solid #F7F7F7"
}
function color_9 ()
{
	hipstar.style.backgroundColor="#FACC22"
	modern.style.borderLeft="1px solid #F7F7F7"
	modern.style.borderRight="1px solid #F7F7F7"
}

// first hipstar
function color_17 ()
{
	hipstar_1.style.backgroundColor="#3B8BD5"
	modern.style.borderLeft="1px solid #F7F7F7"
	modern.style.borderRight="1px solid #F7F7F7"
}
function color_18 ()
{
	hipstar_1.style.backgroundColor="#E1191D"
	modern.style.borderLeft="1px solid #F7F7F7"
	modern.style.borderRight="1px solid #F7F7F7"
}
function color_19 ()
{
	hipstar_1.style.backgroundColor="#FACC22"
	modern.style.borderLeft="1px solid #F7F7F7"
	modern.style.borderRight="1px solid #F7F7F7"
}

// second hipstar
function color_27 ()
{
	hipstar_2.style.backgroundColor="#3B8BD5"
	modern.style.borderLeft="1px solid #F7F7F7"
	modern.style.borderRight="1px solid #F7F7F7"
}
function color_28 ()
{
	hipstar_2.style.backgroundColor="#E1191D"
	modern.style.borderLeft="1px solid #F7F7F7"
	modern.style.borderRight="1px solid #F7F7F7"
}
function color_29 ()
{
	hipstar_2.style.backgroundColor="#FACC22"
	modern.style.borderLeft="1px solid #F7F7F7"
	modern.style.borderRight="1px solid #F7F7F7"
}





// Special Offer Email Validation
function special_from(elem, nawaf1)
{
var nawaf = elem.value
		if(nawaf.match(nawaf1))
		{
		return true;
		}
		else
		{
		alert("Please Use Valid email address")
		elem.focus();
		return false;
		}
}