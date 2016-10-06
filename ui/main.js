
var button=document.getElementById('counter');

button.onclick = function()
    {
        var request=new XMLHttpRequest();//create a request 
        request.onreadystatechange=function()
        {
            if(request.readystatechange==200)
            {
                var counter=request.responseText;
                 var span =document.getElementById('count');
                  span.innerHTML=counter.toString();
            
            }
        };
       
        
    };
