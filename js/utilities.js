// function 1

function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = Number(inputValue);
  return inputNumber;
}
// function 2

function getInnerTextIntoNumById(id) {
  const text = document.getElementById(id).innerText;
  const textIntoNum = parseFloat(text);
  return textIntoNum;
}

// function 3
// function for history section
function includeInHistory(inputValue, heading) {
  const div = document.createElement("div");
  div.className = "border-2 p-8 rounded-2xl";
  div.innerHTML = `
     <h4 class="font-bold text-xl font-Lexend text-accent mb-4">
            ${inputValue.toFixed(2)} Taka is Donated for ${heading.innerText}
          </h4>
          <p class="font-light font-Lexend text-accent/70">
           Date: ${new Date().toString()}
          </p>
    
    `;
  historySection.appendChild(div);
  return div;
}

// function 4
// function for class add or remove

function tabClass(activeTab, inactiveTab) {
  // active tab
  activeTab.classList.add("bg-primary");
  activeTab.classList.add("text-black");
  //inactive tab
  inactiveTab.classList.remove("bg-primary");
  inactiveTab.classList.remove("text-black");
  inactiveTab.classList.add("border-2");
  inactiveTab.classList.add("text-accent/50");
}

// function 5
// hide section using class
function hideSection(activeSection) {
  mainSection.classList.add("hidden");
  historySection.classList.add("hidden");

  // remove hide
  activeSection.classList.remove("hidden");
}
