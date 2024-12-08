let input = document.querySelectorAll(".data");
let eEvent = document.querySelector("#event");
let rBtn = document.querySelector("#reset");
let entry = document.querySelector("#enterl")
let btn = document.querySelector("#submit");
let rCol = document.querySelector(".col")
let newH3 =  document.querySelector("#h3")
let h3 = document.querySelector("h3");

function resetTime() {
  rBtn.addEventListener("click", function() {
    
    entry.value = "";
    h3.innerText = "";
    eEvent.value = "";
    
    

  } );
};
resetTime();



btn.addEventListener("click", function () {
    h3.innerText = entry.value;
  entry.value = end;


   newH3.innerText = eEvent.value;
  

                                                     

  entry.value = clock();
  

  

});

function clock() {                        
  const end = new Date(h3.innerText);
  const now = new Date();

  const diff = (end - now) / 1000;

  if (diff < 0) return;

  // convert into days;
  input[0].value = Math.floor(diff / 3600 / 24);
  // convert into hours;
  input[1].value = Math.floor(diff / 3600) % 24;
  // convert into minutes;
  input[2].value = Math.floor(diff / 60) % 60;
  // convert into seconds;

  input[3].value = Math.floor(diff) % 60;
};

setInterval(() => {
  clock();
}, 1000);

// clock();
