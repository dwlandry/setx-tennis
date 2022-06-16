import './form-input.styles.scss';

const FormInput = ({ label, inputOptions }) => {
  //label and input field
  return (
    <div className='form-input-group'>
      <input className='form-input' {...inputOptions} />
      {label && (
        <label
          className={`${
            inputOptions.value.length ? 'shrink' : ''
          } form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
