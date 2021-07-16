document.onkeydown = function(e) { 
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {} 
    return false; 
}; 

function click(event) { 
    if (event.button == 2 || event.button == 3) { 
        oncontextmenu='return false'; 
    }
} 
document.onmousedown=click 
document.oncontextmenu = new Function("return false;") 

function disableWheelScroll() { 
    if (document.body.addEventListener) document.body.addEventListener('DOMMouseScroll', blockWheel, false);
    document.body.onmousewheel = blockWheel;
}

function blockWheel(event) {
    if (!event) event = window.event;
    if (event.stopPropagation) event.stopPropagation();
    else event.cancelBubble = true;
    if(event.preventDefault) event.preventDefault();
    else event.returnValue = false;
}

disableWheelScroll();