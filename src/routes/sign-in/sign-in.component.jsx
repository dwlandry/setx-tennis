import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <div className='sign-in-options'>
        <button title='sign in with google' onClick={logGoogleUser}>
          <i className='bi bi-google'> </i>
          Sign in with Google
        </button>
        <button title='sign in with facebook' disabled={true}>
          <i className='bi bi-facebook'> </i>
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignIn;
