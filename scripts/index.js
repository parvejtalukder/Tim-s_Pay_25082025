// console.log('This is a console');
document.getElementById("loginBtn").addEventListener("click", function(event){
    event.preventDefault();
    const mobileNumber = '01716884927'; 
    const pinNumber = 2468;
    const userinpMobile = document.getElementById("mobileNum").value; // The Mobile Number Stored in String So, I did not casted the type of the Mobile Number
    const userinpPin = document.getElementById("pinNum").value;
    const Pin = parseInt(userinpPin);
    // console.log(userinpMobile, Pin);
    if (parseInt(mobileNumber) === parseInt(userinpMobile) && Pin === pinNumber) {
        console.log("Mobile and Pin Number Are Ok");
        window.location.href="./pages/home.html";    
    } else {
        console.log("Wrong Mobile or Pin");
        alert("Wrong Mobile and Pin");
    }
});