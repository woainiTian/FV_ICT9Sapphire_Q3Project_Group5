function calculateFare() {
  let pickup, dropoff, basefare, baseKM, perKMrate, distance, extraKM, discount;

  pickup = parseFloat(document.getElementById("pickup").value);
  dropoff = parseFloat(document.getElementById("dropoff").value);

  basefare = 50;  
  perKMrate = 15; 
  baseKM = 2;     

  discount = document.getElementById("disc").checked; 


  distance = Math.max(Math.abs(dropoff - pickup), 0);
  extraKM = Math.max(distance - baseKM, 0);


  let fare = basefare + extraKM * perKMrate;

  let discountedFare = fare * (1 - 0.2 * discount);
  let discountAmount = fare - discountedFare;

  document.getElementById("priceBox").innerHTML =
    "<div>Fare: ₱" + fare.toFixed(2) + "</div>" +
    "<div>Discounted Fare: ₱" + discountedFare.toFixed(2) + "</div>" +
    "<div>Discount: ₱" + discountAmount.toFixed(2) + "</div>";
}

document.getElementById("btnPrice").addEventListener("click", calculateFare);
