function handleSubmit(event) {
    event.preventDefault();

    const memberName = document.querySelector("[name='memberName']").value; // Spesifisere et sett med objekter, (finn et element p� siden som har attributer name med verdi memberName)
    const task = document.querySelector("[name='task']").value;

    const product = {
        memberName, task,
    };

    const productList = [product];
    window.localStorage.setItem("productList", JSON.stringify(productList));
}


const productList = JSON.parse(window.localStorage.getItem("productList")) || [];

if (productList == null) {
    productList = [];
}

if (productList != null) {
    const productListEl = document.getElementById("productList");

    for (const product of productList) {
        const productEl = document.createElement("div");
        productEl.innerText = product.memberName + " " product.task;
        productListEl.appendChild(productEl);
    }

}