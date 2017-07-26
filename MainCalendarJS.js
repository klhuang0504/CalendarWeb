
var mousePositionX = 0;
var mousePositionY = 0;

var focusDateId = "";
var focusDateEventId = "";

var lightbox = document.getElementById("lightbox");
var dimmer = document.createElement("div");
dimmer.style.width =  window.innerWidth + 'px';
dimmer.style.height = window.innerHeight + 'px';
dimmer.className = 'dimmer';

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
		tableHtml = tableHtml.concat("<td><table id=" + countTo42 + " width=" + 150 + "height=" + 110+"><tr id=dateTitle" + countTo42 + "><th></th></tr>")
		for(var eventTd = 1; eventTd < 5; eventTd++){
			tableHtml = tableHtml.concat("<tr><td style=\"height:20px;\" class=\"EventTd\" id=\""+countTo42+"event"+eventTd+"\"></td></tr>");
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


// function eventClick(id){
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

		// window.console.log("我先");


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
function addEvent(){
	document.getElementById(focusDateId+"event1").innerHTML =  document.getElementById("eventTitle").value;
	document.getElementById("eventTitle").value = "";
	document.body.removeChild(dimmer);
	lightbox.style.visibility = 'hidden';
}

$(document).ready(function(){
	$(".EventTd").click(function(){
		// window.console.log(this.innerText);
		//當下點的欄位是否有值
		if(this.innerText != null && this.innerText != ""){
			document.getElementById("eventTitle").value = this.innerText;
		}
		//找到沒值的那個欄位
		// $(this).toggle();
		focusDateId = this.parentNode.parentNode.parentNode.id;
		// window.console.log(this.parentNode.nodeName);
		// window.console.log(this.parentNode.parentNode.nodeName);
		// window.console.log(this.parentNode.parentNode.parentNode.id);
		// window.console.log(this.parentNode.parentNode.parentNode.parentNode.nodeName);
	});
});
