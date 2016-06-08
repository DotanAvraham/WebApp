/**
 * Created by Mor on 01-Jun-16.
 */

var webApp = {
    url : {
        "inputUrl1":" ",
        "inputUrl2":" ",
        "inputUrl3":" ",
        "inputUrl4":" ",
        "inputUrl5":" ",
        "inputUrl6":" "
    },
    name : {
        inputName1: " ",
        inputName2: " ",
        inputName3: " ",
        inputName4: " ",
        inputName5: " ",
        inputName6: " ",
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


saveButton[1].onclick = submitButton;
saveButton[0].onclick = submitButton;

    function submitButton(e){


        var input = document.querySelectorAll('.reports-input > input');
        var arr = Array.prototype.slice.call(input);


        /*     */

        this.id === "quick-reports-submit" ?  arr = arr.slice(0,6) : arr = arr.splice(6,arr.length-1);
/*        if(this.id === "quick-reports-submit"){
            arr.slice(0,6);
        }else{
            arr.splice(6,arr.length-1);
        }*/
        checkValidation(arr);


   //     arr[0].value = 'blblblbllb';


  //  console.log(this.id);
    //    console.log(arr);

        e.preventDefault();


    }

function checkValidation(arr){

    for(var i=0; i < arr.length; i++){
     //   console.log("index:" +i + " value: " + arr[i].value );
        // check name fields
        if(i%2 === 0){
          //  arr[i].value = "name " + i;
            if(arr[i].value === "")
            arr[i].style.required;
        }
        // check URL fields
        else{
           // arr[i].value = "URL " + i;
          //  arr[i].style.required = "true";
        }


    }


}