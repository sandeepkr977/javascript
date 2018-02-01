var w;
var tableWrapper = document.getElementsByClassName("dataTable")[0];
tableWrapper.innerHTML = "Content Loading...";
if (typeof(Worker) != undefined) {
    w = new Worker("./workers/worker_1.js");
    w.onmessage = function(msg) {
        createTable(msg.data);
        w.terminate();
        w = undefined;
    };

    w.onerror = function(err) {
        console.log(err);
    }
} else {
    console.log("Web Workers not supported in your browser");
}

function createTable(data) {
    var table = document.createElement("table");
    table.cellPadding = 0;
    table.cellSpacing = 0;
    var tbody = document.createElement("tbody");
    var thead = document.createElement("thead");
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    td.appendChild(document.createTextNode("Sr.No"))
    tr.appendChild(td);

    var td = document.createElement("td");
    td.appendChild(document.createTextNode("Name"));
    tr.appendChild(td);
    var td = document.createElement("td");
    td.appendChild(document.createTextNode("Age"))
    tr.appendChild(td);
    var td = document.createElement("td");
    td.appendChild(document.createTextNode("Mobile No"))
    tr.appendChild(td);
    thead.appendChild(tr);

    data.forEach(function(row, i) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(i + 1))
        tr.appendChild(td);
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(row.name))
        tr.appendChild(td);
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(row.age))
        tr.appendChild(td);
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(row.mobileNo))
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    table.appendChild(thead);
    table.appendChild(tbody);

    tableWrapper.innerHTML = "";
    tableWrapper.appendChild(table);
}