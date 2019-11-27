function handleBtnC() {
  document.getElementById("btnC").addEventListener("click", function() {
    value = document.getElementById("tempC").value;
    if (value != NaN) {
      document.getElementById("tempF").value = value * 1.8 + 32;
    }
  });
}

function handleBtnF() {
  document.getElementById("btnF").addEventListener("click", function() {
    value = document.getElementById("tempF").value;
    if (value != NaN) {
      document.getElementById("tempC").value = ((value - 32) * 5) / 9;
    }
  });
}



handleBtnC();
handleBtnF();
