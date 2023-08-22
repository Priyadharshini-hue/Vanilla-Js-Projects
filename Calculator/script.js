var form = document.getElementById("form");

var textarea = document.createElement("input");
textarea.name = "input";
textarea.id = "input";
textarea.type = "text";
form.appendChild(textarea);

var br = document.createElement("br");
form.appendChild(br);

var input1 = document.createElement("input");
input1.className = "btn";
input1.type = "button";
input1.value = "DEL";
input1.setAttribute("onclick", "backspace()");
form.appendChild(input1);

var input2 = document.createElement("input");
input2.className = "btn";
input2.type = "button";
input2.value = "C";
input2.setAttribute("onclick", "fulldelete()");
form.appendChild(input2);

var input3 = document.createElement("input");
input3.className = "btn";
input3.type = "button";
input3.value = "%";
input3.setAttribute("onclick", "percent()");
form.appendChild(input3);

var input4 = document.createElement("input");
input4.className = "btn";
input4.type = "button";
input4.value = "/";
input4.setAttribute("onclick", "insert('/')");
form.appendChild(input4);

var br = document.createElement("br");
form.appendChild(br);

var input5 = document.createElement("input");
input5.className = "btn";
input5.type = "button";
input5.value = "7";
input5.setAttribute("onclick", "insert(7)");
form.appendChild(input5);

var input6 = document.createElement("input");
input6.className = "btn";
input6.type = "button";
input6.value = "8";
input6.setAttribute("onclick", "insert(8)");
form.appendChild(input6);

var input7 = document.createElement("input");
input7.className = "btn";
input7.type = "button";
input7.value = "9";
input7.setAttribute("onclick", "insert(9)");
form.appendChild(input7);

var input8 = document.createElement("input");
input8.className = "btn";
input8.type = "button";
input8.value = "+";
input8.setAttribute("onclick", "insert('+')");
form.appendChild(input8);

var br = document.createElement("br");
form.appendChild(br);

var input9 = document.createElement("input");
input9.className = "btn";
input9.type = "button";
input9.value = "4";
input9.setAttribute("onclick", "insert(4)");
form.appendChild(input9);

var input10 = document.createElement("input");
input10.className = "btn";
input10.type = "button";
input10.value = "5";
input10.setAttribute("onclick", "insert(5)");
form.appendChild(input10);

var input11 = document.createElement("input");
input11.className = "btn";
input11.type = "button";
input11.value = "6";
input11.setAttribute("onclick", "insert(6)");
form.appendChild(input11);

var input12 = document.createElement("input");
input12.className = "btn";
input12.type = "button";
input12.value = "-";
input12.setAttribute("onclick", "insert('-')");
form.appendChild(input12);

var br = document.createElement("br");
form.appendChild(br);

var input13 = document.createElement("input");
input13.className = "btn";
input13.type = "button";
input13.value = "1";
input13.setAttribute("onclick", "insert(1)");
form.appendChild(input13);

var input14 = document.createElement("input");
input14.className = "btn";
input14.type = "button";
input14.value = "2";
input14.setAttribute("onclick", "insert(2)");
form.appendChild(input14);

var input15 = document.createElement("input");
input15.className = "btn";
input15.type = "button";
input15.value = "3";
input15.setAttribute("onclick", "insert(3)");
form.appendChild(input15);

var input16 = document.createElement("input");
input16.className = "btn";
input16.type = "button";
input16.value = "=";
input16.setAttribute("onclick", "insert('=')");
form.appendChild(input16);

function insert(num) {
  myform.input.value += num;
}
function equal() {
  var n = eval(document.getElementById("input").value);
  if (n) {
    myform.input.value = n;
  }
  //console.log(n);
}
function backspace() {
  var value1 = myform.input.value;
  myform.input.value = value1.substr(0, value1.length - 1);
}
function fulldelete() {
  myform.input.value = "";
}
function percent(){
    myform.input.value/=100;
}