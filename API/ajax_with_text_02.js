//select the element and add event listener
document.getElementById('btn').addEventListener('click',loadData);

function loadData(){
    //create the xhr object
    const xhr = new XMLHttpRequest();

    //use the open method (type of request we will pass, url (where to get the data from), boolean : async(true))
    xhr.open('Get','data_02.txt',true);

    //load response - part where we have to learn to manipulate
    xhr.onload = function(){
        //console.log(xhr.readyState);
        //console.log(this.responseText);

        if(this.status === 200){
            document.getElementById('output').innerHTML=
            `<h1>${this.responseText}</h1>`
        }
        
    }

    //send request
    xhr.send();
}

// Ready state value :
// 0 : request not initialized
// 1 : server connection established
// 2 : request received
// 3 : processing the response 
// 4 : request finished and response is ready

// HTTP Status :
// 200 : it is okay
// 403 : forbidden
// 404 : not found

