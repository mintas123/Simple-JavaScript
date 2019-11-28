function handleBtnC() {
  document.getElementById("btnC").addEventListener("click", function() {
    value = document.getElementById("tempC").value;
    if (isNaN(value)) {
      notANum();
    }
    else{
      let result = value * 1.8 + 32;
      document.getElementById("tempF").value = result.toFixed(1);
    }
  });
}

function handleBtnF() {
  document.getElementById("btnF").addEventListener("click", function() {
    value = document.getElementById("tempF").value;
    if (isNaN(value)) {
      notANum();
    }
    else{
      let result = ((value - 32) * 5) / 9;
      document.getElementById("tempC").value = result.toFixed(1);

    }
  });
}

function notANum(){
  var para = document.createElement("P");               // Create a <p> element
  para.innerText = "Numbers only";               // Insert text
  document.body.appendChild(para);
}



handleBtnC();
handleBtnF();
