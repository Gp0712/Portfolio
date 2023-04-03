function calcCalory() {
  if (document.getElementById("gender").checked == true) {
    return calcCalory_m();
  } else if (document.getElementById("gender2").checked == true) {
    return calcCalory_w();
  } else {
    alert("Give your gender first please!");
  }
}
function calcCalory_w() {
let weigth = Number(document.getElementById("weigth").value);
let heigth = Number(document.getElementById("heigth").value);
let age = Number(document.getElementById("age").value);
  if (weigth > 0 && heigth > 0 && age > 0) {
    if( valueOfA() > 0){
    document.getElementById("calory").innerHTML =
      " your calory needs is: " +
      Math.floor(
        (655 + weigth * 9.6 + heigth * 1.9 - age * 4.7) *
          valueOfA()
      ) +
      " Kcal" +
      "<br>" +
      " If you want to loose weigth, you have to eat 200 - 500 Kcal less!";
      } else {
        alert('Give your phisical activity please!');
      }
    } else {
    alert('Give a valid number in your details please!');
    }

}
function calcCalory_m() {
    let weigth = Number(document.getElementById("weigth").value);
    let heigth = Number(document.getElementById("heigth").value);
    let age = Number(document.getElementById("age").value);
  if (weigth > 0 && heigth > 0 && age > 0) {
    if( valueOfA() > 0){
    document.getElementById("calory").innerHTML =
      " your calory needs is: " +
      Math.floor(
        (66.5 + weigth * 13.8 + heigth * 5 - age * 6.8) *
          valueOfA()
      ) +
      " Kcal" +
      "<br>" +
      " If you want to loose weigth, you have to eat 200 - 500 Kcal less!";
    } else {
      alert('Give your phisical activity please!');
    }
  } else {
  alert('Give a valid number in your details please!');
  }
}

let a;
function valueOfA() {
  var b = document.getElementsByName("activity");
  for (var i = 0; i < b.length; i++) {
    if (b[i].checked) {
      a = b[i].value;
      break;
    }
} 
return a;
}
