var calcNums = document.querySelectorAll('.numbtn div');
for (var i = 0; i < calcNums.length; i++) {
    calcNums[i].addEventListener("click", function(p) { pushToOutput(p.currentTarget.innerText); });
}

var calcOps = document.querySelectorAll('.opsbtns div');
for (var i = 0; i < calcOps.length; i++) {
    calcOps[i].addEventListener("click", function(p) { pushToOutput(p.currentTarget.title); });
}

document.getElementById('equals').addEventListener("click", function() { calculate(); });
document.getElementById('reset').addEventListener("click", function() { reset(); });

function pushToOutput(value) {
    document.getElementById("output").innerText += value;
}
function expr (expr) {

    var chars = expr.split("");
    var n = [], op = [], index = 0, oplast = true;

    n[index] = "";

    // Parse the expression
    for (var c = 0; c < chars.length; c++) {

        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }
    // Calculate the expression
    expr = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                expr = expr + num;
                break;
            case "-":
                expr = expr - num;
                break;
            case "*":
                expr = expr * num;
                break;
            case "/":
                expr = expr / num;
                break;
        }
    }
    return expr;
}

function calculate() {
    var output = document.getElementById("output");
    output.innerText = expr(output.innerText);
}

function reset() {
    document.getElementById("output").innerText = "";
}

