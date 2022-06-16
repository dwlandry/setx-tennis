import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import './sign-in.styles.scss';

const SignIn = () => {
  useEffect(() => {
    // Use this effect so that this code runs ONLY when this component mounts the first time
    async function fetchData() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }
    fetchData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <div className='sign-in-options'>
        <button title='sign in with google popup' onClick={logGoogleUser}>
          <i className='bi bi-google'> </i>
          Sign in with Google
        </button>

        <button
          title='sign in with google redirect'
          onClick={signInWithGoogleRedirect}>
          <i className='bi bi-google'> </i>
          Sign in with Google redirect
        </button>

        <button title='sign in with facebook' disabled={true}>
          <i className='bi bi-facebook'> </i>
          Sign in with Facebook
        </button>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
