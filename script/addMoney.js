 document.getElementById('add-money')
       .addEventListener('click', function(event){
        event.preventDefault();
        const amount = document.getElementById('amount-money').value;
        const convertedAmount = parseFloat(amount);
        const  accountPin = document.getElementById('pin').value;
        const convertedPin = parseInt(accountPin);
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);
      if (amount && accountPin){
        if (convertedPin === 1234){
       const sum = convertedMainBalance + convertedAmount;
       document.getElementById('main-balance').innerText = sum;
      }
      else{
        alert('Enter valid pin');
      }
      }
      else {
        alert('Enter Amount');
      }
       })