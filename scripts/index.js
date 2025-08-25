// FUNCTIONS
function getVal(id) {
    const value = document.getElementById(id).value;
    return value;
}
function ifError() {
    console.log("Wrong Information!");
    alert("Wrong Information!");
}
function logIn (id) {
    document.getElementById(id).addEventListener("click", function(event){
        if (getVal(mobileNum) === mobileNumber && parseInt(getVal(pinNum)) === pinNumber) {
            console.log("All are Ok!");
            window.location.href = "./pages/home.html";
        } else {
            ifError();
        }
    })
}

// FUNCTION CALLING
const mobileNumber = '01716884927'; 
const pinNumber = 2468;
const loginBtn = 'loginBtn'; 
const mobileNum = 'mobileNum';
const pinNum = 'pinNum';
logIn(loginBtn);