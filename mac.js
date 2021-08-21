// memory cost
const memory = document.getElementById("memory-price");

const memoryButton = document.getElementById("memory-button-8gb").addEventListener("click", function () {
    memory.innerText = "0";
    totalPrice();
})
const memoryButton16 = document.getElementById("memory-button-16gb").addEventListener("click", function () {
    memory.innerText = "180";
    totalPrice();
});
// storage cost
const storage = document.getElementById("storage-price");
// button 1 
const storageButton1 = document.getElementById("storage-button-ssd256").addEventListener("click", function () {
    storage.innerText = "00"
    totalPrice();
})
// button 2
const storageButton2 = document.getElementById("storage-button-ssd512").addEventListener("click", function () {
    storage.innerText = "100"
    totalPrice();
})
// button 3
const storageButton3 = document.getElementById("storage-button-ssd1tb").addEventListener("click", function () {
    storage.innerText = "180"
    totalPrice();
})
// Delivery cost
const delivery = document.getElementById("delivery-charged");

// Delivery cost free
const deliveryFree = document.getElementById("delivery-free").addEventListener("click", function () {
    delivery.innerText = "0"
    totalPrice();
})
// Delivery cost 20 $
const deliverychanged = document.getElementById("delivery-charge").addEventListener("click", function () {
    delivery.innerText = "20"
    totalPrice();
})
// base price 
const basePrice = document.getElementById("best-price")
basePrice.innerText = "1299";
// total price 
const totalPrices = document.getElementById("total-price");
// main footer total 
const mainTotalPrice = document.getElementById("main-total");
mainTotalPrice.innerText = "0";
// total function 
function totalPrice() {
    const totalbasePrice = Number(basePrice.innerText);
    const memoryCost = Number(memory.innerText);
    const storageCost = Number(storage.innerText);
    const deliveryCost = Number(delivery.innerText);
    let fullTotalPrice = totalbasePrice + memoryCost + storageCost + deliveryCost;
    totalPrices.innerText = fullTotalPrice;
    mainTotalPrice.innerText = fullTotalPrice;

}
// promo button + input coupon 
document.getElementById("promo-button").addEventListener("click", function () {

    let x = document.getElementById("promo-code")
    if (x.value == "stevekaku") {
        let coupon = totalPrices.innerText;
        let couponValue = parseInt(coupon * 20 / 100);
        mainTotalPrice.innerText = coupon - couponValue;
        x.value = "";
    }
})
// finish


