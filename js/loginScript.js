var userList = [];

function submitForm()
{
    //pass the Input variables
    var userName = document.querySelector("#user_name").value;
    var userPassword = document.querySelector("#user_password").value;

    addToList(userName,userPassword);
}

function addToList(userName,userPassword){
//Store the values into the array

    const item = {
        i_username: userName,
        i_password: userPassword

    };

    userList.push(item);
    listLoginForm();

}
function listLoginForm(){

        console.log("Total User: " + userList.length);
        console.log(userList);

}