window.onload = function () {          //for genarating a default table on genaration
  draw();
};

function draw() {
  var a = document.getElementById("a");
  var b = document.getElementById("b");
  genTable(a.value, b.value);          //generating a table
  var tb = document.getElementById("table");
  var x;

  tb.onclick = (e) => {           //handling click event
    console.log(e.target);
    console.log(e.target.tagName);
    console.log(e.target.id);
    x = document.getElementById(e.target.id);
    x.style.opacity = "0.9";
    x.style.backgroundColor = "black";
  };

  tb.onmousedown = (h) => {       //handling drag event
    tb.onmousemove = (g) => {
      console.log(g.target);
      console.log(g.target.tagName);
      console.log(g.target.id);
      x = document.getElementById(g.target.id);
      x.style.opacity = "0.9";
      x.style.backgroundColor = "black";
    };
  };
  return;
}

function genTable(a, b) {          //genarates a table of dimension a*b
  let k = 0;
  var body = document.getElementById("holder");
  var tbl = document.createElement("table");

  body.innerHTML = "";
  tbl.id = "table";

  tbl.style.borderCollapse = "collapse";
  tbl.style.borderStyle = "solid";
  tbl.style.borderColor = "black";
  tbl.style.borderWidth = "1px";

  var tbdy = document.createElement("tbody");
  for (var i = 0; i < a; i++) {
    var tr = document.createElement("tr");

    tr.style.borderWidth = "1px";
    tr.style.borderStyle = "solid";
    tr.style.borderColor = "black";

    for (var j = 0; j < b; j++) {
      var td = document.createElement("td");
      td.id = k;

      td.style.borderWidth = "1px";
      td.style.borderStyle = "solid";
      td.style.borderColor = "black";
      td.style.height = "15px";
      td.style.width = "15px";
      td.style.backgroundColor = "white";
      td.style.opacity = "0.1";

      td.appendChild(document.createTextNode(""));
      tr.appendChild(td);

      k++;
    }

    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl);
  return;
}
