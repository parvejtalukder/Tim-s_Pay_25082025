// ACCOUNT INFO
const ACCOUNT_NAME = "Md Parvej Husen Talukder";
const ACCOUNT_NO = parseInt("01716884927");
const ACCOUNT_PIN = 2468;
// BALANCE 
let balanceCurrent = parseInt(document.getElementById("balanceToUse").innerText);
// AGENT LIST
// COUPON
const ACCOUNT_COUPON = "X1Y2Z3";
// HOME FUNC
function goHome() {
    document.getElementById("addMoney-Window").style.display = "none";
    document.getElementById("cashOut-Window").style.display = "none";
    document.getElementById("transferMoney-Window").style.display = "none";
    document.getElementById("payBill-Window").style.display = "none";
    document.getElementById("getBonus-Window").style.display = "none";
    document.getElementById("transactions-Window").style.display = "none";
}
goHome();
// console.log("This is for Home")
document.getElementById("loginBtn").addEventListener("click", function(event){
    window.location.href = "../index.html";
})
// togoling
// Home 
document.getElementById("homeLogo").addEventListener("click", function(event){
    goHome();
})
// Add Money 
document.getElementById("addMoney-Btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("addMoney-Window").style.display = "block";
    document.getElementById("cashOut-Window").style.display = "none";
    document.getElementById("transferMoney-Window").style.display = "none";
    document.getElementById("payBill-Window").style.display = "none";
    document.getElementById("getBonus-Window").style.display = "none";
    document.getElementById("transactions-Window").style.display = "none";
})
// Cash Out 
document.getElementById("cashOut-Btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("addMoney-Window").style.display = "none";
    document.getElementById("cashOut-Window").style.display = "block";
    document.getElementById("transferMoney-Window").style.display = "none";
    document.getElementById("payBill-Window").style.display = "none";
    document.getElementById("getBonus-Window").style.display = "none";
    document.getElementById("transactions-Window").style.display = "none";
})
// Transfer Money 
document.getElementById("transferMoney-Btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("addMoney-Window").style.display = "none";
    document.getElementById("cashOut-Window").style.display = "none";
    document.getElementById("transferMoney-Window").style.display = "block";
    document.getElementById("payBill-Window").style.display = "none";
    document.getElementById("getBonus-Window").style.display = "none";
    document.getElementById("transactions-Window").style.display = "none";
})
document.getElementById("getBonus-Btn").addEventListener("click", function(event){
    event.preventDefault();
    document.getElementById("addMoney-Window").style.display = "none";
    document.getElementById("cashOut-Window").style.display = "none";
    document.getElementById("transferMoney-Window").style.display = "none";
    document.getElementById("payBill-Window").style.display = "none";
    document.getElementById("getBonus-Window").style.display = "block";
    document.getElementById("transactions-Window").style.display = "none";
})
// AC Handlilng 
// Add Money Handling
document.getElementById("addMoneyBtn").addEventListener("click", function(event){
    event.preventDefault();
    console.log("Add Money Button Clicked!");
    this.classList.add("border-[#141414CC]");
    const ac = ["01716884927", "01540307370"];
    const pin = [2468, 8642];
    let acpinMathed = 0;
    const bankNameUSER = document.getElementById("bankName").value;
    const bankAcUSR = parseInt(document.getElementById("bankACNum").value);
    const amountToAddUSR = parseInt(document.getElementById("amountToAdd").value);
    const pinToAddUSR = parseInt(document.getElementById("pinToAdd").value);
    for(let i = 0; i < ac.length; i++) {
        if (parseInt(ac[i]) === bankAcUSR && pin[i] === pinToAddUSR) {
            balanceCurrent += amountToAddUSR;
            document.getElementById("balanceToUse").innerText = balanceCurrent;
            alert(amountToAddUSR + " BDT Added!");
            acpinMathed++;
        } 
    }
    if (acpinMathed === 0) {
        console.log("Wrong Information!");
        alert("Wrong Information!");
    } else {
        // goHome();
    } 
})
// Cash Out Handling
document.getElementById("cashOutBtn").addEventListener("click", function(event){
    const agentNumber = document.getElementById("agentNumber").value;
    const amountToOut = parseInt(document.getElementById("amountToOut").value);
    const pinToOut = parseInt(document.getElementById("pinToOut").value);
    console.log(pinToOut);
    if (pinToOut === ACCOUNT_PIN && agentNumber.toString().length === 11) {
        if (amountToOut > balanceCurrent) {
            alert("Insufficient balance!");
        } else {
        balanceCurrent = balanceCurrent - amountToOut;
        document.getElementById("balanceToUse").innerText = balanceCurrent;
        alert(amountToOut + " BDT Cash Out Done!");
        }
    } else {
        alert("Wrong Information!");
    }
})
// TranferMoney
document.getElementById("transferMoneyBtn").addEventListener("click", function(event){
    const userNumber = document.getElementById("userNumber").value;
    const amountTransfer = parseInt(document.getElementById("amountTransfer").value);
    const pinToTransfer = parseInt(document.getElementById("pinToTransfer").value);
        if (userNumber.toString().length === 11 && pinToTransfer === ACCOUNT_PIN) {
        if (amountTransfer > balanceCurrent) {
            alert("Insufficient balance!");
        } else {
            balanceCurrent = balanceCurrent - amountTransfer;
            document.getElementById("balanceToUse").innerText = balanceCurrent;
            alert(amountTransfer + " BDT Transferred!");
        }
    } else {
        alert("Wrong Information!");
    }
}) 
// GetBonus
document.getElementById("getBonusBtn").addEventListener("click", function(event){
    const coupon = document.getElementById("bonusCoupon").value;
    console.log(coupon);
    if (coupon === ACCOUNT_COUPON) {
        balanceCurrent = balanceCurrent + 100;
        document.getElementById("balanceToUse").innerText = balanceCurrent;
        alert(coupon + "BDT Bonus Added!");
    } else {
        alert("Invalid Coupon!");
    }
}) 