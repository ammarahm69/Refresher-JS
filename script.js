function chat() {
    let inputfeild = document.getElementById('inp');
    let button = document.getElementById('btn');
    let msgoutput = document.getElementById('q');
    if (inputfeild.value == 'hi') {
        msgoutput.innerHTML += `<li>Hello how I can assit you ?</li>`
    } else if (inputfeild.value == 'how are you ?') {
        msgoutput.innerHTML += `I'm fine .`
    }
}