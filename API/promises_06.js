//promises
//they are a part of ES6 and alternative to callbacks
//callbacks are more straightforward
//alternative way to handle async operation
//they can promise to do something when their operation is finished
// and we handle the promise response by using .then()

const posts = [
    {title:'Post one ',body:'This is post one'},
    {title:'Post two ',body:'This is post two'}
];

function createPost(post){
    return new Promise(function(resolve,reject){ //promise receive 2 parameter : resolve, reject
        setTimeout(function(){
            posts.push(post);

            const error = false ; //to check ur code
            if(!error){
                resolve();
            }else{
                reject('Something went wrong');
            }

        },2000)//create post in 2 sec
    })
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

createPost({title:'Post three ',body:'This is post three'})
.then(getPosts).catch(function(err){
    console.log(err)
}) //dont add ; because it is gonna return us a promise