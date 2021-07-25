// alert("d")

var n1 = document.getElementById("num1");
var o = document.getElementById("o");
var minus = document.getElementById("minus");
var qisma = document.getElementById("qisma");
var plus = document.getElementById("plus");
var dharb = document.getElementById("dharb");
var n2 = document.getElementById("num2");
var printSubmit = document.getElementById("printSubmit");
var submit = document.getElementById("submit");

function all() {

    dharb.onclick = function() {
        o.innerHTML = "ضرب";
        submit.onclick = function() {

            printSubmit.innerHTML = parseInt(n1.value) * parseInt(n2.value);

        };
    }
    qisma.onclick = function() {
        o.innerHTML = "قسمة";
        submit.onclick = function() {

            printSubmit.innerHTML = parseInt(n1.value) / parseInt(n2.value);

        };
    }
    minus.onclick = function() {
        o.innerHTML = "طرح";
        submit.onclick = function() {
            printSubmit.innerHTML = parseInt(n1.value) - parseInt(n2.value);
        }

    };
    plus.onclick = function() {
        o.innerHTML = "جمع";
        submit.onclick = function() {

            printSubmit.innerHTML = parseInt(n1.value) + parseInt(n2.value);

        };
    }
}

all();