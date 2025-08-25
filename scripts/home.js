// ACCOUNT INFORMATION 
const ACCOUNT_NAME = "Md Parvej Husen Talukder";
const ACCOUNT_NO_STR = "01716884927"; 
const ACCOUNT_PIN = 2468;
const ACCOUNT_COUPON = "X1Y2Z3";
// DYNAMIC DATA 
let transactionData = [];
let balanceCurrent = parseInt(document.getElementById("balanceToUse").innerText);
//FUNCTIONS
function getElement(id) {
  return document.getElementById(id); 
}
function getValue(id) {
  return getElement(id).value;
}
function getIntValue(id) {
  return parseInt(getValue(id));  
}
function showAlert(message) {
  alert(message); 
}

// NAV
function goHome() {
  const windowIds = [
    "addMoney-Window",
    "cashOut-Window",
    "transferMoney-Window",
    "payBill-Window",
    "getBonus-Window",
    "transactions-Window",
  ];
  for(const window of windowIds) {
    const element = getElement(window);
    // console.log(element);
    element.style.display = "none";
  }
}

// Togoles
function setupWindowToggles() {
  getElement("homeLogo").addEventListener("click", goHome);

  getElement("addMoney-Btn").addEventListener("click", (event) => {
    event.preventDefault(); 
    goHome();
    getElement("addMoney-Window").style.display = "block";
  });

  getElement("cashOut-Btn").addEventListener("click", (event) => {
    event.preventDefault();
    goHome();
    getElement("cashOut-Window").style.display = "block";
  });

  getElement("transferMoney-Btn").addEventListener("click", (event) => {
    event.preventDefault();
    goHome();
    getElement("transferMoney-Window").style.display = "block";
  });

  getElement("getBonus-Btn").addEventListener("click", (event) => {
    event.preventDefault();
    goHome();
    getElement("getBonus-Window").style.display = "block";
  });

   getElement("payBill-Btn").addEventListener("click", (event) => {
    event.preventDefault();
    goHome();
    getElement("payBill-Window").style.display = "block";
  });
  
  getElement("loginBtn").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "../index.html";
  });

  getElement("transactions-Btn").addEventListener("click", (event) => {
  event.preventDefault();
  goHome();
  getElement("transactions-Window").style.display = "block";
  });
}

// TRANSACTION LOGIC
function handleAddMoney() {
  const BANK_ACCOUNTS = [
    { ac: "01716884927", pin: 2468 },
    { ac: "01540307370", pin: 8642 },
  ];

  getElement("addMoneyBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const bankAcUSR = getValue("bankACNum");
    const amountToAddUSR = getIntValue("amountToAdd");
    const pinToAddUSR = getIntValue("pinToAdd");
    let accountMatched = false;

    for (let account of BANK_ACCOUNTS) {
      if (account.ac === bankAcUSR && account.pin === pinToAddUSR) {
        balanceCurrent += amountToAddUSR;
        getElement("balanceToUse").innerText = balanceCurrent;
        showAlert(`${amountToAddUSR} BDT Added!`);
        aboutTransaction("Add Money", amountToAddUSR);
        accountMatched = true;
        break; 
      }
    }
    if (!accountMatched) {
      showAlert("Wrong Information!");
    }
  });
}

function handleCashOut() {
  getElement("cashOutBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const agentNumber = getValue("agentNumber");
    const amountToOut = getIntValue("amountToOut");
    const pinToOut = getIntValue("pinToOut");
    if (pinToOut === ACCOUNT_PIN && agentNumber.length === 11) {
      if (amountToOut > balanceCurrent) {
        showAlert("Insufficient balance!");
      } else {
        balanceCurrent -= amountToOut;
        getElement("balanceToUse").innerText = balanceCurrent;
        showAlert(`${amountToOut} BDT Cash Out Done!`);
        aboutTransaction("Cash Out", amountToOut);
      }
    } else {
      showAlert("Wrong Information!");
    }
  });
}

function handleTransferMoney() {
  getElement("transferMoneyBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const userNumber = getValue("userNumber");
    const amountTransfer = getIntValue("amountTransfer");
    const pinToTransfer = getIntValue("pinToTransfer");
    if (userNumber.length === 11 && pinToTransfer === ACCOUNT_PIN) {
      if (amountTransfer > balanceCurrent) {
        showAlert("Insufficient balance!");
      } else {
        balanceCurrent -= amountTransfer;
        getElement("balanceToUse").innerText = balanceCurrent;
        showAlert(`${amountTransfer} BDT Transferred!`);
        aboutTransaction("Transfer Money", amountTransfer);
      }
    } else {
      showAlert("Wrong Information!");
    }
  });
}

function handleGetBonus() {
  getElement("getBonusBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const coupon = getValue("bonusCoupon");
    if (coupon === ACCOUNT_COUPON) {
      balanceCurrent += 100;
      getElement("balanceToUse").innerText = balanceCurrent;
      showAlert("Bonus of 100 BDT Added!");
      aboutTransaction("Bonus Copon", "100");
    } else {
      showAlert("Invalid Coupon!");
    }
  });
}

function handlePayBill() {
  getElement("payBillBtn").addEventListener("click", (event) => {
    event.preventDefault();
    const payFor = getValue("payFor");
    const billerAC = getValue("billerAC");
    const amountToPay = getIntValue("amountToPay");
    const pinToPay = getIntValue("pinToPay");
    if (pinToPay === ACCOUNT_PIN && billerAC.length === 11) {
      if (amountToPay <= balanceCurrent) {
        balanceCurrent -= amountToPay;
        getElement("balanceToUse").innerText = balanceCurrent;
        showAlert(`${amountToPay} BDT Paid!`);
        aboutTransaction(payFor, amountToPay);
      } else {
          showAlert("Insufficient balance!");
        }
    } else {
      showAlert("Invalid Informatin!");
    }
  });
};

function aboutTransaction(type, amount) {
  let transaction = {
    Name: type,
    Amount: amount,
    Time: new Date().toLocaleTimeString() 
  };
  transactionData.push(transaction);
  console.log(transaction);
};

function handleTransactions() {
  getElement("transactions-Btn").addEventListener("click", (event) => {
    const headDivofHistory = getElement("transaction-history");
    headDivofHistory.innerHTML = ""; 
    
    const lastFourTrctns = transactionData.slice(-4);
    for(const history of lastFourTrctns) {
      const historyDiv = document.createElement("div");
      historyDiv.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
              <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                          <img src="../assets/wallet1.png" class="mx-auto" alt="" />
                        </div>
                        <div class="ml-3">
                            <h1>${history.Name}</h1>
                            <p>${history.Amount} BDT, ${history.Time}</p>
                        </div>
              </div>
              <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      `;
      headDivofHistory.appendChild(historyDiv);
    };
  });
};

// APPLICATION START
function initializeApp() {
  goHome(); 
  setupWindowToggles(); 
  handleAddMoney(); 
  handleCashOut(); 
  handleTransferMoney(); 
  handleGetBonus();
  handlePayBill();
  handleTransactions();
};

// Running MY SITe
initializeApp();