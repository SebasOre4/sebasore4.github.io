var year = new Date().getFullYear();
var elem = document.getElementById('copy-rigth')
elem.innerHTML = '© '+year;

function copiar(){
    /* Get the text field */
    var copyText = document.getElementById('linkToCopy');

    /* Copy the text to clipboard */
    navigator.clipboard.writeText(copyText.innerHTML);
    
    /* Alert the copied text */
    alert("Copied in Clipboard");
}