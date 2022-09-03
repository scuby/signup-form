// signup-form

const form = document.querySelector('form');
const passwordInit = form.elements.initPassword;
const passwordConf = form.elements.confPassword;
const matchIcon = document.createElement('div');

passwordInit.addEventListener('input', () => {
    matchIcon.textContent = "";
    if (passwordInit.value != "") {
        passwordConf.removeAttribute("disabled");
        passwordMatchStatus("blank");
    } else if (passwordConf.value != "" && passwordInit.value == "") {
        passwordConf.value = "";
        passwordConf.setAttribute("disabled", true);
        passwordMatchStatus("blank");
        if (passwordConf.classList != "") {
            passwordMatchStatus("blank");
        }
    } else { passwordConf.setAttribute("disabled", true); }
});

passwordConf.addEventListener('input', () => {
    if (passwordInit.value == passwordConf.value) {
        passwordMatchStatus("match");
    } else {
        passwordMatchStatus("blank");
    }
});

passwordConf.addEventListener('focusout', () => {
    if (passwordInit.value == "") {
        passwordConf.value = "";
    } else if (passwordInit.value == passwordConf.value) {
        passwordMatchStatus("match");
        matchIcon.textContent = "";
        passwordConf.parentElement.appendChild(matchIcon);
    } else {
        passwordMatchStatus("mismatch");
    }
});

function passwordMatchStatus(match) {
    switch (match) {
        case "match":
            passwordInit.classList = "match";
            passwordConf.classList = "match";
            break;
        case "mismatch":
            passwordInit.classList = "mismatch";
            passwordConf.classList = "mismatch";
            matchIcon.textContent = "* Passwords do not match";
            matchIcon.classList.add("mismatchIcon");
            passwordConf.parentElement.appendChild(matchIcon);
            break;
        default:
            passwordInit.classList = "";
            passwordConf.classList = "";
    }
}