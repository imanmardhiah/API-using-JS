// Json - Javascript Object Notation
// Structured Format for representing data 
// So all the computer can understand it
// Json is a way of communicating data
// Json is using key value pairs
// Json can work with other languages as well
// When API sends a response, it will send in the form of Json and we can convert it to liking of our system

document.getElementById('btn1').addEventListener('click',loadUser);
document.getElementById('btn2').addEventListener('click',loadUsers);

function loadUser(){
    //create xhr object
    const xhr = new XMLHttpRequest();

    //open method
    xhr.open('Get','user_03.json',true);

    //onload
    xhr.onload = function(){
        if(this.status === 200){
            //console.log(this.responseText); //always write this to check it first
            //using parse - convert the json obj to js object | stringify - convert js object to json object
            const user = JSON.parse(this.responseText);
            //console.log(user);

            const output =
            `<ul>
            <li>Id : ${user.id}</li>
            <li>Name : ${user.name}</li>
            <li>Age : ${user.age}</li>
            </ul>`;

            document.getElementById('user').innerHTML = output;

        }
    }

    xhr.send();
}

//ARRAY
function loadUsers(){
    //create xhr object
    const xhr = new XMLHttpRequest();

    //open method
    xhr.open('Get','users_03.json',true);

    //onload
    xhr.onload = function(){
        if(this.status === 200){
            //console.log(this.responseText);
            //convert to js object
            const users = JSON.parse(this.responseText);
            //console.log(users);

            let output = '';
            //use forEach method to loop thru an array
            users.forEach(function(user){
                output += `<ul>
                <li>Id : ${user.id}</li>
                <li>Name : ${user.name}</li>
                <li>Age : ${user.age}</li>
                </ul>`;
            })

            document.getElementById('users').innerHTML = output;
        }
    }

    xhr.send();
}
