import "./style.css";
let BASE_URL =
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=ebd62c1865214b29b1d31277195370d0";
let selectToCurransy = document.querySelector(".selectToCurransy");
  let dollar = document.querySelector(".dollar");
  let dol = document.querySelector(".dol");
  let convert = document.querySelector(".convert");


  
  // get data // 
fetch(BASE_URL)
  .then((data) => data.json())
  .then((data) => {
    pushCurrensy(data);
  });


  // push to select and option //
function pushCurrensy(data) {
  let Currensy = data.rates;
  let num = Object.entries(Currensy);
  num.forEach((value2) => {
    let option = document.createElement("option");
    option.classList.value = `${value2[1]}`;
    option.innerHTML = `${value2[0]}`;
    selectToCurransy.append(option);
  });

//////// convert to currincy ////////
  convert.addEventListener("click", (e) => {
    num.forEach((value3) => {
      if (value3[0] == selectToCurransy.value) {
        let sum = document.querySelector(".sum");
        sum.innerHTML = `
    ${(Number(dollar.value) * Number(value3[1])).toFixed(3)}
      ${selectToCurransy.value}
       `;
       dol.innerHTML = dollar.value
      }
    });
  });
}
