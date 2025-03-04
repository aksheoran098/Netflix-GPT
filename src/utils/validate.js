let checkValidData = (email, password) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  let isEmailValid = emailRegex.test(email);
  let isPasswordValid = passwordRegex.test(password);

  if (!isEmailValid) return "⊗ Email ID is not valid!";
  if (!isPasswordValid) return "⊗ Password is not valid!";
  return null;
};

export default checkValidData;
