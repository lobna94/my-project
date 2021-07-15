function addRow()
{

    var id = document.getElementById('id').value;
    var fullname = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var pnumber = document.getElementById('pnumber').value;
    var age = document.getElementById('age').value;
      

      var table = document.getElementsByTagName('table')[0];
      

      var newRow = table.insertRow(table.rows.length/2+1);
      

      var cel1 = newRow.insertCell(0);
      var cel2 = newRow.insertCell(1);
      var cel3 = newRow.insertCell(2);
      var cel4 = newRow.insertCell(3);
      var cel5 = newRow.insertCell(4);

      cel1.innerHTML = id;
      cel2.innerHTML = fullname;
      cel3.innerHTML = email;
      cel4.innerHTML = pnumber;
      cel5.innerHTML = age;
}
function refresh()
{
    location.reload(true);
}

   

function clearValidate() {
    document.getElementById("id").value = "";
        document.getElementById("id").innerHTML = "";
        document.getElementById("fullname").value = "";
        document.getElementById("fullname").innerHTML = "";
        document.getElementById("email").value = "";
        document.getElementById("email").innerHTML = "";
        document.getElementById("pnumber").value = "";
        document.getElementById("pnumber").innerHTML = "";
        document.getElementById("age").value = "";
        document.getElementById("age").innerHTML = "";
    }