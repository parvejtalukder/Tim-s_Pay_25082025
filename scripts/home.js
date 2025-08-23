// console.log("This is for Home");
document.getElementById("addMoneyBtn").addEventListener("click", function(event){
    event.preventDefault();
    console.log("Add Money Button Clicked!");
    const ac = ["01716884927", "01540307370"];
    const pin = [2468, 8642];
    const acpinMathed = 0;
    const bankNameUSER = document.getElementById("bankName").value;
    const bankAcUSR = parseInt(document.getElementById("bankACNum").value);
    const amountToAddUSR = parseInt(document.getElementById("amountToAdd").value);
    const pinToAddUSR = parseInt(document.getElementById("pinToAdd").value);
    let balanceCurrent = parseInt(document.getElementById("balanceToUse").innerText);
    for(let i = 0; i < ac.length; i++) {
        if (parseInt(ac[i]) === bankAcUSR && pin[i] === pinToAddUSR) {
            balanceCurrent += amountToAddUSR;
            document.getElementById("balanceToUse").innerText = balanceCurrent;
            alert(amountToAddUSR + " Added!");
            acpinMathed++;
        } 
    }
    if (acpinMathed === 0) {
        console.log("Wrong Information!");
        alert("Wrong Information!");
    }
})