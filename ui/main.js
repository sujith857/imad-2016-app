
var button=document.getElementById('counter');

button.onclick = function(){
    
var request=new XMLHttpRequest();//create a request 
        request.onreadystatechange=function()
        {
            if(request.readystate===XMLRequest.DONE)
            {
                if(request.status===200)
                {
                var counter=request.responseText;
                 var span =document.getElementById('count');
                  span.innerHTML=counter.toString();
            
            }
        }
       request.open('GET','http://sujith857.imad.hasura-app.io/counter',true);
       request.response(null);
        
    };
};
