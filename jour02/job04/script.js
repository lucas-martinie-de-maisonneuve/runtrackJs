document.addEventListener('keydown', function(event) {
    var textarea = document.getElementById('keylogger');
    
    if (document.activeElement === textarea) {
        event.preventDefault();
    }

    if (event.key.match(/^[a-z]$/i)) {
        if (document.activeElement === textarea) {
            textarea.value += event.key + event.key;
        } 
        else {
            textarea.value += event.key;
        }
    }
});
