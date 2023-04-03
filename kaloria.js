function calcCalory() {
    if (document.getElementById("gender").checked == true) {
      return calcCalory_m();
    } else if (document.getElementById("gender2").checked == true) {
      return calcCalory_w();
    } else {
      alert("Kérem adja meg a nemét!");
    }
  }
  function calcCalory_w() {
  let weigth = Number(document.getElementById("weigth").value);
  let heigth = Number(document.getElementById("heigth").value);
  let age = Number(document.getElementById("age").value);
    if (weigth > 0 && heigth > 0 && age > 0) {
      if( valueOfA() > 0){
      document.getElementById("calory").innerHTML =
        " Az ön kalória szükséglete: " +
        Math.floor(
          (655 + weigth * 9.6 + heigth * 1.9 - age * 4.7) *
            valueOfA()
        ) +
        " Kcal" +
        "<br>" +
        "Ha fogyni szeretne, egyen 200 - 500 Kcal-val kevesebbet!";
        } else {
          alert('Kérem adja meg a fizikai aktivitását!');
        }
      } else {
      alert('Kérem adja meg a valós számértéket!');
      }
  
  }
  function calcCalory_m() {
      let weigth = Number(document.getElementById("weigth").value);
      let heigth = Number(document.getElementById("heigth").value);
      let age = Number(document.getElementById("age").value);
    if (weigth > 0 && heigth > 0 && age > 0) {
      if( valueOfA() > 0){
      document.getElementById("calory").innerHTML =
        "Az ön kalória szükséglete: " +
        Math.floor(
          (66.5 + weigth * 13.8 + heigth * 5 - age * 6.8) *
            valueOfA()
        ) +
        " Kcal" +
        "<br>" +
        " Ha fogyni szeretne, egyen 200 - 500 Kcal-val kevesebbet!";
      } else {
        alert('Kérem adja meg a fizikai aktivitását!');
      }
    } else {
    alert('Kérem adja meg a valós számértéket!');
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