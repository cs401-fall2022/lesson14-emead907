/**
 * This returns the string hello
 * @returns the String hello
 */
function hello (): String {
    return "Hello World!";
};

function grow() {
    let message: string = 'Hello World!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = message;
// add the heading the document
document.body.appendChild(heading);
    if(document != null){
        let c = document.getElementById("growts").style.fontSize;
        let d = document.getElementById("growts").style.color;
        if(c === 'black'){
            document.getElementById("growts").style.color = "pink";
            document.getElementById("growts").style.fontSize = "30px";
        }
        else{
            document.getElementById("growts").style.color = "black";
            document.getElementById("growts").style.fontSize = "15px";
        }
    }
}
export{hello, grow}
