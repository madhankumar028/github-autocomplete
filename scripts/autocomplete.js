(function() {

    var users = [],
        input = document.getElementById('search'),
        xhr = new XMLHttpRequest(),
        url = 'https://api.github.com/users';

    input.addEventListener('keyup', function(event) {

        var code = event.keyCode,
            suggestion = document.getElementById('suggestion');
        
        if (code == 13)
            return;        
    });

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            users.push(xhr.responseText);
            console.log(users);            
        }
    }
    xhr.open('GET', url, true);
    xhr.send();

}());
