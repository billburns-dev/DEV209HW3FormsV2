/*
Prevent DOM manipulation code from executing until the the DOM content is completely loaded (i.e., until the  'DOMContentLoaded' event has occurred). The 'DOMContentLoaded' event is NOT dependent on the loading of images and/or stylesheets.
 */

document.addEventListener("DOMContentLoaded", function (event) {
  // initially disable customer info and login sections; fields grayed out & unclickable
  document.getElementById("newUserInfo").disabled = true;
  document.getElementById("existUserLogin").disabled = true;
});

document.getElementById("newUserBtn").addEventListener("click", function () {
  document.getElementById("newUserInfo").disabled = false;
  document.getElementById("userType").disabled = true;
});

document.getElementById("existUserBtn").addEventListener("click", function () {
  document.getElementById("existUserLogin").disabled = false;
  document.getElementById("userType").disabled = true;
});
  
// *** unused boilerplate code (see below) will removed before final version of file is submitted ***

/*
// "form with fieldset, legend, inputs, & submit on-click" example [pairs with css & html] (start)
function formSubmitEvent() {
  let name = document.getElementById("custname").value;
  let state = document.getElementById("state").value;
  if (name.length > 2 && state.length > 1) {
    document.getElementById("experience").disabled = false;
    document.getElementById("cust2").value = name;
    document.getElementById("visitdate").value = new Date();
  }
  else {
    alert("please fill in all fields");
  }
}
// "form with fieldset, legend, inputs, & submit on-click" example [pairs with css & html] (end)

// hiding and disabling HTML elements using JavaScript (start)
  // html 'element'; change "hidden" property; hide element is '.hidden = true'; default is '.hidden = false'
  document.getElementById('element').hidden = true;
  // html 'element'; change "style.display" property; hide element is 'style.display = none'
  document.getElementById('element').style.display = 'none';
  // html 'element'; change "style.visibility" property; hide element is 'style.visibility = 'hidden'; default is 'style.visibility = visible'
  document.getElementById('element').style.visibility = 'hidden';
  // hiding and disabling HTML elements using JavaScript (end)

/*
save/retrieve data (strings only) to/from the browser's localstorage;
data in localstorage still persists AFTER browser closure and does NOT expire
*\
// localstage examples (start)
  // save data to localstorage;   localStorage.setItem(key, value)
  localStorage.setItem('name', 'Obaseki Nosa');         // key = 'name'  value = 'Obaseki Nosa'
  // read data from localstorage;   localStorage.getItem(key)
  let fullName = localStorage.getItem('name');           // fullName = 'Obaseki Nosa'
  // remove data from localstorage;   localStorage.removeItem(key)
  localStorage.removeItem('name');                              // removes 'Obaseki Nosa' from the browser's local storage
  // remove/clear all data from localstorage;   localStorage.clear()
  localStorage.clear();                                                     // removes all data from the browser's local storage
// localstage examples (end)
 
 */