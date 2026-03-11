Short Response Questions
========================

Answer each question below in your own words. Aim for 3–5 sentences per answer. Be specific — use the exact terms and concepts from the lesson.

Your responses will be evaluated out of 6 points. You can earn 3 points for writing quality and 3 points for the accuracy and precision of the technical content.

* * *

Question 1: Server Basics
-------------------------

What does it mean for a server to be "listening"? In your answer, explain the roles of **host**, **port**, and **localhost**.

**Your answer here**:

When a server is **listening** it is actively waiting to receive `http` requests. The host is a machine's network address, while a port is the identification number of a process or application. `localhost` is your computer's hostname.

* * *

Question 2: req and res
-----------------------

In the callback passed to `http.createServer((req, res) => { ... })`, what are `req` and `res`? Give at least one example of a property or method from each, and explain what it does.

**Your answer here**:

In the callback, `req` and `res` are the request and response objects.

The request object has:

*   `req.method` - request HTTP method
    
*   `req.url` - URL path
    
*   `req.headers` - request header object
    

The response object has:

*   `res.writeHead(statusCode, headers)` - sets status code and response headers
    
*   `res.end(body)` - sends the response body (string) and ends the connection
    

* * *

Question 3: Routing
-------------------

What is **routing** in the context of a server, and how do you implement it using `node:http`? Why is it important to use `return` after calling `res.end()`?

**Your answer here**:

In the context of a server, **routing** is how a server responds to each request based on the endpoint. You implement it in `node:http` by chaining `if/else` statements to match each url and method combination. It is important to use `return` after calling `res.end()` so the function stops executing.