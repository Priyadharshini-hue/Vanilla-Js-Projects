fetch("https://restcountries.eu/rest/v2/all")
  .then(
    (response) => response.json() //returns promise
  )
  .then((data) => {
    var left = document.getElementById("left");

    for (var i = 0; i < 20; i++) {
      var image = document.createElement("img");
      image.src = data[i].flag;
      image.id = i;
      console.log(image.id);
      image.addEventListener("click", (f) => {
        var right = document.getElementById("right");
        right.innerHTML = "";
        console.log(f.target.id);
        var c = data[f.target.id];
        console.log(c);

        var img = document.createElement("img");
        img.src = c.flag;
        img.setAttribute("style", "width:150px;height:150px");
        right.appendChild(img);

        var info = document.createElement("div");
        info.setAttribute('style',"margin-top:1rem")
        info.innerHTML =
          "<p>Country Name: " +
          c.name +
          "</p> <p>Alpha2Code: " +
          c.alpha2Code +
          "</p>" +
          "<p>Capital: " +
          c.capital +
          "</p>" +
          "<p>Region: " +
          c.region +
          "</p>" +
          "<p>Borders: " +
          c.borders +
          "</p>";
        right.appendChild(info);
      });
      left.appendChild(image);
    }
  })
  .catch((err) => {
    console.log("Error");
  });
