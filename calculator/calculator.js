window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values  = { amount: 100000, years: 5, rate: 3.5 };
  
  const userAmt = document.getElementById("loan-amount");
  userAmt.value = values.amount;
  
  const userYrs = document.getElementById("loan-years");
  userYrs.value = values.years;
  
  const userRate = document.getElementById("loan-rate");
  userRate.value = values.rate;
  
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate = (values.rate / 100) / 12;
  let n = Math.floor(values.years * 12);
  let numerator = monthlyRate * values.amount;
  let denominator = 1 - Math.pow((1 + monthlyRate), -n);
  
  return (numerator / denominator).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyPayment) {
  let displayPayment = document.getElementById("monthly-payment");
  displayPayment.innerText = "$" + monthlyPayment;
  console.log(monthlyPayment);
}
