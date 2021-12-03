const container = document.querySelector(".container");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movie = document.getElementById("movie");

const seatsNotOccupied = document.querySelectorAll(".row .seat:not(.occupied)");
// console.log(seatsNotOccupied);
let moviePrice = +movie.value;

movie.addEventListener("change", (e) => {
  moviePrice = e.target.value;
  //local storage
  localStorage.setItem("movieNameIndex", e.target.selectedIndex);
  localStorage.setItem("MoviePrice", e.target.value);

  updatingTextWithCountPrice();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updatingTextWithCountPrice();
  }
});

function updatingTextWithCountPrice() {
  const seatSelected = document.querySelectorAll(".row .seat.selected");

  //local storage
  const seatsIndex = [...seatSelected].map((seat) => {
    return [...seatsNotOccupied].indexOf(seat);
  });
  localStorage.setItem("selectedSeatsIndex", JSON.stringify(seatsIndex));

  count.innerText = seatSelected.length;
  total.innerText = moviePrice * seatSelected.length;
}

// poulate the UI from the local storage

function populateUI() {
  const selectedSeatsIndex = JSON.parse(
    localStorage.getItem("selectedSeatsIndex")
  );

  if (selectedSeatsIndex !== null && selectedSeatsIndex.length > 0) {
    seatsNotOccupied.forEach((seat, index) => {
      if (selectedSeatsIndex.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  const movieNameIndex = localStorage.getItem("movieNameIndex");
  if (movieNameIndex !== null) {
    movie.selectedIndex = movieNameIndex;
  }
}
populateUI();
updatingTextWithCountPrice();
