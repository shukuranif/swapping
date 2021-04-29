function firstfun() {
    var x = document.getElementById("number1").value;
    var y = document.getElementById("number2").value;

    document.getElementById("ex1").innerHTML = "Before calling the pass by value function: Number 1 =" + x + " and Number 2 =" + y;

    passbyvalue(x, y);

    document.getElementById("ex2").innerHTML = "\n After calling pass by value function Number 1 =" + x + " , Number 2 =" + y;
}

function secondfun() {
    var reference = {
        a: document.getElementById("number3").value,
        b: document.getElementById("number4").value
    }
    document.getElementById("eg1").innerHTML = "Before calling the pass by reference function Number 3 =" + reference.a + " and Number 4 =" + reference.b;
    passbyreference(reference);
    document.getElementById("eg2").innerHTML = "\nAfter calling pass by reference function Number 3 =" + reference.a + " and Number 4 =" + reference.b;
}

function passbyvalue(x, y) {
    let temp = x;
    x = y;
    y = temp;
    document.getElementById("ex3").innerHTML = "\n Inside the pass by value function Number 1 =" + x + " , Number 2 =" + y;
}

function passbyreference(obj) {
    reference.c = reference.a;
    reference.a = reference.b;
    reference.b = reference.c;
    document.getElementById("eg3").innerHTML = "\n Inside pass by reference function Number 3=" + reference.a + " , Number 4=" + reference.b;
}