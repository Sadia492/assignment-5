// reading operations
const mainBalance = document.getElementById("main-balance");
const noakhaliAmount = document.getElementById("noakhali-amount");
const feniAmount = document.getElementById("feni-amount");
const quotaAmount = document.getElementById("quota-amount");
const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
const noakhaliSection = document.getElementById("noakhali-section");
const feniSection = document.getElementById("feni-section");
const quotaSection = document.getElementById("quota-section");
const historySection = document.getElementById("history-section");
const footerSection = document.getElementById("footer-section");
const noakhaliHeading = document.getElementById("noakhali-heading");
const feniHeading = document.getElementById("feni-heading");
const quotaHeading = document.getElementById("quota-heading");

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
    alert("invalid input value");
    document.getElementById("noakhali-input").value = "";
    return;
  } else {
    if (mainBalanceNumber < noakhaliInputValue) {
      return alert("not enough balance");
    }
    noakhaliAmountNumber = noakhaliAmountNumber + noakhaliInputValue;
    mainBalanceNumber = mainBalanceNumber - noakhaliInputValue;

    noakhaliAmount.innerText = noakhaliAmountNumber;

    mainBalance.innerText = mainBalanceNumber;
    document.getElementById("my_modal_1").showModal();
    document.getElementById("noakhali-input").value = "";

    const noakhaliDiv = document.createElement("div");
    noakhaliDiv.className = "border-2 p-8 rounded-2xl";
    noakhaliDiv.innerHTML = `
     <h4 class="font-bold text-xl font-Lexend text-accent mb-4">
            ${noakhaliInputValue} Taka is Donated for ${
      noakhaliHeading.innerText
    }
          </h4>
          <p class="font-light text-accent/70">
            ${new Date().toString()}
          </p>
    
    `;

    historySection.appendChild(noakhaliDiv);
  }
});

// single feni card calculation
document.getElementById("feni-btn").addEventListener("click", function () {
  const feniInputValue = getInputValueById("feni-input");
  if (isNaN(feniInputValue) || feniInputValue <= 0) {
    alert("invalid input value");
    document.getElementById("feni-input").value = "";
    return;
  } else {
    if (mainBalanceNumber < feniInputValue) {
      return alert("not enough balance");
    }

    feniAmountNumber += feniInputValue;
    mainBalanceNumber -= feniInputValue;

    feniAmount.innerText = feniAmountNumber;
    mainBalance.innerText = mainBalanceNumber;
    document.getElementById("my_modal_2").showModal();
    document.getElementById("feni-input").value = "";

    const feniDiv = document.createElement("div");
    feniDiv.className = "border-2 p-8 rounded-2xl";
    feniDiv.innerHTML = `
     <h4 class="font-bold text-xl font-Lexend text-accent mb-4">
            ${feniInputValue} Taka is Donated for ${feniHeading.innerText}
          </h4>
          <p class="font-light text-accent/70">
            ${new Date().toString()}
          </p>
    
    `;

    historySection.appendChild(feniDiv);
  }
});

// single quota card calculation
document.getElementById("quota-btn").addEventListener("click", function () {
  const quotaInputValue = getInputValueById("quota-input");
  //   const quotaInputValueNumber = Number(quotaInputValue);
  if (isNaN(quotaInputValue) || quotaInputValue <= 0) {
    alert("invalid input value");
    document.getElementById("quota-input").value = "";
    return;
  } else {
    if (mainBalanceNumber < quotaInputValue) {
      return alert("not enough balance");
    }
    quotaAmountNumber += quotaInputValue;
    mainBalanceNumber -= quotaInputValue;

    quotaAmount.innerText = quotaAmountNumber;
    mainBalance.innerText = mainBalanceNumber;

    document.getElementById("my_modal_3").showModal();
    document.getElementById("quota-input").value = "";

    const quotaDiv = document.createElement("div");
    quotaDiv.className = "border-2 p-8 rounded-2xl";
    quotaDiv.innerHTML = `
     <h4 class="font-bold text-xl font-Lexend text-accent mb-4">
            ${quotaInputValue} Taka is Donated for ${quotaHeading.innerText}
          </h4>
          <p class="font-light text-accent/70">
            ${new Date().toString()}
          </p>
    
    `;

    historySection.appendChild(quotaDiv);
  }
});

// historyTab events
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-primary");
  historyTab.classList.add("text-black");
  donationTab.classList.remove("bg-primary");
  donationTab.classList.remove("text-black");
  donationTab.classList.add("border-2");
  donationTab.classList.add("text-accent/50");

  noakhaliSection.classList.add("hidden");
  feniSection.classList.add("hidden");
  quotaSection.classList.add("hidden");
  //   footerSection.classList.add("hidden");

  historySection.classList.remove("hidden");
});

donationTab.addEventListener("click", function () {
  donationTab.classList.add("bg-primary");
  donationTab.classList.add("text-black");
  historyTab.classList.remove("text-black");
  historyTab.classList.remove("bg-primary");
  historyTab.classList.add("border-2");
  historyTab.classList.add("text-accent/50");

  noakhaliSection.classList.remove("hidden");
  feniSection.classList.remove("hidden");
  quotaSection.classList.remove("hidden");
  footerSection.classList.remove("hidden");

  historySection.classList.add("hidden");
});
