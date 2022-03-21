function scelta(){
    var scelta_x = 0
    let x = document.getElementById("scelta").value
    
    if (x == "facile"){
        scelta_x = 49}
    else if (x == "difficile"){
        scelta_x = 81}
    else {scelta_x = 100}

    return scelta_x;
}

var scelta_x = scelta()
console.log(scelta_x)

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}