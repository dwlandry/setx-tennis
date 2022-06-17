import { getRedirectResult } from 'firebase/auth';
import { useEffect, useState } from 'react';
import {
  auth,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  // signInWithGooglePopup,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // check to see if the user has been authenticated with the email and password
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
        case 'auth/user-not-found':
          alert('error logging in');
          break;
        default:
          console.log(error);
      }
    }

    // create a user document from what is returned from createUserWithEmailAndPassword
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  useEffect(() => {
    // Use this effect so that this code runs ONLY when this component mounts the first time
    async function fetchData() {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    }
    fetchData();
  }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   await createUserDocumentFromAuth(user);
  // };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          inputOptions={{
            type: 'email',
            required: true,
            onChange: handleChange,
            name: 'email',
            value: email,
          }}
        />

        <FormInput
          label='Password'
          inputOptions={{
            type: 'password',
            required: true,
            onChange: handleChange,
            name: 'password',
            value: password,
          }}
        />
        <div className='buttons-container'>
          <Button type='submit' title='sign in with email and password'>
            Sign In
          </Button>

          {/* <Button
            type='button'
            buttonType='google'
            title='sign in with google popup'
            onClick={logGoogleUser}>
            <i className='bi bi-google'> </i>
            Sign in with Google
          </Button> */}

          <Button
            type='button'
            buttonType='google'
            title='sign in with google redirect'
            onClick={signInWithGoogleRedirect}>
            <i className='bi bi-google'> </i>
            Sign in with Google
          </Button>

          {/* <button type='button' title='sign in with facebook' disabled={true}>
            <i className='bi bi-facebook'> </i>
            Sign in with Facebook
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
