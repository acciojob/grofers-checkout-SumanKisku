const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const tr = document.createElement("tr");
const td = document.createElement("td");
const tbody = document.querySelector("tbody");
tr.appendChild(td);
tbody.appendChild(tr);

const getSum = () => {
//Add your code here
    let total = 0;
    const prices = document.querySelectorAll(".price");
    prices.forEach((price)=> total += Number(price.innerHTML));
    td.innerText = total;
};

getSumBtn.addEventListener("click", getSum);

