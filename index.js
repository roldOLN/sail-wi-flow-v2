let origin = "";
let destination = "";
let passengers = 0;

function checkInputs() {
    if (origin && destination && passengers) {
        doSomething();
    }
}

function doSomething(){
    
    if (destination === "Lawton" || destination === "Escolta"){
        $("#arrival-time-value").text("cancelled");
        $("#departure-time-value").text("cancelled");
    }

    else{

        switch (origin) {

        case "Pinagbuhatan":
            $("#arrival-time-value").text("7:00 AM");
            $("#departure-time-value").text("7:00 AM");
            break;

        case "Kalawaan":
            $("#arrival-time-value").text("7:10 AM");
            $("#departure-time-value").text("7:10 AM");
            break;

        case "San Joaquin":
            $("#arrival-time-value").text("7:15 AM");
            $("#departure-time-value").text("7:15 AM");
            break;

        case "Guadalupe":
            $("#arrival-time-value").text("7:30 AM");
            $("#departure-time-value").text("7:30 AM");
            break;

        case "Hulo":
            $("#arrival-time-value").text("7:35 AM");
            $("#departure-time-value").text("7:35 AM");
            break;

        case "Valenzuela":
            $("#arrival-time-value").text("7:40 AM");
            $("#departure-time-value").text("7:40 AM");
            break;

        case "Lambingan":
            $("#arrival-time-value").text("7:50 AM");
            $("#departure-time-value").text("7:50 AM");
            break;

        case "Sta. Ana":
            $("#arrival-time-value").text("7:55 AM");
            $("#departure-time-value").text("7:55 AM");
            break;

        case "PUP":
            $("#arrival-time-value").text("8:07 AM");
            $("#departure-time-value").text("8:07 AM");
            break;

        case "Quinta":
            $("#arrival-time-value").text("8:20 AM");
            $("#departure-time-value").text("8:20 AM");
            break;

        case "Lawton":
            $("#arrival-time-value").text("8:22 AM");
            $("#departure-time-value").text("8:22 AM");
            break;

        case "Escolta":
            $("#arrival-time-value").text("8:27 AM");
            $("#departure-time-value").text("8:27 AM");
            break;

        default:
            $("#arrival-time-value").text("-");
            $("#departure-time-value").text("-");
        }
    }

    var randomSeats = Math.floor(Math.random() * 15);
    $("#available-seats-value").text(randomSeats);
}

$("#origin-select").on("change", function () {
    origin = $("#origin-select option:selected").text();
    checkInputs();
});

$("#destination-select").on("change", function () {
    destination = $("#destination-select option:selected").text();
    checkInputs();
});

$("input").on("change", function () {
    passengers = Number($(this).val());
    checkInputs();
});

