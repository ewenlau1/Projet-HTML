function registerButtonClick() {
    var submitted_email = document.getElementById('email-input').value;
    var submitted_username = document.getElementById('username-input').value;
    var submitted_password = document.getElementById('password-input').value;
    var submitted_password_confirmation = document.getElementById('password-input-2').value;

    if (submitted_password_confirmation === submitted_password_confirmation) {
        alert('Les mots de passe sont différents!')
    } else {
        alert('Les mots de passe sont pareils')
    }

}