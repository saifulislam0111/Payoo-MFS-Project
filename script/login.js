 document
        .getElementById("login-btn")
        .addEventListener("click", function (event) {
          event.preventDefault();
          const accountNumber = document.getElementById('account-number').value;
          const accountPin = document.getElementById('pin').value;
          if(accountNumber.length === 11){
            if(accountPin === "1234"){
              window.location.href = "./main.html"
            }
            else{
              alert("Pin is incorrect");
            }
          }
          else{
            alert("Need a valid account number")
          }
        });