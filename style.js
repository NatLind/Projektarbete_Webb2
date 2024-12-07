$(document).ready(function () {
    let timer; // Variabel för att lagra setInterval
    let seconds = 0; // Tid i sekunder

    // Starta timern
    $('#startBtn').click(function () {
        clearInterval(timer); // Säkerställ att inga gamla timers körs
        timer = setInterval(function () {
            seconds++;
            $('#timer').text(seconds);
        }, 1000); // Uppdatera varje sekund
    });

    // Stoppa timern
    $('#stopBtn').click(function () {
        clearInterval(timer);
    });

    // Återställ timern
    $('#resetBtn').click(function () {
        clearInterval(timer);
        seconds = 0;
        $('#timer').text(seconds);
    });
});
