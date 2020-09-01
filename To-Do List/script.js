
//Form Div
var form = document.getElementById("form");

//Name 
var divName = document.createElement("div");
divName.setAttribute('class', 'form-group ');
form.appendChild(divName);
var lbName = document.createElement("label");
lbName.className = "label";
lbName.innerHTML = "Name :";
lbName.setAttribute("for", 'name');
divName.appendChild(lbName);
var inName = document.createElement('input');
inName.className = "input";
inName.setAttribute("type", 'text');
inName.setAttribute("required", 'required');
inName.setAttribute("id", 'name');
inName.setAttribute("data-error", "wrong");
divName.appendChild(inName);
document.getElementById("name").focus();

//Mail 
var divMail = document.createElement("div");
divMail.setAttribute('class', 'form-group');
form.appendChild(divMail);
var lbMail = document.createElement("label");
lbMail.innerHTML = "E-Mail :";
lbMail.className = "label";
lbMail.setAttribute("for", 'email');
divMail.appendChild(lbMail);
var inMail = document.createElement('input');
inMail.className = "input";
inMail.setAttribute("type", 'email');
inMail.setAttribute("required", 'required');
inMail.setAttribute("id", 'email');
inMail.setAttribute("data-error", "wrong");
divMail.appendChild(inMail);

//Password 
var divPassword = document.createElement("div");
divPassword.setAttribute('class', 'form-group');
form.appendChild(divPassword);
var lbPassword = document.createElement("label");
lbPassword.innerHTML = "Password";
lbPassword.className = "label";
lbPassword.setAttribute("for", 'password');
divPassword.appendChild(lbPassword);
var inPassword = document.createElement('input');
inPassword.className = "input";
inPassword.setAttribute("type", 'password');
inPassword.setAttribute("required", 'required');
inPassword.setAttribute("id", 'password');
divPassword.appendChild(inPassword);

//Re-type Password
var divRePassword = document.createElement("div");
divRePassword.setAttribute('class', 'form-group');
form.appendChild(divRePassword);
var lbRePassword = document.createElement("label");
lbRePassword.innerHTML = "Retype Password :";
lbRePassword.className = "label";
lbRePassword.setAttribute("for", 'reTypePassword');
divRePassword.appendChild(lbRePassword);
var inRePassword = document.createElement('input');
inRePassword.className = "input";
inRePassword.setAttribute("type", 'password');
inRePassword.setAttribute("required", 'required');
inRePassword.setAttribute("id", 'reTypePassword');
divRePassword.appendChild(inRePassword);

//Country Drop down
var divCountry = document.createElement("div");
divCountry.setAttribute('class', 'form-group');
form.appendChild(divCountry);
var lbCountry = document.createElement("label");
lbCountry.innerHTML = "Country  :";
lbCountry.className = "label";
lbCountry.setAttribute('for', 'country');
divCountry.appendChild(lbCountry);
var countrySelect = document.createElement('select');
countrySelect.id = "country";
divCountry.appendChild(countrySelect);
var countryOp = document.createElement('option');     //select
countryOp.setAttribute("value", '');
countryOp.innerHTML = "Select";
countrySelect.appendChild(countryOp);
var countryOp1 = document.createElement('option');    //op1
countryOp1.setAttribute("value", 'India');
countryOp1.innerHTML = "India";
countrySelect.appendChild(countryOp1);
var countryOp2 = document.createElement('option');    //op2
countryOp2.setAttribute("value", 'USA');
countryOp2.innerHTML = "USA";
countrySelect.appendChild(countryOp2);
var countryOp3 = document.createElement('option');    //op3
countryOp3.setAttribute("value", 'Australia');
countryOp3.innerHTML = "Australia";
countrySelect.appendChild(countryOp3);
tab
//State Drop Down
var divState = document.createElement("div");
divState.setAttribute('class', 'form-group');
form.appendChild(divState);
var lbState = document.createElement("label");
lbState.className = "label";
lbState.innerHTML = "State  :";
lbState.setAttribute('for', 'state');
divState.appendChild(lbState);
var stateSelect = document.createElement('select');
stateSelect.id = "state";
divState.appendChild(stateSelect);
var stateOp = document.createElement('option');   //select
stateOp.setAttribute('value', '');
stateOp.innerHTML = "Select";
stateSelect.appendChild(stateOp);
var stateop1 = document.createElement('option');  //op1
stateop1.setAttribute('value', 'Tamil Nadu');
stateop1.innerHTML = "Tamil Nadu";
stateSelect.appendChild(stateop1);
var stateop2 = document.createElement('option');  //op2
stateop2.setAttribute('value', 'Kerala');
stateop2.innerHTML = "Kerala";
stateSelect.appendChild(stateop2);
var stateop3 = document.createElement('option');  //op3
stateop3.setAttribute('value', 'Karnataka');
stateop3.innerHTML = "Karnataka";
stateSelect.appendChild(stateop3);

//City Drop Down
var divCity = document.createElement("div");
divCity.setAttribute('class', 'form-group');
form.appendChild(divCity);
var lbCity = document.createElement("label");
lbCity.innerHTML = "City  :";
lbCity.className = "label";
lbCity.setAttribute('for', 'city');
divCity.appendChild(lbCity);
var selectCity = document.createElement('select');
selectCity.id = "city";
divCity.appendChild(selectCity);
var cityOp = document.createElement('option');
cityOp.setAttribute("value", '');      //select
cityOp.innerHTML = "Select";
selectCity.appendChild(cityOp);
var cityOp1 = document.createElement('option');
cityOp1.setAttribute("value", 'Chennai');    //op1
cityOp1.innerHTML = "Chennai";
selectCity.appendChild(cityOp1);
var cityOp2 = document.createElement('option');
cityOp2.setAttribute("value", 'Cochin');     //op2
cityOp2.innerHTML = "Cochin";
selectCity.appendChild(cityOp2);
var cityOp3 = document.createElement('option');
cityOp3.setAttribute("value", 'Bangalore');      //op3
cityOp3.innerHTML = "Bangalore";
selectCity.appendChild(cityOp3);

//Gender Radio button
var divGender = document.createElement("div");
divGender.setAttribute('class', 'form-group');
form.appendChild(divGender);
var lbGender = document.createElement("label");
lbGender.innerHTML = "Gender:";
lbGender.className = "label";
divGender.appendChild(lbGender);
var divOp1 = document.createElement("div");       //div1
divGender.appendChild(divOp1);
var inGender1 = document.createElement('input');      //male
inGender1.type = "radio";
inGender1.id = "male";
inGender1.value = "male";
inGender1.name = "gender";
inGender1.className = "radio-input";
divOp1.appendChild(inGender1)
var laGender1 = document.createElement("label");
laGender1.innerHTML = "Male";
laGender1.setAttribute("for", "male");
laGender1.className = "radio-label";
divOp1.appendChild(laGender1);
var divOp2 = document.createElement("div");       //div2
divGender.appendChild(divOp2);
var inGender2 = document.createElement('input');      //female
inGender2.type = "radio";
inGender2.className = "radio-input";
inGender2.id = "female";
inGender2.value = "female";
inGender2.name = "gender";
divOp2.appendChild(inGender2)
var laGender2 = document.createElement("label");
laGender2.innerHTML = "Female";
laGender2.className = "radio-label";
laGender2.setAttribute("for", "female");
divOp2.appendChild(laGender2);
var divOp3 = document.createElement("div");       //div3
divGender.appendChild(divOp3);
var inGender3 = document.createElement('input');      //others
inGender3.type = "radio";
inGender3.id = "others";
inGender3.className = "radio-input";
inGender3.value = "others";
inGender3.name = "gender";
divOp3.appendChild(inGender3)
var laGender3 = document.createElement("label");
laGender3.innerHTML = "Others";
laGender3.setAttribute("for", "others");
laGender3.className = "radio-label";
divOp3.appendChild(laGender3);

//Marital status Radio button
var divMarital = document.createElement("div");
divMarital.setAttribute('class', 'form-group');
form.appendChild(divMarital);
var lbMarital = document.createElement("label");
lbMarital.innerHTML = "Marital Status:";
lbMarital.className = "label";
divMarital.appendChild(lbMarital);
var divOp11 = document.createElement("div");       //div1
divMarital.appendChild(divOp11);
var inMarital1 = document.createElement('input');      //married
inMarital1.type = "radio";
inMarital1.id = "married";
inMarital1.value = "married";
inMarital1.name = "marital";
inMarital1.className = "radio-input";
divOp11.appendChild(inMarital1)
var laMarital1 = document.createElement("label");
laMarital1.innerHTML = "Married";
laMarital1.setAttribute("for", "married");
laMarital1.className = "radio-label";
divOp11.appendChild(laMarital1);
var divOp22 = document.createElement("div");       //div2
divMarital.appendChild(divOp22);
var inMarital2 = document.createElement('input');      //unmarried
inMarital2.type = "radio";
inMarital2.id = "unmarried";
inMarital2.value = "unmarried";
inMarital2.name = "marital";
inMarital2.className = "radio-input";
divOp22.appendChild(inMarital2)
var laMarital2 = document.createElement("label");
laMarital2.innerHTML = "Unmarried";
laMarital2.className = "radio-label";
laMarital2.setAttribute("for", "unmarried");
divOp22.appendChild(laMarital2);

//Fav Places Checkbox
var divFavPlace = document.createElement("div");
divFavPlace.setAttribute('class', 'form-group');
form.appendChild(divFavPlace);
var lbFavorite = document.createElement("label");
lbFavorite.innerHTML = "Favorite Places:";
lbFavorite.className = "label";
divFavPlace.appendChild(lbFavorite);
var divOp21 = document.createElement("div");       //div1
divFavPlace.appendChild(divOp21);
var inFavorite1 = document.createElement('input');      //kodaikanal
inFavorite1.type = "checkbox";
inFavorite1.id = "kodaikanal";
inFavorite1.name = "favorite";
inFavorite1.value = "kodaikanal";
inFavorite1.className = "radio-input";;
divOp21.appendChild(inFavorite1);
var laFavorite1 = document.createElement("label");
laFavorite1.innerHTML = "Kodaikanal";
laFavorite1.setAttribute("for", "kodaikanal");
laFavorite1.className = "radio-label";
divOp21.appendChild(laFavorite1);
var divOp22 = document.createElement("div");       //div2
divFavPlace.appendChild(divOp22);
var inFavorite2 = document.createElement('input');      //ooty
inFavorite2.type = "checkbox";
inFavorite2.id = "ooty";
inFavorite2.value = "ooty";
inFavorite2.name = "favorite";
inFavorite2.className = "radio-input";
divOp22.appendChild(inFavorite2)
var laFavorite2 = document.createElement("label");
laFavorite2.innerHTML = "Ooty";
laFavorite2.setAttribute("for", "ooty");
laFavorite2.className = "radio-label";
divOp22.appendChild(laFavorite2);
var divOp23 = document.createElement("div");       //div3
divFavPlace.appendChild(divOp23);
var inFavorite3 = document.createElement('input');      //delhi
inFavorite3.type = "checkbox";
inFavorite3.id = "delhi";
inFavorite3.value = "delhi";
inFavorite3.name = "favorite";
inFavorite3.className = "radio-input";
divOp23.appendChild(inFavorite3)
var laFavorite3 = document.createElement("label");
laFavorite3.innerHTML = "Delhi";
laFavorite3.setAttribute("for", "delhi");
laFavorite3.className = "radio-label";
divOp23.appendChild(laFavorite3);

//Submit Button
var divSubmit = document.createElement("div");
form.appendChild(divSubmit);
var inSubmit = document.createElement('input');
inSubmit.type = 'submit';
inSubmit.value = "Submit";
inSubmit.className = "button";
divSubmit.appendChild(inSubmit);
//Reset Button
var inReset = document.createElement('input');
inReset.type = 'reset';
inReset.value = "Reset";
inReset.id="reset";
inReset.className = "button";
divSubmit.appendChild(inReset);

//generate table
var tab = document.getElementById("table");

var table = document.createElement("table");
tab.appendChild(table);
var tableHeadTitle = ["Name", "Email", "Password", "Country", "State", "City", "Gender", "Marital Status", "Favorite Places"];
//table head
var tHead = document.createElement("thead");
table.appendChild(tHead);
var trHead = document.createElement("tr");
tHead.appendChild(trHead);
//table head titles
for (var i = 0; i < tableHeadTitle.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = tableHeadTitle[i];
    trHead.appendChild(th);
}
//table body
var tableBody = document.createElement("tbody");
tableBody.id = "tableBody";
table.appendChild(tableBody);

var dataArray = [];
var isEdit = false;
var editIndex;
function submitData() {
    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        country: document.getElementById("country").value,
        state: document.getElementById("state").value,
        city: document.getElementById("city").value,
        gender: "",
        marital: ""
    };
    //gender
    var g = document.getElementsByName('gender');
    for (i = 0; i < g.length; i++) {
        if (g[i].checked) {
            formData.gender = g[i].value;
        }
    }
    //marital status
    var m = document.getElementsByName('marital');
    for (i = 0; i < m.length; i++) {
        if (m[i].checked) {
            formData.marital = m[i].value;
        }
    }
    //favorite places
    var f = document.getElementsByName('favorite'), f_array = [];
    for (var i = 0; i < f.length; i++) {
        if (f[i].type == 'checkbox' && f[i].checked == true) {
            f_array.push(f[i].value);
        }
    }
    formData.favorite = f_array;
    if (isEdit == true) {    //edit
        dataArray[editIndex] = formData;
        isEdit = false;
    } else {                   //new
        dataArray.push(formData);
    }
    generateTable(dataArray);
    document.getElementById("name").focus();
}
// Table row Generation
function generateTable(data) {
    document.getElementById("tableBody").innerHTML = "";
    for (var i = 0; i < data.length; i++) {
        var tableRow = document.createElement("tr");
        //console.log(data);
        var innerArray = Object.values(data[i]);
        for (var j = 0; j < innerArray.length; j++) {
            var th = document.createElement("th");
            th.innerHTML = innerArray[j];
            tableRow.appendChild(th);
        }
        //edit button
        var editTh = document.createElement("th");
        var editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.className="edit";
        editTh.appendChild(editButton);
        editButton.setAttribute("onclick", "editRow(" + i + ")");
        tableRow.appendChild(editTh);
        //delete button
        var delTh = document.createElement("th");
        var delButton = document.createElement("button");
        delButton.innerHTML = "Delete";
        delButton.className="edit";
        delTh.appendChild(delButton);
        delButton.setAttribute("onclick", "deleteRow(" + i + ")");
        tableRow.appendChild(delTh);
        //console.log(innerArray);
        document.getElementById("tableBody").appendChild(tableRow);
    }
}
//delete row
function deleteRow(index) {
    var deleteOrNot = confirm("Do you want to delete?");
    if (deleteOrNot) {
        dataArray.splice(index, 1);
        generateTable(dataArray);
    }
}
// edit row
function editRow(i) {
    //console.log(i);
    isEdit = true;
    editIndex = i;
}
