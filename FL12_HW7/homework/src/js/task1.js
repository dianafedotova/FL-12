let userEmail;
    let emptyString = '';
    let credentialsMap = new Map();
    credentialsMap.set('user@gmail.com', 'UserPass');
    credentialsMap.set('admin@gmail.com', 'AdminPass');
    let canceledMessage = 'Canceled';
    let inputYourEmailAddressMessage = 'Please, input your email address:';
    let lessThenFiveSymbolsMessage = 'I don\'t know any emails having name length less than 5 symbols';
    let noValidEmailMessage = 'I don\'t know you';
    let wrongPasswordMessage = 'Wrong password';
    let passwordChangeConfirmationMessage = 'Do you want to change your password?';
    let passwordChangeCanceledMessage = 'You have failed the change.';
    let enterYourPasswordMessage = 'Please, enter your password:';
    let typeOldPasswordMessage = 'Please, type old password:';
    let newPasswordMessage = 'Please, enter new password:';
    let toShortPasswordMessage = 'It\'s too short password';
    let confirmNewPasswordMessage = 'Please, confirm new password:';
    let wrongNewPasswordMessage = 'You wrote the wrong password.';
    let passwordChangeSucceedMessage = 'You have successfully changed your password.';
    const minimumEmailLength = 5;
    const minimumPasswordLength = 6;
    let newPassword;

    let emailValidationStepPassed = false;
    let passwordVerificationStepPassed = false;
    let passwordChangeConfirmationStepPassed = false;
    let newPasswordVerificationStepPassed = false;

    userEmail = prompt(inputYourEmailAddressMessage, emptyString);

    if (!userEmail || userEmail.trim() === emptyString) {
        alert(canceledMessage);
    } else if (userEmail.length < minimumEmailLength) {
        alert(lessThenFiveSymbolsMessage);
    } else if (credentialsMap.has(userEmail)) {
        emailValidationStepPassed = true;
    } else {
        alert(noValidEmailMessage);
    }

    if (emailValidationStepPassed) {
        let userPassword = prompt(enterYourPasswordMessage, emptyString);
        if (!userPassword || userPassword.trim() === emptyString) {
            alert(canceledMessage);
        } else if (credentialsMap.get(userEmail) === userPassword) {
            passwordVerificationStepPassed = true;
        } else {
            alert(wrongPasswordMessage);
        }
    }

    if (passwordVerificationStepPassed) {
        if (confirm(passwordChangeConfirmationMessage)) {
            let confirmedPassword = prompt(typeOldPasswordMessage, emptyString);
            if (!confirmedPassword || confirmedPassword.trim() === emptyString) {
                alert(canceledMessage);
            } else if (credentialsMap.get(userEmail) === confirmedPassword) {
                passwordChangeConfirmationStepPassed = true;
            }
        } else {
            alert(passwordChangeCanceledMessage);
        }
    }

    if (passwordChangeConfirmationStepPassed) {
        newPassword = prompt(newPasswordMessage, emptyString);
        if (!newPassword || newPassword.trim() === emptyString) {
            alert(canceledMessage);
        } else if (newPassword.length < minimumPasswordLength) {
            alert(toShortPasswordMessage);
        } else {
            newPasswordVerificationStepPassed = true;
        }
    }

    if (newPasswordVerificationStepPassed) {
        let confirmedNewPassword = prompt(confirmNewPasswordMessage, emptyString);
        if (newPassword !== confirmedNewPassword) {
            alert(wrongNewPasswordMessage);
        } else {
            alert(passwordChangeSucceedMessage);
        }
    }