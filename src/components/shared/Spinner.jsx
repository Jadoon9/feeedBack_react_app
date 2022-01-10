import spinner from '../../assets/spinner.gif';

const Spinner = () => {
  return (
    <img
      src={spinner}
      alt='loading spinner'
      alr='Loading...'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  );
};

export default Spinner;
