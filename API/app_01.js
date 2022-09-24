//API : Application Programming Interface

//A contract provided by one software to another software
//It usually consist of a structured request and a structured response

//It is a set of functions and procedures that provide access to the data
//of an operating system, application and others

//Synchronous - time consuming
//it goes thru the statement 1 by 1
let posts = loadPostSync();
//wait till the post fetch
//do something with the post
//do the next thing

//Asynchronous call
// use call back function : 
// when we pass one function as a parameter to another function
loadPostASync(function(){
    //..wait till the post fetch
    //..do something with the post
    //..do the next thing
    //it will only wait if it's required / the statements have dependency between them
})

//most of the async code that we are going to work with
//are part of the libraries

//1) XMLHttpRequest and fetch
//2) call back function
//3) promises
//4) async/await

//AJAX : Asynchronous Javascript and XML
//it is a set of web technologies
//send and receive data async
//does not interfere with the current page loading
//either use json or xml however
//json replaced xml in most cases nowadays
//no page reload and it is very interactive
// XMLHttpRequest : xhr object
