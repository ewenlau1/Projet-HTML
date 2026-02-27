function registerButtonClick() {
    var submitted_email = document.getElementById('email-input').value;
    var submitted_username = document.getElementById('username-input').value;
    var submitted_password = document.getElementById('password-input').value;
    var submitted_password_confirmation = document.getElementById('password-input-2').value;

    if (!submitted_password == submitted_password_confirmation) {
        document.getElementById("wrong-confirm").innerHTML = "<br><span class=red>Mot de passe différents</span>";
        return;
    }

    //emailregex.com
    const emailRegex = /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

    if (!emailRegex.test(submitted_email)) {
        document.getElementById("wrong-email").innerHTML = "<br><span class=red>Format d'email invalide</span>";
        return;
    } else {
        document.getElementById("wrong-email").innerHTML = "";
    }

    //https://uibakery.io/regex-library/password
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!passwordRegex.test(submitted_password)) {
        document.getElementById("wrong-password").innerHTML = "<br><span class=red>Veuillez inclure au moins 8 charactères dont une lettre miniscule, une lettre majuscule, un chiffre et un charactère spécial dans votre mot de passe.</span>";
        return;
    } else {
        document.getElementById("wrong-email").innerHTML = "";
    }

    createUser(submitted_email, submitted_password, submitted_username);

    window.location.href = "succes";

}

function createUser(i_email, i_password, i_username) {

    //Check if userInfo objet already exists, else create new
    let userInfo;

    if (localStorage.getItem("userInfo") === null) {
        userInfo = {};
    } else {
        userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }

    //Check if username already exists
    if (Object.hasOwn(userInfo, i_username)) {
        document.getElementById("wrong-username").innerHTML = "<br><span class=red>Nom d'utilisateur indisponible</span>";
        return;
    } else {
        document.getElementById("wrong-email").innerHTML = "";
    }

    //Hash password
    //TBD

    userInfo[i_username] = {
        email: i_email,
        password: i_password,
    }

    localStorage.setItem('userInfo', JSON.stringify(userInfo));
    sessionStorage.setItem('userJustCreated', JSON.stringify(true));
    sessionStorage.setItem('newlyCreatedUsername', JSON.stringify(i_username));
}