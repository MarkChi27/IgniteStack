let bath = ["0", "1", "2", "3", "4", "5"];
let bed = ["0", "1", "2", "3", "4", "5", "6", "7"];
let price = ["1000", "2000", "3000", "4000", "5000", "6000", "7000", "8000", "9000"]

function dropDown() {
    for (i = 1; i <= bath.length; i++) {
      var opt = document.createElement("option");
      document.getElementById("bathroom").innerHTML += '<option value="' + i + '">' + bath[i-1] + '</option>';

    }
    for (i = 1; i <= bed.length; i++) {
      var opt = document.createElement("option");
      document.getElementById("bedroom").innerHTML += '<option value="' + i + '">' + bed[i-1] + '</option>';

    }
    for (i = 1; i <= price.length; i++) {
      var opt = document.createElement("option");
      document.getElementById("price").innerHTML += '<option value="' + i + '">' + price[i-1] + '</option>';
    }
}

function verify() {
  var verifyButton = document.getElementById('verify');
  var goButton = document.getElementById('go');
  
  verifyButton.style.display = "none";
  goButton.style.display = "block";
}
dropDown();
