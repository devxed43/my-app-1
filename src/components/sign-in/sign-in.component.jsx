import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button";
import "./sign-in.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

const defaultFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  // formFields is empty
  const [formFields, setFormFields] = useState(defaultFields);
  // pick off email and password from the initial empty fields
  const { email, password } = formFields;

  // reset form fieldsu
  const resetFormFields = () => {
    setFormFields(defaultFields);
  };

  // sign in & create user document in the database
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  // submit form data
  const handleSubmit = async (event) => {
    event.preventDefault();

    // try signing the user in, take their email and password
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      console.log(user);

      resetFormFields();
    } catch (error) {
      // switch statement of error codes if error occurs
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  // input data changing
  const handleChange = (event) => {
    // target value of name and value which are on our input elements
    const { name, value } = event.target;

    // set with initial values, update with name:value
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          // name && value are targeted
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          // name && value are targeted
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
