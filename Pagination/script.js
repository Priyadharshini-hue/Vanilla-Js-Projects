fetch('https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json')
    .then(response => response.json())
    .then(data => {
        page = 0;
        console.log(data);
        var table = document.getElementById("table");
        //table head
        var tHead = document.createElement("thead");
        var tr1 = document.createElement("tr");
        tHead.appendChild(tr1);
        var headTitles = ["Id", "Name", "Email"];
        for (var i = 0; i < headTitles.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = headTitles[i];
            tr1.appendChild(th);
        }
        table.appendChild(tHead);
        //table body
        var tBody = document.createElement("tbody");
        table.appendChild(tBody);
        for (var j = 0; j < 5; j++) {
            var tr2 = document.createElement("tr");
            tBody.appendChild(tr2);
            var td1 = document.createElement("td");
            td1.innerHTML = data[j].id;
            tr2.appendChild(td1);
            var td2 = document.createElement("td");
            td2.innerHTML = data[j].name;
            tr2.appendChild(td2);
            var td3 = document.createElement("td");
            td3.innerHTML = data[j].email;
            tr2.appendChild(td3);
            //console.log(json[j])
        }
        //creating buttons dynamically
        var prev=document.createElement("button");
        prev.innerHTML="Previous";
        prev.id="prev";
        document.getElementById("button").appendChild(prev);
        var last=document.createElement("button");
        last.innerHTML="Next";
        last.id="next";
        document.getElementById("button").appendChild(last);
        for (var n = 0; n < 20; n++) {
            var button = document.createElement("button");
            button.innerHTML = n + 1;
            button.className = "btn";
            button.id = n;
            button.setAttribute("type", "button");
            document.getElementById("button").appendChild(button);
            button.addEventListener("click", t => {
                console.log(t.target.id);
                n = t.target.id;
                display();
            })
        }
        function display() {
            tBody.innerHTML = ' ';
            page=n
            console.log(page)
            for (var data1 = (n * 5); data1 <= ((n * 5) + 4); data1++) {
                console.log(data[data1])
                var tr2 = document.createElement("tr");
                tBody.appendChild(tr2);
                var td1 = document.createElement("td");
                td1.innerHTML = data[data1].id;
                tr2.appendChild(td1);
                var td2 = document.createElement("td");
                td2.innerHTML = data[data1].name;
                tr2.appendChild(td2);
                var td3 = document.createElement("td");
                td3.innerHTML = data[data1].email;
                tr2.appendChild(td3);
            }
        }

    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
