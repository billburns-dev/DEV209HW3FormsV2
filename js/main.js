// build array of states for use with <select> element
let states = ["enter name of your state", "AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

// build out the select/option drop-down for user to select "state"
let select = document.getElementById("newUserState");
for (let i = 0; i <states.length; i++) {
	let option = document.createElement("option");
	option.value = states[i];
	option.text= states[i];
	select.appendChild(option);
}

/*
Prevent DOM manipulation code from executing until the the DOM content is completely loaded (i.e., until the  'DOMContentLoaded' event has occurred).
 */
document.addEventListener("DOMContentLoaded", function (event) {
  // initially disable "add new user" and "existing user login" sections; fields grayed out & unclickable
  document.getElementById("newUser").disabled = true;
  document.getElementById("existUser").disabled = true;
});

// for a new user, leave "existing user login" section disabled (fields grayed out & unclickable) and disable "determine user type" section
function formSubmitNew() {
  document.getElementById("userType").disabled = true;
  document.getElementById("newUser").disabled = false;
}

// for an existing user, leave "add a new user" section disabled (fields grayed out & unclickable) and disable "determine user type" section
function formSubmitExist() {
  document.getElementById("userType").disabled = true;
  document.getElementById("existUser").disabled = false;
}

// query the new user to input info needed to setup a new account & store it in localStorage
function addNewUser() {
  let username1 = document.getElementById("newUserName").value;
  let password1 = document.getElementById("newUserPassword").value;
  let city1 = document.getElementById("newUserCity").value;
  let state1 = document.getElementById("newUserState").value;
  localStorage.setItem("userNameKey", username1);
  localStorage.setItem("userPasswordKey", password1);
  localStorage.setItem("userCityKey", city1);
  localStorage.setItem("userStateKey", state1);
  alert("Welcome " +  username1 + "\r\nTo access your account, please login.");
}
  // query the existing user to input their username/password and validate against the data stored in localStorage
function loginExistUser() {
  let username2 = document.getElementById("existUserName").value;
  let password2 = document.getElementById("existUserPassword").value;
  storedUserName = localStorage.getItem("userNameKey");
  storedUserPassword = localStorage.getItem("userPasswordKey");
  if (username2 === storedUserName && password2 === storedUserPassword) {
    
    // create "Delete my account" button
    let deleteAcctBtn = document.createElement("button");
    deleteAcctBtn.id = 'deleteAcctBtn';
    deleteAcctBtn.textContent = 'Delete my account';
    document.getElementById("existUser").appendChild(deleteAcctBtn);
    
    // acknowledge user's login & provide prompt for the option to delete their account (if so desired)
    alert("Welcome back " +  username2 + "\r\nTo delete your account, please click the 'Delete my account' button below");
    
    // trap deleteAcctBtn being clicked
    document.getElementById("deleteAcctBtn").addEventListener("click", deleteExistUserAcct);
  } 
  else {
    alert("Username and/or Password not valid"); 
  }
}

function deleteExistUserAcct() {  
localStorage.clear();
alert("Your account has been deleted ... your loss ... not ours ... loser");
  }
