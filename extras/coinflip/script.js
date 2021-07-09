$(document).ready(function() {
    function randomFrom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    $('.card').click(function() {
        var flipit = randomFrom(['flipped', 'flippedit']);
        $('.card').toggleClass(flipit);
    });
});