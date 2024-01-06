function getData(e) {
    console.log("CALLED", e.target.value)
}

const handleDebounce = function (fn, delay) {
    let id = null;
    return function () {
        clearInterval(id);
        id = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}

const debounce = handleDebounce(getData, 300);


function clickMe() {
    let isWaiting = false;
    return function() {
        if(!isWaiting) {
            isWaiting = true;

            setTimeout(() => {
                console.log("Clicked!");
                isWaiting = false;
            }, 1000)
        }
    }
}

const throttle = clickMe();