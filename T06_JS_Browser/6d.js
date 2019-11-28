function addToTable(){
  let rows="";
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let username = document.getElementById("username").value;
  let pass = document.getElementById("pass2").value;
  rows += "<tr>\n<td>" + first + "</td>\n<td>" + last + "</td>\n<td>" + username + "</td>\n<td> " + pass + "</td>\n</tr> ";

  var form = document.getElementsByClassName('needs-validation')[0];
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  else{
    $(rows).appendTo("#list tbody");
  }
  return false;


}
