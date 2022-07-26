
# Node.js Crash Course Tutorial

This read me will be used to take 'notes'on the videos i am 
watching on https://www.youtube.com/c/TheNetNinja




## Lessons Learned

### Video #3 - Clients & servers:
This video taught me how to create a server in 
node using ports and localhost and ports was explained in a 
simple but detailed way where he explains that localhost is used on the local/your pc and
the port is a sort of 'doorway' to your computer.

### Video #4 - Requests & Responses:
#### Response & Request Objects
The Request Object was simple enough however the Response Object was
much more in-depth and has alot more to it and this object actually handles
all the responses made to a server.
We then learnt how to use response objects to return html pages to a page
instead of lines of text.

When we return a html page instead of using(this canbe used when we write
multiple lines but with this example the other one is better):

    res.write(data);
    res.end();

  we can just do:

    res.end(data);

#### Routing to HTML Page   
For the fourth segment Net Ninja is showing how to return different pages
according to different urls and if it doesnt exist, an appropriate 404 page,
because before if you type in any url path it still returned the one page
that was made:

        let path = './views/';
        switch (req.url) {
                case '/':
                   path +=  'index.html'     
                break;
                case '/about':
                   path +=  'about.html'     
                break;        
                default:
                   path += '404.html'     
                break;
        }
        fs.readFile(path, (err, data)=>{.......}

This switch case is the backbone for the different pages selected
the cases argument is the url of the server and the path in it is the
html file that it is pointing to read the file. The default is used
when a url is typed in and there is no file for that url so it takes you
to a 404 not found page.    

#### Status Codes
For the fifth segment, I was taught the different status codes that
is used for serves where the common ones are: 

        200 - OK
        301 - Resource Moved
        404 - Not found
        500 - Internal server error

These are the common ones but they all fall under a range which depending 
on the range of the code it has a different meaning:

        100 Range - Informational Responses
        200 Range - Success Codes
        300 Range - Codes for Redirects
        400 Range - User/Client Error Codes
        500 Range - Server Error Codes         

This is used mainly for backend developers to see the status of the server
they are working with.

        100 Continue
        101 Switching Protocols
        103 Early Hints
        200 OK
        201 Created
        202 Accepted
        203 Non-Authoritative Information
        204 No Content
        205 Reset Content
        206 Partial Content
        300 Multiple Choices
        301 Moved Permanently
        302 Found
        303 See Other
        304 Not Modified
        307 Temporary Redirect
        308 Permanent Redirect
        400 Bad Request
        401 Unauthorized
        402 Payment Required
        403 Forbidden
        404 Not Found
        405 Method Not Allowed
        406 Not Acceptable
        407 Proxy Authentication Required
        408 Request Timeout
        409 Conflict
        410 Gone
        411 Length Required
        412 Precondition Failed
        413 Payload Too Large
        414 URI Too Long
        415 Unsupported Media Type
        416 Range Not Satisfiable
        417 Expectation Failed
        418 I'm a teapot
        422 Unprocessable Entity
        425 Too Early
        426 Upgrade Required
        428 Precondition Required
        429 Too Many Requests
        431 Request Header Fields Too Large
        451 Unavailable For Legal Reasons
        500 Internal Server Error
        501 Not Implemented
        502 Bad Gateway
        503 Service Unavailable
        504 Gateway Timeout
        505 HTTP Version Not Supported
        506 Variant Also Negotiates
        507 Insufficient Storage
        508 Loop Detected
        510 Not Extended
        511 Network Authentication Required

#### Redirects
The last segment is about Redirects.This is used for when you changed a
url however other will then your old url if they saved it so redirects
are used to redirect the user to the desired page, so something like this:

        case '/about-me':
           res.statusCode = 301; 
           res.setHeader('Location','/about');
           res.end();    
        break;      

Another case is used and the above will be added to add an redirect.

https://github.com/MuddathirDawood/servers-Ninja-
Commit 1

### Video #5 - NPM:
This is just an overview of what NPM is and how to use it and a few
packages that will be helpful later on for Node.JS

    npm install nodemon

Nodemon allows for hot-reloading when the files saves    

### Video #6 - Express Apps:
#### Creating the app
Express is used to make node server coding much easier and quicker
so that it makes it easier for you make servers and have organised
code.

    npm install express

To start using express you first need to require it and then call the
function:

    const express = require('express');
    const app = express();

#### Routing & HTML Pages
Afterwards you can replace the case, listen, setHeader,etc with:

    app.listen(3000);

    app.get('/', (req, res)=>{
        res.send('<p>Hello</p>')
    })

This will make the app listen for requests and then if the url '/' is
typed then display 'Hello' and this will return a status code, which
will be 200, and there is no need to set a header.

For retrieving a file from your folder is a bit different, we need to do
this: 

    app.get('/', (req, res)=>{
        res.sendFile('./views/index.html', { root: __dirname })
    })

When we retrieve a file we use sendFile and it requires two arguments
the first being the path to it and the second being the root folder
because the first argument can only read a relative directory so
adding the __dirname add the root file directory then the first argument
to work properly.

#### Redirects & 404's
Redirecting is simple:

    app.get('/about-us',(req, res)=>{
        res.redirect('/about')
    })

To return a 404 error we have to use the app.use:

    app.use((req, res)=>{
        res.status(404).sendFile('./views/404.html', { root: __dirname })
    })

The 'use' method is a bit complex because this method will run everytime
a request is given but to use it properly this piece of code goes at the
bottom of all your code because node runs from top to bottom and
if the url does not match any of the app.get then at the bottom the
app.use will run which is the 404 page that will show. The status(404)
is added on the line because when the use method runs it does not return
a 404 error code so we have to code that ourself

https://github.com/MuddathirDawood/servers-Ninja- Commit 2
