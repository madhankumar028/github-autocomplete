(function() {

    'use strict';

    var input = document.getElementById('search'),
        users = [];        

    input.addEventListener('keyup', function(event) {

        var code = event.keyCode,
            suggestion = document.getElementById('suggestion'),
            value;
        
        if (code == 13) // if Enter key is pressed
            return;

        value = input.value;

        // compare input with users Array
        users.forEach(function(item) {
            // TODO regex pattern to evaluate the user input
        });
    });

    function init() {
        
        const url = 'https://api.github.com/users';
        
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            
            if (xhr.readyState == XMLHttpRequest.DONE) {
                var res = JSON.parse(xhr.responseText);
                res.forEach(function(user) {
                    users.push(user.login);
                });
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
    }

    init();    
}());
