import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);
  return (
    <>
      {feedback ? (
        feedback.map((fed) => <FeedbackItem item={fed} key={fed.id} />)
      ) : (
        <p>No Data</p>
      )}
    </>
  );
};

export default FeedbackList;
