const amountButtons = document.querySelectorAll('.amount-btn');
const amountInput = document.getElementById('donationAmount');
const donationForm = document.getElementById('donationForm');

// Highlight selected preset button and fill the amount box
amountButtons.forEach((button) => {
  button.addEventListener('click', () => {
    amountButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    amountInput.value = button.getAttribute('data-amount');
  });
});

// Redirect to PayPal with the exact donation amount pre-filled
donationForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const amount = parseFloat(amountInput.value).toFixed(2);
  
  // OPTION A: Using your PayPal.Me link (Recommended & simplest)
  // Replace 'NewBeginningCharity' with your actual PayPal.Me username
  const paypalMeUsername = "NewBeginningCharity";
  const paypalUrl = `https://paypal.com{paypalMeUsername}/${amount}USD`;

  // OPTION B: Using PayPal Standard Donate Checkout (Uncomment below if using email instead)
  // const paypalEmail = "your-email@example.com";
  // const paypalUrl = `https://paypal.com{encodeURIComponent(paypalEmail)}&amount=${amount}&currency_code=USD&item_name=New+Beginning+Donation`;

  window.location.href = paypalUrl;
});
