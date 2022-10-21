<<<<<<< HEAD
=======

>>>>>>> 6d1330e8b9e1bf94fe4dffea1de474a05f8d9442
/**
 * This returns the string hello
 * @returns the String hello
 */
function hello (): String {
    return "Hello World!";
};

function grow() {
    
    if(document != null){
        let c = document.getElementById("growts").style.fontSize;
        let d = document.getElementById("growts").style.color;
        if(d === 'black'){
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
