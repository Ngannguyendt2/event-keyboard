
function onKeydown(event) {
    let element = document.getElementById('nobita');
    let topElement = parseInt(element.style.top);
    let leftElement = parseInt(element.style.left);
    console.log(leftElement);
    if (event.which === 38) {
        topElement -= 5;
        topElement += 'px';
        element.style.top = topElement;
    }
    if (event.which == 40) {
        topElement += 5;
        topElement += 'px';
        element.style.top = topElement;
    }
    if (event.which == 37) {
        leftElement -= 5;
        leftElement += 'px';
        element.style.left = leftElement;
    }
    if (event.which == 39) {
        leftElement += 5;
        leftElement += 'px';
        element.style.left = leftElement;
    }
}

function docReady() {
    window.addEventListener('keydown', onKeydown);
 }