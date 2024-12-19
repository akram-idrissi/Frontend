export const validateUsername = (username) => {
    if (!username.trim()) {
        return "Username is required.";
    }
    return null;
};

export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.trim()) {
        return "Email is required.";
    }
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address.";
    }
    return null;
};

export const validatePassword = (password) => {
    if (!password.trim()) {
        return "Password is required.";
    }
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }
   
    return null;
};

export const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword.trim()) {
        return "Confirm password is required.";
    }
    if (password !== confirmPassword) {
        return "Passwords do not match.";
    }
    return null;
};