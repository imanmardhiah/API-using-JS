const posts = [
    {title:'Post one ',body:'This is post one'},
    {title:'Post two ',body:'This is post two'}
];
/*
//add new post into the array
function createPost(){
    setTimeout(function(){
        posts.push(post);
    },3000); // it will take 3 sec to create new post
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000); // it will take 1 sec to read post
}

createPost({title:'Post three ',body:'This is post three'});
getPosts(); //it will not be able to display the third post since it reads before the post is created 1sec vs 3 sec
*/

function createPost(post,callback){
    setTimeout(function(){
        posts.push(post);
        callback();
    },3000);
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000); // it will take 1 sec to read post
}

createPost({title:'Post three ',body:'This is post three'},getPosts); 
// getPosts - no need to add the parentheses because it will already be called by the function createPost earlier


