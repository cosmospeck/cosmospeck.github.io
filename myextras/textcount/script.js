jQuery(document).ready(function() {
    jQuery('textarea').keyup(updateCount);
    jQuery('textarea').keydown(updateCount);
});

function updateCount() {
    var value = jQuery('textarea').val();
    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    var totalChars = value.length;
    var charCount = value.trim().length;
    var charCountNoSpace = value.replace(regex, '').length;
    if (value == "") {
        wordCount = 0;
    }
    jQuery('#characters').text(totalChars);
    jQuery('#characters_trim').text(charCount);
    jQuery('#characters_nospace').text(charCountNoSpace);
    jQuery('#words').text(wordCount);
}