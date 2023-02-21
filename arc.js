

function calculate ( ) {
    a = document.getElementById('number').value;
    if(a > 0){
    let b = [];
    let i = 0;
    while((a - 1000) >= 0){
        b[i] = 'M';
        a = a - 1000;
        i++; 
    }
    while((a - 900) >= 0){
        b[i] = 'CM';
        a = a - 900;
        i++; 
    }
    while((a - 500) >= 0){
        b[i] = 'D';
        a = a - 500;
        i++; 
    }
    while((a - 400) >= 0){
        b[i] = 'CD';
        a = a - 400;
        i++; 
    }
    while((a - 100) >= 0){
        b[i] = 'C';
        a = a - 100;
        i++; 
    }
    while((a - 90) >= 0){
        b[i] = 'XC';
        a = a - 90;
        i++; 
    }
    while((a - 50) >= 0){
        b[i] = 'L';
        a = a - 50;
        i++; 
    }
    while((a - 40) >= 0){
        b[i] = 'XL';
        a = a - 40;
        i++; 
    }
    while((a - 10) >= 0){
        b[i] = 'X';
        a = a - 10;
        i++; 
    }
    while((a - 9) >= 0){
        b[i] = 'IX';
        a = a - 9;
        i++; 
    }
    while((a - 5) >= 0){
        b[i] = 'V';
        a = a - 5;
        i++; 
    }
    while((a - 4) >= 0){
        b[i] = 'IV';
        a = a - 4;
        i++; 
    }
    while((a - 1) >= 0){
        b[i] = 'I';
        a = a - 1;
        i++; 
    }
    let c = b.join('');
    document.getElementById("output").innerHTML = c;
} else { 
     alert('adjon meg egy valos számot!')
    }
}
   
   



