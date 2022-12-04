window.addEventListener("load", solve);

function solve() {
  document.getElementById("publish").addEventListener("click", createOffer);

  const tableBodyElement = document.getElementById("table-body");
  const sellingSection = document.getElementById("cars-list");

  const makeElement = document.getElementById("make");
  const modelElement = document.getElementById("model");
  const yearElement = document.getElementById("year");
  const fuelElement = document.getElementById("fuel");
  const originalPriceElement = document.getElementById("original-cost");
  const sellingPriceElement = document.getElementById("selling-price");
  const profitElement = document.getElementById("profit");

  let totalProfit = 0;



  function createOffer(e) {
    e.preventDefault();
    const makeValue = makeElement.value;
    const modelValue = modelElement.value;
    const yearValue = yearElement.value;
    const fuelValue = fuelElement.value;
    const originalPriceValue = originalPriceElement.value;
    const sellingPriceValue = sellingPriceElement.value;

    if (!makeValue ||
      !modelValue ||
      !yearValue ||
      !fuelValue ||
      !originalPriceValue ||
      !sellingPriceValue) {
      return;
    } else if (Number(sellingPriceValue) <= Number(originalPriceValue)) {
      return;
    }

    const container = createHTMLTemplate(makeValue, modelValue, yearValue, fuelValue, originalPriceValue, sellingPriceValue);

    tableBodyElement.appendChild(container);

    removeFieldValues();

  }

  function removeFieldValues() {
    makeElement.value = "";
    modelElement.value = "";
    yearElement.value = "";
    fuelElement.value = "";
    originalPriceElement.value = "";
    sellingPriceElement.value = "";
  }

  function createHTMLTemplate(make, model, year, fuel, originalPrice, sellingPrice) {
    const trElement = document.createElement("tr");
    trElement.classList.add("row");

    const tdMakeElement = document.createElement("td");
    tdMakeElement.textContent = make;

    const tdModelElement = document.createElement("td");
    tdModelElement.textContent = model;

    const tdYearElement = document.createElement("td");
    tdYearElement.textContent = year;

    const tdFuelElement = document.createElement("td");
    tdFuelElement.textContent = fuel;

    const tdOriginalPriceElement = document.createElement("td");
    tdOriginalPriceElement.textContent = originalPrice;

    const tdsellingPriceElement = document.createElement("td");
    tdsellingPriceElement.textContent = sellingPrice;

    const tdButtonsElement = document.createElement("td");

    const editBtn = document.createElement("button");
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editOffer);

    const sellBtn = document.createElement("button");
    sellBtn.classList.add("action-btn");
    sellBtn.classList.add("sell");
    sellBtn.textContent = "Sell";
    sellBtn.addEventListener("click", sellOffer);


    trElement.appendChild(tdMakeElement);
    trElement.appendChild(tdModelElement);
    trElement.appendChild(tdYearElement);
    trElement.appendChild(tdFuelElement);
    trElement.appendChild(tdOriginalPriceElement);
    trElement.appendChild(tdsellingPriceElement);

    tdButtonsElement.appendChild(editBtn);
    tdButtonsElement.appendChild(sellBtn);

    trElement.appendChild(tdButtonsElement);

    return trElement;

  }

  function editOffer(e) {
    const currentOffer = e.target.parentElement.parentElement;
    const values = currentOffer.children;

    makeElement.value = values[0].textContent;
    modelElement.value = values[1].textContent;
    yearElement.value = values[2].textContent;
    fuelElement.value = values[3].textContent;
    originalPriceElement.value = values[4].textContent;
    sellingPriceElement.value = values[5].textContent;

    currentOffer.remove();
  }

  function sellOffer(e) {
    const currentOffer = e.target.parentElement.parentElement;
    const values = currentOffer.children;
    const profit = Number(values[5].textContent) - Number(values[4].textContent);

    const liContainer = createHTMLSellingTemplate(values, profit);
    sellingSection.appendChild(liContainer);


    totalProfit += profit;
    profitElement.textContent = (totalProfit.toFixed(2)).toString();

    currentOffer.remove();

    debugger

  }

  function createHTMLSellingTemplate(values, profit) {

    const liElement = document.createElement("li");
    liElement.classList.add("each-list");

    const spanMakeModel = document.createElement("span");
    spanMakeModel.textContent = `${values[0].textContent} ${values[1].textContent}`;

    const spanYear = document.createElement("span");
    spanYear.textContent = values[2].textContent;

    const spanPriceDiffrence = document.createElement("span");
    spanPriceDiffrence.textContent = profit;

    liElement.appendChild(spanMakeModel);
    liElement.appendChild(spanYear);
    liElement.appendChild(spanPriceDiffrence);

    return liElement;
  }

}
