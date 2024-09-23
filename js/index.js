// reading operations
const mainBalance = document.getElementById("main-balance");
const noakhaliAmount = document.getElementById("noakhali-amount");
const feniAmount = document.getElementById("feni-amount");
const quotaAmount = document.getElementById("quota-amount");
const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
const historySection = document.getElementById("history-section");
const noakhaliHeading = document.getElementById("noakhali-heading");
const feniHeading = document.getElementById("feni-heading");
const quotaHeading = document.getElementById("quota-heading");
const mainSection = document.getElementById("main-section");

// blog page and home page connecting to each other

document.getElementById("blog-page-btn").addEventListener("click", function () {
  window.location.href = "./blog.html";
});

let mainBalanceNumber = getInnerTextIntoNumById("main-balance");
let noakhaliAmountNumber = getInnerTextIntoNumById("noakhali-amount");
let feniAmountNumber = getInnerTextIntoNumById("feni-amount");
let quotaAmountNumber = getInnerTextIntoNumById("quota-amount");

// single noakhali card calculation

document.getElementById("noakhali-btn").addEventListener("click", function () {
  const noakhaliInputValue = getInputValueById("noakhali-input");
  if (isNaN(noakhaliInputValue) || noakhaliInputValue <= 0) {
    alert("Invalid Donation amount");
    document.getElementById("noakhali-input").value = "";
    return;
  } else {
    if (mainBalanceNumber < noakhaliInputValue) {
      return alert("Not enough balance");
    }
    noakhaliAmountNumber += noakhaliInputValue;
    mainBalanceNumber -= noakhaliInputValue;

    noakhaliAmount.innerText = noakhaliAmountNumber.toFixed(2);
    mainBalance.innerText = mainBalanceNumber.toFixed(2);

    document.getElementById("my_modal_1").showModal();
    document.getElementById("noakhali-input").value = "";

    includeInHistory(noakhaliInputValue, noakhaliHeading);
  }
});

// single feni card calculation
document.getElementById("feni-btn").addEventListener("click", function () {
  const feniInputValue = getInputValueById("feni-input");
  if (isNaN(feniInputValue) || feniInputValue <= 0) {
    alert("Invalid Donation amount");
    document.getElementById("feni-input").value = "";
    return;
  } else {
    if (mainBalanceNumber < feniInputValue) {
      return alert("not enough balance");
    }

    feniAmountNumber += feniInputValue;
    mainBalanceNumber -= feniInputValue;

    feniAmount.innerText = feniAmountNumber.toFixed(2);
    mainBalance.innerText = mainBalanceNumber.toFixed(2);
    document.getElementById("my_modal_2").showModal();
    document.getElementById("feni-input").value = "";

    includeInHistory(feniInputValue, feniHeading);
  }
});

// single quota card calculation
document.getElementById("quota-btn").addEventListener("click", function () {
  const quotaInputValue = getInputValueById("quota-input");
  //   const quotaInputValueNumber = Number(quotaInputValue);
  if (isNaN(quotaInputValue) || quotaInputValue <= 0) {
    alert("Invalid Donation amount");
    document.getElementById("quota-input").value = "";
    return;
  } else {
    if (mainBalanceNumber < quotaInputValue) {
      return alert("not enough balance");
    }
    quotaAmountNumber += quotaInputValue;
    mainBalanceNumber -= quotaInputValue;

    quotaAmount.innerText = quotaAmountNumber.toFixed(2);
    mainBalance.innerText = mainBalanceNumber.toFixed(2);

    document.getElementById("my_modal_3").showModal();
    document.getElementById("quota-input").value = "";

    includeInHistory(quotaInputValue, quotaHeading);
  }
});

// historyTab events
historyTab.addEventListener("click", function () {
  tabClass(historyTab, donationTab);
  hideSection(historySection);
});
// donation tab events
donationTab.addEventListener("click", function () {
  tabClass(donationTab, historyTab);
  hideSection(mainSection);
});
