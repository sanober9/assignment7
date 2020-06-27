function getNumber(num){
   
    var result = document.getElementById("result");
    result.value +=num;
}
function clearResult(){
    var result = document.getElementById("result");
    result.value =" ";
}
function getResult(){
    var result = document.getElementById("result");
    result.value =eval(result.value)
    
}
function exponent(val) {
    var result = document.getElementById("result");
       val = result.value;
      val = Math.exp(val);
       result.value = val;
}
function factorial(fac) {
    var result = document.getElementById("result");
    fac = result.value;
      var res = 1;
     for (var i = 0; i < fac; i++) {
        res = res * (fac - i);
       }
       result.value = res;
    }
    
    function cos(cosine) {
    cosine = result.value;
    cosine = Math.cos(cosine * Math.PI / 180);
   result.value = cosine;

}

function sin(sine) {
    sine = result.value;
    sine = Math.sin(sine * Math.PI / 180);
   result.value = sine;
}

function tan(tang) {
    tang = result.value;
    tang = Math.tan(tang * Math.PI / 180);
   result.value = tang;
}
function square(squ) {
    squ = result.value;
    squ = Math.sqrt(squ);
    result.value = squ;
}
 function log(LOG) {
    LOG =  result.value;
    if (LOG != "") {
        LOG = Math.log10(LOG);
        result.value = LOG;
    }
}
function backspace() {
    var result = document.getElementById("result");
    var nums = result.value;
    var len = nums.length - 1;
    var newNumber = nums.substring(0, len);
    result.value = newNumber;
}




