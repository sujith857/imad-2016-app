var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles ={
    
article-one :{
    title:'Article One',
    heading:'Articleone',
    date:'19 sept 2016',
    content:`<p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>
                <p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>
                <p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>`
                },
article-two :{
    title:'Article Two',
    heading:'Articletwo',
    date:'20 sept 2016',
    content:`<p>This is my second paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>
                <p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>
                <p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>`
                },
article-three :{
    title:'Article Three',
    heading:'Articlethree',
    date:'21 sept 2016',
    content:`<p>This is my third paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>
                <p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>
                <p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>`
                },
        
};    
                
                

function createTemplate(data) {
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmltemplate=`
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        
        <link href="/ui/style.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="container">
        <div>
        <a href="/">Home</a>
        </div>
        <hr/>
        
        
        <h3>${heading}</h3>
        
        <div>
        ${date}
        </div>
                <div>
                ${content}
                </div>
    </div>
    </body>
</html>`;
return htmltemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/:articleName', function (req, res) {
  var  articleName=res.params.articleName;
  res.send(createTemplate(articles[articleName]));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
