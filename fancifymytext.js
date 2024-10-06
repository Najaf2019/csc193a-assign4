function showAlert (){
    alert("Hello, World!");
}


document.getElementById("biggerButton").onclick = function () {
    document.getElementById("userText").style.fontSize = "24pt";
    showAlert();
}

function styleText (){
    var textArea = document.getElementById("userText");
    var fancyRadio = document.getElementById("fancyRadio");
    var boringRadio = document.getElementById("boringRadio");

    if (fancyRadio.checked){
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";

    }
    else if (boringRadio.checked){
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }


}

function mooText (){
    var textArea = document.getElementById("userText");
    
    var text = textArea.value;
    var uppercasaeText = text.toUpperCase();
    
    var sentences = uppercasaeText.split('.');
    for (var i=0; i<sentences.length;i++){
        sentences[i] = sentences[i].trim();
        if(sentences[i]){
            var lastWordIndex = sentences[i].lastIndexOf(' ');
            if (lastWordIndex !== -1) {
                sentences[i] = sentences[i].slice(0, lastWordIndex + 1) + sentences[i].slice(lastWordIndex + 1) + "-Moo";
            } else {
                sentences[i] += "-Moo";
            }
        }
    }


    textArea.value = sentences.join('. ') + (sentences.length > 0 && sentences[sentences.length - 1] ? '.' : '');

}