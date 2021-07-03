var name_display = []

function submit() {

    var value_names = document.getElementById("n_1").value;
    name_display.push(value_names);
    document.getElementById("display_names").innerHTML = name_display;


}

function show() {

    document.getElementById("show_names").innerHTML = name_display.join("<br>");
    document.getElementById("show").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";

}

function sorted() {

    
    document.getElementById("show_names").innerHTML=name_display.sort().join("<br>");


}
function search(){

var s=document.getElementById("search_1").value;
var found=0;
var j;

for(j=0;j<show_names.length;j++){

if(s==show_names[j]){
found=found+1;
}

}
}
document.getElementById("display_names").innerHTML="Name found"+found+"time/s";
console.log("found name"+found+"time/s");