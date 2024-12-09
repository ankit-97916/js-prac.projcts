const form = document.querySelector(".main");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const reset = document.querySelector("#reset");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Not a valid ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Not a vlaid ${weight}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Not a vlaid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }

  reset.addEventListener("click", function () {
    height.value = "";
    weight.value = "";
    result.innerHTML = "";
  });
});

reset.addEventListener("click", function () {
  height.value = "";
  weight.value = "";
  result.innerHTML = "";
});
