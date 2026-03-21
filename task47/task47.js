// 47. OTP Input UI 
// HTML Design 
// [ ] [ ] [ ] [ ] [ ] [ ] 
// Behaviour 
// • Each box accepts 1 digit 
// • Auto move to next box 
// • Backspace goes to previous.

// const inputs = document.getElementById("inputbox")

// inputs.addEventListener('input', (e) => {
//     const target = e.target

//     const val=target.value

//     if (isNaN(val)) {
//         target.value = ''
//         return
//     }

//     if (val != '') {
//         const next=target.nextElementSibling
//         if (next) {
//             next.focus()
//         }
//     }
// })

// inputs.addEventListener('keyup', (e) => {
//     const target = e.target

//     const key=e.key.toLowerCase()
//     if (key == "backspace" || key == "delete") {
//         target.value = ''
//         const prev = target.previousElementSibling

//         if (prev) {
//             prev.focus()
//         }
//         return
//     }
// })




const inputs = document.getElementById("inputbox");

inputs.addEventListener("input", function (e) {
    const target = e.target;
    const val = target.value;

    if (isNaN(val)) {
        target.value = "";
        return;
    }

    if (val != "") {
        const next = target.nextElementSibling;
        if (next) {
            next.focus();
        }
    }
});

inputs.addEventListener("keyup", function (e) {
    const target = e.target;
    const key = e.key.toLowerCase();

    if (key == "backspace" || key == "delete") {
        target.value = "";
        const prev = target.previousElementSibling;
        if (prev) {
            prev.focus();
        }
        return;
    }
});