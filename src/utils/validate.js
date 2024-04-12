export const valideData = (
  email,
  password,
  validateName = false,
  name = null
) => {
  const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  return validateName
    ? {
        emailValidMssg: isEmailValid
          ? null
          : "Please enter a valid email address.",
        passwordValidMssg: isPasswordValid
          ? null
          : "Your password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.",
        nameValidMssg: isNameValid ? null : "Please enter valid name.",
        isInputValid: isNameValid && isEmailValid && isPasswordValid,
      }
    : {
        emailValidMssg: isEmailValid
          ? null
          : "Please enter a valid email address.",
        passwordValidMssg: isPasswordValid
          ? null
          : "Your password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.",
        nameValidMssg: null,
        isInputValid: isEmailValid && isPasswordValid,
      };
};
