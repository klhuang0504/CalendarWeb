var mousePositionX = 0;
var mousePositionY = 0;

var focusDateId = "";
var focusDateEventId = "";

var lightbox = document.getElementById("lightbox");
var dimmer = document.createElement("div");
dimmer.style.width = window.innerWidth + 'px';
dimmer.style.height = window.innerHeight + 'px';
dimmer.className = 'dimmer';

function init() {

}

// function setCalendar(){
var countTo42 = 1;
var miniCalendarTable2 = document.getElementById("mainCalendar");
var tableHtml = "";
for (var row = 0; row < 6; row++) {
	if (countTo42 > 42) {
		break;
	}
	tableHtml = tableHtml.concat("<tr>");
	for (var column = 0; column < 7; column++) {
		tableHtml = tableHtml.concat("<td><table id=" + countTo42 + " width=" + 150 +
			"height=" + 110 + "><tr id=dateTitle" + countTo42 + "><th></th></tr>")
		for (var eventTd = 1; eventTd < 5; eventTd++) {
			tableHtml = tableHtml.concat(
				"<tr class=\"EventTr\"><td style=\"height:20px;\" class=\"EventTd\" id=\"" + countTo42 +
				"event" + eventTd + "\"></td></tr>");
		}
		tableHtml = tableHtml.concat("</table></td>");
		countTo42++;
	}
	tableHtml = tableHtml.concat("</tr>");
}
miniCalendarTable2.innerHTML = tableHtml;
for (var i = 1; i <= 42; i++) {
	document.getElementById("dateTitle" + i).innerHTML = i;
}

$("#mainCalendar").mousemove(function(e) {
	mousePositionX = e.pageX;
	mousePositionY = e.pageY;
})
for (var i = 1; i < 43; i++) {
	var opener = document.getElementById(i);
	opener.onclick = function() {
		dimmer.onclick = function() {
			document.body.removeChild(this);
			lightbox.style.visibility = 'hidden';
			document.getElementById("eventTitle").value = "";
		}
		document.body.appendChild(dimmer);
		lightbox.style.visibility = 'visible';
		lightbox.style.top = mousePositionY;
		lightbox.style.left = mousePositionX;
		document.getElementById("eventTitle").focus();
		return false;
	}
}
// }
function addEvent() {
	for (var i = 1; i < 5; i++) {
		// window.console.log(focusDateId + event + i);
		var text = document.getElementById(focusDateId + "event" + i).innerText;
		// window.console.log(text);
		if (text != null && text != "") {
			continue;
		}
		var enentTdElement = document.getElementById(focusDateId + "event" + i);
		enentTdElement.innerHTML = document.getElementById(
			"eventTitle").value;
			enentTdElement.classList.add("eventWithContent");
		break;
	}
	closeLightbox();
}

function editEvent(){
	// window.console.log("editEvent");
	document.getElementById(focusDateEventId).innerHTML = document.getElementById(
		"eventTitle").value;
	closeLightbox();
}

function deleteEvent(){
	// window.console.log("editEvent");
	// document.getElementById(focusDateEventId).innerHTML = "";
	// var length = focusDateEventId.length;
	var id = parseInt(focusDateEventId.substring(focusDateEventId.indexOf("event")+5,focusDateEventId.length));
	// window.console.log(id);
	for(var i = id;i<5;i++){
		// window.console.log(focusDateId + "event" + (i+1));
		// window.console.log(document.getElementById(focusDateId + "event" + (i+1)).innerText);
		var currentEvenTd = document.getElementById(focusDateId + "event" + (i));
		var nexttEvenTd = document.getElementById(focusDateId + "event" + (i+1));

		if(nexttEvenTd != null && nexttEvenTd.innerText != null && nexttEvenTd.innerText != ""){
			// window.console.log(focusDateId + "event" + i);
			// window.console.log("true");
			// window.console.log(document.getElementById(focusDateId + "event" + (i)));
			// window.console.log(document.getElementById(focusDateId + "event" + (i+1)));
			currentEvenTd.innerHTML = nexttEvenTd.innerText;
		}else{
			// window.console.log("false");
			currentEvenTd.innerHTML = "";
			currentEvenTd.classList.remove("eventWithContent");
			break;
		}
	}
	// document.getElementById(focusDateId + "event" + 4).innerHTML = "";
	// document.getElementById(focusDateId + "event" + 4).classList.remove("eventWithContent");
	// enentTdElement.classList.remove("eventWithContent");
	closeLightbox();
}

function closeLightbox(){
	document.getElementById("eventTitle").value = "";
	document.body.removeChild(dimmer);
	lightbox.style.visibility = 'hidden';
}


$(document).ready(function() {
	$(".EventTd").click(function() {
		// window.console.log("已經到公海了");
		//當下點的欄位是否有值

		// textboxGetFocus();
		if (this.innerText != null && this.innerText != "") {
			document.getElementById("eventTitle").value = this.innerText;
			showEditEventButton();
		}else{
			showCreateEventButton();
		}
		focusDateEventId = this.id;
		focusDateId = this.parentNode.parentNode.parentNode.id;

	});
});

function showCreateEventButton(){
	$("#createEventButton").show();
	$("#editEventButton").hide();
	$("#deleteEventButton").hide();
	// document.getElementById("createEventButton").show();
	// document.getElementById("editEventButton").hide();
}

function showEditEventButton(){
	// window.console.log(document.getElementById("createEventButton"));
	$("#createEventButton").hide();
	$("#editEventButton").show();
	$("#deleteEventButton").show();

	// document.getElementById("createEventButton").hide();
	// document.getElementById("editEventButton").show();
}
