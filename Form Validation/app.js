const form = document.querySelector(".form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const passWord = document.querySelector("#pass");
const cPass = document.querySelector("#c-pass");

//add event listener for submit form-
form.addEventListener("submit", () => {
//    event.preventDefault();
  validate();
});

const sendData = ( userNameVal,sRate, count) => {
  if (sRate === count) {
    alert("Registration Successsfull");
    //  swal("Welcome ! " + userNameVal, "success");
     location.href = `abc.html?username=${userNameVal}`
  }
}

// for final data validation-
const successMsg = (userNameVal) => {
  let formCom = document.getElementsByClassName("form-control");

  let count = formCom.length - 1;
  for (let i = 0; i < formCom.length; i++) {
    if (formCom[i].className === "form-control success") {
      let sRate = 0 + i;
      console.log(sRate);
      sendData(userNameVal, sRate, count);
    } else {
      return false;
    }
  }
};

// more email validate conditon-
const isEmail = (emailVal) => {
  let atSymbol = emailVal.indexOf("@");
  if (atSymbol < 1) return false;

  let dot = emailVal.lastIndexOf(".");
  if (dot <= atSymbol + 3) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};

const validate = () => {
  const userNameVal = userName.value.trim(); // trim() for remove space from start & end.
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passWordVal = passWord.value.trim();
  const cPassVal = cPass.value.trim();

  // validate username

  if (userNameVal === "") {
    setErrorMsg(userName, "username cannot be blank");
  } else if (userNameVal.length <= 2) {
    setErrorMsg(userName, "username min 3 character");
  } else {
    setSuccessMsg(userName);
  }

  // validate email

  if (emailVal === "") {
    setErrorMsg(email, "email cannot be blank");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not a Valid Email");
  } else {
    setSuccessMsg(email);
  }

  // validate phone

  if (phoneVal === "") {
    setErrorMsg(phone, "Phone num. cannot be blank");
  } else if (phoneVal.length != 10) {
    setErrorMsg(phone, " Phone Number min 10 Digits");
  } else {
    setSuccessMsg(phone);
  }

  // validate password

  if (passWordVal === "") {
    setErrorMsg(passWord, "Password cannot be blank");
  } else if (passWordVal.length <= 5) {
    setErrorMsg(passWord, " minimum 5 char required and 1 special Char");
  } else if (!/[!@#$%&*()_+^]/.test(passWordVal)) {
    setErrorMsg(passWord, " 1 special char required");
  } else {
    setSuccessMsg(passWord);
  }

  // validate confirm passs

  if (cPassVal === "") {
    setErrorMsg(cPass, "confirm  Your Password ");
  } else if (passWordVal !== cPassVal) {
    setErrorMsg(cPass, "Your Password is not Match, pls check again");
  } else {
    setSuccessMsg(cPass);
  }
};

function setErrorMsg(input, setErrorMsgs) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = setErrorMsgs;
}

function setSuccessMsg(input, setSuccessMs) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}
