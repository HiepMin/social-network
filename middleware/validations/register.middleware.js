const isEmpty = require('./isEmpty.validate');
const { isLength, isEmail, equals } = require('validator');

const validateErrors = {
    usn: {
        empty: 'username field is required',
        length: (min, max) => `username must be between ${min} and ${max} characters`
    },
    mail: {
        empty: 'email field is required',
        format: 'email is not correct'
    },
    psw: {
        empty: 'password field is required',
        length: (min, max) => `password must be between ${min} and ${max} characters`
    },
    confPasw: {
        empty: 'please confirm your password',
        compare: 'failed to confirm password'
    }
}

const validateField = data => {
    const errors = {};
    const { usn, mail, psw, confPasw } = validateErrors;
    let { username, password, email, passConfirm } = data;
    username = !isEmpty(username) ? username : '';
    password = !isEmpty(password) ? password : '';
    email = !isEmpty(email) ? email : '';

    // check username: empty, min: 4, max: 12
    if (isEmpty(username)) {
        errors.username = usn.empty;
    } else {
        if (!isLength(username, { min: 5, max: 12 })) {
            errors.username = usn.length(5, 12);
        }
    }
    // check email: empty, format
    if (isEmpty(email)) {
        errors.email = mail.empty;
    } else {
        if (!isEmail(email)) {
            errors.email = mail.format;
        }
    }
    // check password: empty, min: 6, max: 30
    if (isEmpty(password)) {
        errors.password = psw.empty;
    } else {
        if (!isLength(password, { min: 6, max: 30 })) {
            errors.password = psw.length(6, 30);
        }
    }
    // check pass confirm: empty, equal with password
    if (isEmpty(passConfirm)) {
        errors.passConfirm = confPasw.empty;
    } else {
        if (!equals(passConfirm, password)) {
            errors.passConfirm = confPasw.compare;
        }
    }
    return {
        isValid: isEmpty(errors),
        errors
    }
}

module.exports = (req, res, next) => {
    const { isValid, errors } = validateField(req.body);
    if (!isValid) return res.status(400).json(errors);
    next();
}

