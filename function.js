var miniCalendarDate = new Date();

function gotoToday() {
	addDate(new Date());
	miniCalendarDate = new Date();
}

function gotoNextMonth() {
	var targetDay = new Date(miniCalendarDate.getFullYear(), miniCalendarDate.getMonth() +
		1, 1);
	addDate(targetDay);
	miniCalendarDate = targetDay;

}

function gotoLastMonth() {
	var targetDay = new Date(miniCalendarDate.getFullYear(), miniCalendarDate.getMonth() -
		1, 1);
	addDate(targetDay);
	miniCalendarDate = targetDay;
}

function addDate(today) {
	delRow();
	var miniCalendarTable = document.getElementById("miniCalendar");
	var dayNumberInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
	var firstDayInMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
	if (firstDayInMonth == 0) {
		firstDayInMonth = 7;
	}
	//window.console.log(today.getMonth()+1+"月的第一天是禮拜"+firstDayInMonth);


	var count = 1;
	var week = Math.ceil((dayNumberInMonth + firstDayInMonth - 1) / 7);
	for (var w = 0; w < week; w++) {
		var row = miniCalendarTable.insertRow(miniCalendarTable.rows.length);
		//window.console.log("新增第"+miniCalendarTable.rows.length+"行");
		for (var i = 0; i < 7; i++) {
			if (count == dayNumberInMonth + firstDayInMonth) {
				break;
			}
			var newCell = row.insertCell(i);
			if (count < firstDayInMonth) {
				var newText = document.createTextNode('');
			} else {
				var newText = document.createTextNode(count - firstDayInMonth + 1);
			}
			newCell.appendChild(newText);
			count++;
		}
	}
}

function delRow() {
	var num = document.getElementById("miniCalendar").rows.length;
	for (var i = num; i > 1; i--) {
		document.getElementById("miniCalendar").deleteRow(i - 1);
	}
}

function testAlert() {
	alert("test");
}
