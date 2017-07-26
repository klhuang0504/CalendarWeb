
var mousePositionX = 0;
var mousePositionY = 0;

function init(){
	
}

// function setCalendar(){
	var countTo42 = 1;
	var miniCalendarTable2 = document.getElementById("mainCalendar");
	var tableHtml = "";
	for(var row = 0; row < 6; row++){
		if(countTo42 > 42){
			break;
		}
		tableHtml = tableHtml.concat("<tr>");
		for(var column = 0; column < 7; column++){
			tableHtml = tableHtml.concat("<td><table id=" + countTo42 + " width=" + 120 + "height=" + 100+"><tr id=dateTitle" + countTo42 + "><th></th></tr>")
			for(var evenTd = 1; evenTd < 5; evenTd++){
				tableHtml = tableHtml.concat("<tr><td style=\"height:20px;\" class=\"EvenTd\" id=\""+countTo42+"even"+evenTd+"\"></td></tr>");
			}
			tableHtml = tableHtml.concat("</table></td>");
			countTo42++;
		}
		tableHtml = tableHtml.concat("</tr>");
	}
	miniCalendarTable2.innerHTML = tableHtml;
	for(var i = 1; i <= 42; i++){
		document.getElementById("dateTitle"+i).innerHTML = i;
	}
// }


// function evenClick(id){
	// window.console.log(id);
// }

// function calendarClick(){
	$("#mainCalendar").mousemove(function(e) {
		mousePositionX = e.pageX;
		mousePositionY = e.pageY;
	})
	for(var i = 1; i < 43; i++){
		var opener = document.getElementById(i);
		opener.onclick = function(){
			var lightbox = document.getElementById("lightbox"),
			dimmer = document.createElement("div");
			dimmer.style.width =  window.innerWidth + 'px';
			dimmer.style.height = window.innerHeight + 'px';
			dimmer.className = 'dimmer';

			dimmer.onclick = function(){
				document.body.removeChild(this);   
				lightbox.style.visibility = 'hidden';
			}
			document.body.appendChild(dimmer);
			lightbox.style.visibility = 'visible';
			lightbox.style.top = mousePositionY;
			lightbox.style.left = mousePositionX;
			return false;
		}
	}
// }
function addEven(){
	document.getElementById("1even1").innerHTML =  document.getElementById("evenTitle").value;
}