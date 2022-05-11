function checkPassword(){
    var pass = document.getElementsByName("password");
    var passConfirm = document.getElementsByName("confirmPassword");
    var misMatch = document.getElementById("passMisMatch");
    
    if(pass[0].value === passConfirm[0].value){
        console.log("Passwords match!");
        misMatch.innerHTML = "";
    }else{
        console.log("Not the same!");
        misMatch.innerHTML = "*Passwords do not match!";
    }
    console.log(pass, passConfirm);
    console.log(pass[0].value, passConfirm[0].value);



}
