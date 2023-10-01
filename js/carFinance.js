  const carPrice = document.getElementById("price").value;

  const downPayment = document.getElementById("downPayment").value;
  
  const loanTerm = document.getElementById("loanTerm").value;

  const interestRate = document.getElementById("interestRate").value;

const calculateButton = document.getElementById('calculate');

function getAnnualResult(price, down, loan, interest){
    let monthPercent = (interest / 100) /12;
    
    let result = ((price - down) * monthPercent) / (1 - Math.pow(1 + monthPercent, -loan)); 

    return result;
}

calculateButton.addEventListener('click', () => {
    result.textContent = getAnnualResult(carPrice, downPayment, loanTerm, interestRate).toFixed(2);
});
