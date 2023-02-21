
function  calcCalory(){
    if(document.getElementById('gender').checked == true){
        return calcCalory_m();
    } else if(document.getElementById('gender2').checked == true){
        return calcCalory_w();
    } else { alert('Give your gender first please')}
    
}
function calcCalory_w(){
    document.getElementById('calory').innerHTML = ' your calory needs is: ' + 
    Math.floor((655 + (document.getElementById('weigth').value * 9.6)
    + (document.getElementById('heigth').value * 1.9)
    - (document.getElementById('age').value * 4.7)
    ) * valueOfA()) + ' Kcal' + '<br><br>' + ' If you want to loose weigth, you have to eat 200 - 500 Kcal less!'
}
function calcCalory_m(){
    document.getElementById('calory').innerHTML = ' your calory needs is: ' + 
    Math.floor((66.5 + (document.getElementById('weigth').value * 13.8)
    + (document.getElementById('heigth').value * 5)
    - (document.getElementById('age').value * 6.8)
    ) * valueOfA()) + ' Kcal' + '<br><br>' + ' If you want to loose weigth, you have to eat 200 - 500 Kcal less!'
} 
let a;
function valueOfA(){
    var b = document.getElementsByName('activity');
    for(var i = 0; i <b.length; i++) {
     if(b[i].checked){
         a = b[i].value;
          break;
     }
    }       
     return a;
}
