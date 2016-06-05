/**
 * Created by Mor on 01-Jun-16.
 */
var setNameUrl = document.querySelector('.new-tab');


var display = true;
setNameUrl.onclick = function() {
    this.parentNode.parentNode.childNodes[3].hidden = display;
    display = !display;

    this.parentNode.style.backgroundColor = "transparent"
};


var tabs = document.querySelectorAll(".tabs > ul > li");


function changeBackground(tabs) {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.background = "transparent";
        div[i].style.display = "none";
    }
}

var div = document.querySelectorAll(".tabs > div");
console.log(div);

for (var index in tabs) {

    if (tabs[index].nodeType === 1) {
            let i = index;
        console.log(div[i]);
            tabs[index].onclick = function() {
                changeBackground(tabs);
                this.style.background = "rgba(235,235,235,1)";
                div[i].style.display = "inline-block";
                console.log(i)

            };

    }
}
