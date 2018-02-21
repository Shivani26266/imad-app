console.log('Loaded!');
//counter
var button = document.getElementById('counter');
button.onclick = function(){
    var request = new XMLHttpRequest();
    //capture the response and store into an variable.
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementByID('count');
                span.innerHTML = counter.toString();
            }
        }
        
    };
    request.open('GET', 'http://shivanidwivedi26266.imad.hasura-app.io/counter',true);
    request.send(null);
};