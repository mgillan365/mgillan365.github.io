function updateOrder() {
  const TAXRATE = 0.07;
  const DONUTPRICE = 1.5;
  let numCakeDonuts = Number(document.getElementById('cake').value);
  let numGlazedDonuts = Number(document.getElementById('glazed').value);

  let subtotal = numCakeDonuts * DONUTPRICE + numGlazedDonuts * DONUTPRICE;
  let tax = subtotal * TAXRATE;
  let total = subtotal + tax;

  document.getElementById('subtotal').value = formatCurrency(subtotal);
  document.getElementById('tax').value = formatCurrency(tax);
  document.getElementById('total').value = formatCurrency(total);
}

function formatCurrency(amount) {
  return '$' + amount.toFixed(2);
}

document.getElementById('calculate').addEventListener('click', updateOrder);
