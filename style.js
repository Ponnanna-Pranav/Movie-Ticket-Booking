var count = 0;
var seats = document.getElementsByClassName("seat");

for (var i = 0; i < seats.length; i++) {
  var item = seats[i];

  item.addEventListener("click", (event) => {
    var price = document.getElementById("movie").value;

    if (event.target.classList.contains('selected')) {
      // If the seat is already selected, deselect it
      event.target.classList.remove("selected");
      count--;
    } else if (!event.target.classList.contains('occupied')) {
      // If the seat is not occupied or selected, select it
      event.target.classList.add("selected");
      count++;
    }

    var total = count * price;
    document.getElementById("count").innerText = count;
    document.getElementById("total").innerText = total;
  });
}


      document.getElementById('payment-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;
      
        // You can add your payment processing logic here
        // For example, validate inputs and make an API call to process payment
      
        // For demonstration purposes, just displaying a success message
        const paymentStatus = document.getElementById('payment-status');
        paymentStatus.textContent = 'Payment Successful!';
        paymentStatus.style.color = 'green';
      });

function myFunction() {
  var count=0;
  var seats=document.getElementsByClassName("seat");
  var price= document.getElementById("movie").value;
  for(var i=0;i<seats.length;i++){
    if (seats[i].classList.contains('selected') ){
      count++;
    }
  }
  var total=(count-1)*price;
  document.getElementById("count").innerText=count-1;
  document.getElementById("total").innerText=total;

}