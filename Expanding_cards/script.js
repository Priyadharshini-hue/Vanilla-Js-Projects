"use strict"
const panels = document.querySelectorAll(".panel"); //can select all type of elements

// console.log(panels); 

panels.forEach((panel) => {
  // console.log(panel);
  panel.addEventListener("click",()=>{
    clearActiveClasses();
    panel.classList.add("active")
    // console.log(panel);
  })
});

function clearActiveClasses(){
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
}