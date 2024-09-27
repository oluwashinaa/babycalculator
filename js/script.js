
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function multi(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function mode(num1, num2) {
    return num1 % num2;
}
function clear() {
    $(".num1").val("");
    $(".num2").val("");
    $("#result").val("");
}

$(document).ready(function () {
    $("#add").click(function () {
        let numA1 = parseInt($(".num1").val());
        let numA2 = parseInt($(".num2").val());
        let result = add(numA1, numA2);
        $("#result").val(result);

    });

    $("#sub").click(function () {
        let numA1 = parseInt($(".num1").val());
        let numA2 = parseInt($(".num2").val());
        let result = sub(numA1, numA2);
        $("#result").val(result);
    });

    $("#multi").click(function () {
        let numA1 = parseInt($(".num1").val());
        let numA2 = parseInt($(".num2").val());
        let result = multi(numA1, numA2);
        $("#result").val(result);
    });

    $("#div").click(function () {
        let numA1 = parseInt($(".num1").val());
        let numA2 = parseInt($(".num2").val());
        let result = div(numA1, numA2);
        $("#result").val(result);
    });

    $("#mode").click(function () {
        let numA1 = parseInt($(".num1").val());
        let numA2 = parseInt($(".num2").val());
        let result = mode(numA1, numA2);
        $("#result").val(result);
    });

    $("#clear").click(function () {
        clear();
    });


});