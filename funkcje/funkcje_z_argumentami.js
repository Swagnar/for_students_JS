function oblicz_delte(arg1, arg2, arg3) {
    return delta = arg2**2 - (4 * arg1 * arg3);
}
function oblicz_miejsca_zerowe(DELTA, A, B) {
    x1 = (-B - Math.sqrt(DELTA)) / 2 * A;
    x2 = (-B + Math.sqrt(DELTA)) / 2 * A;
    return [x1, x2];
}
function oblicz_miejsce_zerowe(B, A) {
    return x1 = -B / (2*A);
}
function oblicz() {
    var a = document.forms["delta"]["a"].value;
    var b = document.forms["delta"]["b"].value;
    var c = document.forms["delta"]["c"].value;
    var delta = oblicz_delte(a,b,c);
    if(delta > 0) {
        var miejsca_zerowe = oblicz_miejsca_zerowe(delta, a, b);
        document.getElementById("p_delta").innerHTML = "Delta: " + delta;
        document.getElementById("p_x1").innerHTML = "X1: " + miejsca_zerowe[0];
        document.getElementById("p_x2").innerHTML = "X2: " + miejsca_zerowe[1];
    } else if(delta == 0) {
        var miejsce_zerowe = oblicz_miejsce_zerowe(b, a);
        document.getElementById("p_delta").innerHTML = "Delta: " + delta;
        document.getElementById("p_x1").innerHTML = "X1: " + miejsce_zerowe;
        document.getElementById("p_x2").innerHTML = "";
    } else {
        document.getElementById("p_delta").innerHTML = "Delta: " + delta;
        document.getElementById("p_delta").insertAdjacentHTML('afterend', '<u>Delta ujemna, brak miejsc zerowych</u>');
        document.getElementById("p_x1").innerHTML = "";
        document.getElementById("p_x2").innerHTML = "";
    }
    // D = 16  WHEN 1, 2, -3
    // D = 0   WHEN 1, 2, 1
    // D = -23 WHEN 2, 1, 3
}

