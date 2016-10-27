var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles ={
    
'article-one' :{
    title:'Article One',
    heading:'Articleone',
    date:'19 sept 2016',
    content:`<p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>
                <p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>
                <p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>`
                
        
             <textarea name='comment' id='comment1'></textarea><br />
              <input type="submit" id="comment_btn1" value="Submit" class="btn btn-warning"></input>
              <hr>
              <p>Comments :</p><br>
              <div id="comments1"></div>
              
                },
'article-two' :{
    title:'Article Two',
    heading:'Articletwo',
    date:'20 sept 2016',
    content:`<p>This is my second paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>
                <p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>
                <p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>`
                /*
        <label>Enter comments below</label></br>
             <textarea name='comment' id='comment1'></textarea><br />
              <input type="submit" id="comment_btn1" value="Submit" class="btn btn-warning"></input>
              <hr>
              <p>Comments :</p><br>
              <div id="comments1"></div>
              */
                },
'article-three' :{
    title:'Article Three',
    heading:'Articlethree',
    date:'21 sept 2016',
    content:`<p>This is my third paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>
                <p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>
                <p>This is my first paragaraph of article one This is my first paragaraph of article one This is my first paragaraph of article one 
                This is my first paragaraph of article oneThis is my first paragaraph of article one</p>`
                /*
        <label>Enter comments below</label></br>
             <textarea name='comment' id='comment1'></textarea><br />
              <input type="submit" id="comment_btn1" value="Submit" class="btn btn-warning"></input>
              <hr>
              <p>Comments :</p><br>
              <div id="comments1"></div>
              */
                }
        
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

var comments=[];
app.get('/submit_comment',function(req,res){
    //to get the comments
 var comment=req.query.comment;
 comments.push(comment);
 console.log('comments is: ',comments);
 res.send(JSON.stringify(comments));

    //to render those comments on the page
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
 });

app.get('/ui/article.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article.js'));
 });

var counter=0;
app.get('/counter', function(req,res){
    counter = counter+1;
    //we can only send a string as a response
    //and that's why we convert  it to string using toString()
    res.send(counter.toString());
});

var names=[];
app.get('/submit-name',function(req,res){
    //get the name from request object
    


    //this is for the ?name=something part
    //express gets that part by using req.query.name
    var name=req.query.name;
    console.log('name is: ',name);
  //we could use req.params.name if the url was /submit-name/:name

    names.push(name);
    console.log('names is: ',names);
    res.send(JSON.stringify(names));
});

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
  var  articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
