const codeKeyP = document.getElementById("codeKeyChange");
const eventCodeP = document.getElementById("eventCodeChange");
const eventWhichP = document.getElementById("eventWhichChange");
const input = document.getElementById("text")

//event.key (h)
//event.code (KeyH)
//event.which (72)

function keyCode(){
    let key = event.key;
    console.log(key);
    codeKeyP.innerHTML = key;

}

function eventCode() {
    let code = event.code;
    console.log(code);
    eventCodeP.innerHTML = code;
   
}

function eventWhich() {
    let which = event.which;
    console.log(which);
    eventWhichP.innerHTML = which;
}