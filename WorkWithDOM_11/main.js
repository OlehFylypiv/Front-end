// "WorkWithDOM: Create a simple calendar-table"
function createCalendar(id, year, month) {
    var elem = document.getElementById(id);

    var mon = month - 1; 
    var d = new Date(year, mon);

    var table = '<table><tr><th>mo</th><th>tu</th><th>we</th><th>th</th><th>fr</th><th>st</th><th>su</th></tr><tr>';

    for (var i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    while (d.getMonth() == mon) {
        
        table += '<td>' + d.getDate() + '</td>';

        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>';
        }

        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (var i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    table += '</tr></table>';

    elem.innerHTML = table;
}


function getDay(date) {
    
    var day = date.getDay();
    
    if (day == 0) {
        day = 7;
    }    
    
    return day - 1;
}