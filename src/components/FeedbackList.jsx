import FeedbackItem from './FeedbackItem';
import { useContext } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  return (
    <>
      {(feedback || feedback.length === 0) && !isLoading ? (
        feedback.map((fed) => <FeedbackItem item={fed} key={fed.id} />)
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default FeedbackList;
