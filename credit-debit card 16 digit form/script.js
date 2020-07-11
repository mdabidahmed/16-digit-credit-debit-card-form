function myFunction() {
  var firstInput = document.getElementById("first").value;

  if (firstInput.length >= 5) {
    console.log(firstInput);
    var number = document.getElementById("first").value;
    output = number.toString().match(/\d{1,4}/g);
    console.log(output);
    var firstForValue = output[0];
    console.log(firstForValue);
    var clr = (document.getElementById("first").value = "");
    document.getElementById("first").value = output[0];
    document.getElementById("second").value = output[1];
    document.getElementById("third").value = output[2];
    document.getElementById("fourth").value = output[3];
  }
  ////////////////////////////////////////////////////////
  document.getElementById("first").focus();
  if (firstInput.length === 4) {
    document.getElementById("second").focus();
    // console.log("you are correct 1");
  }
  var secondInput = document.getElementById("second").value;
  console.log(secondInput.length);
  if (secondInput.length === 4) {
    document.getElementById("third").focus();
    // console.log("you are correct 2");
  }
  var thirdInput = document.getElementById("third").value;
  if (thirdInput.length === 4) {
    document.getElementById("fourth").focus();
    // console.log("you are correct 3");
    var fourthInputDel = document.getElementById("fourth").value;

    if (fourthInputDel.length === 4) {
      // document.getElementById("fourth").blur();
    }
  }
}

function myFunctionColor(x) {
  // <!--First InputField for changing color --->

  var FirstInput = document.getElementById("first").value;
  document.getElementById("first").style.background = "salmon";
  // console.log(FirstInput.length);
  if (FirstInput.length === 4) {
    document.getElementById("first").style.background = "lightgreen";
  }
  // <!--Second InputField for changing color --->
  var secondInput = document.getElementById("second").value;
  document.getElementById("second").style.background = "salmon";
  // console.log(secondInput.length);
  if (secondInput.length === 4) {
    document.getElementById("second").style.background = "lightgreen";
  }
  // <!--third InputField for changing color --->
  var thirdInput = document.getElementById("third").value;
  document.getElementById("third").style.background = "salmon";
  // console.log(FirstInput.length);
  if (thirdInput.length === 4) {
    document.getElementById("third").style.background = "lightgreen";
  }
  // <!--fourth InputField for changing color --->
  var fourthInput = document.getElementById("fourth").value;
  document.getElementById("fourth").style.background = "salmon";
  // console.log(FirstInput.length);
  if (fourthInput.length === 4) {
    document.getElementById("fourth").style.background = "lightgreen";
  }
}
// --------------------------------------------------------------

function myFunctionDeletion() {
  var fourthInputDel = document.getElementById("fourth1").value;
  console.log(fourthInputDel);
  if (fourthInputDel.length === 0) {
    document.getElementById("third1").focus();
  }
  var thirdInputDel = document.getElementById("third1").value;
  console.log(thirdInputDel);
  if (thirdInputDel.length === 0) {
    document.getElementById("second1").focus();
    // console.log("cheking");
  }
  var secondInputDel = document.getElementById("second1").value;
  console.log(secondInputDel);
  if (secondInputDel.length === 0) {
    document.getElementById("first1").focus();
    // console.log("cheking");
  }
}
