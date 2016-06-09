/**
 * Created by Mor on 01-Jun-16.
 */

var webApp = {
    name : {
        inputName1: " ",
        inputName2: " ",
        inputName3: " ",
        inputName4: " ",
        inputName5: " ",
        inputName6: " "
    },
    url : {
        "inputUrl1":" ",
        "inputUrl2":" ",
        "inputUrl3":" ",
        "inputUrl4":" ",
        "inputUrl5":" ",
        "inputUrl6":" "
    }

};

    ///////////////////   new tab Setting img  ////////////////////////////
var setNameUrl = document.querySelectorAll('.setting-tab');

// setNameUrl[0] = the first span
// setNameUrl[1] = the second span

var display = true;
setNameUrl[0].onclick = showOrHideInputs;
setNameUrl[1].onclick = showOrHideInputs;

    function showOrHideInputs() {
    this.parentNode.parentNode.childNodes[3].hidden = display;
    display = !display;
    if(!display){
        this.style.backgroundColor = "transparent";
    }else{
        this.style.backgroundColor = "white";
    }
}

var tabs = document.querySelectorAll(".tabs > ul > li");

///////////////////   set all tabs to transparent background  ////////////////////////////
function changeBackground(tabs) {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.background = "transparent";
        div[i].style.display = "none";
    }
}

///////////////////  set and show background for the chosen one    ////////////////////////////
var div = document.querySelectorAll(".tabs > div");
//console.log(div);

for (var index in tabs) {

    if (tabs[index].nodeType === 1) {  // check if <li>
            let i = index;
       // console.log(div[i]);
            tabs[index].onclick = function() {
                changeBackground(tabs);
                this.style.background = "rgba(235,235,235,1)";
                div[i].style.display = "inline-block";

              //  console.log(i)

            };

    }
}


//////////////////////////      check validation inputs and save on object webApp ////////////////////////////

var saveButton = document.querySelectorAll(".submit-button");

// NodeList[2]
saveButton[0].onclick = submitButton;
saveButton[1].onclick = submitButton;



    function submitButton(e){


        var input = document.querySelectorAll('.reports-input > input');
        var arr = Array.prototype.slice.call(input);

        input =  this.id === "quick-reports-submit" ?   arr.slice(0,6) :  arr.splice(6,arr.length-1);

        checkValidation(arr);


        dropDownSelect(input);






        //e.preventDefault();
    }



function dropDownSelect(inputList){

    // save the inputs on object webApp
    var select = document.createElement("select")
    for(var i=0; i< inputList.length; i++) {
        // check empty inputs
        if (inputList[i].value !== "") {

            var option = document.createElement("option");
            option.innerText = inputList[i].value;

            select.appendChild(option);
       // console.log(inputList[i].value);
        webApp[inputList[i].id] = inputList[i].value
    }
    }

   var webList =  document.querySelector("#qr-web-list");

    webList.style.display = "inline-block";
    webList.appendChild(select);
    console.log(webList);
   // console.log(webApp);

}




function checkValidation(arr){

    for(var i=0; i < arr.length; i++){
        // check names fields
        if(i%2 === 0 ){
                // check empty name validation
                if(arr[i].value === "" && arr[i+1].value !== ""){
                    arr[i].setAttribute("required","");
                    arr[i].focus();
                    return false;
                }
            }
        // check URLs fields
        else{
               // check empty  name validation
                if(arr[i].value === "" && arr[i-1].value !== ""){
                    arr[i].setAttribute("required","true");
                    arr[i].focus();
                    return false;

                }
        }
    }
}
