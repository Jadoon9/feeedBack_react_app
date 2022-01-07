import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import { FeedbackContext } from '../context/FeedbackContext';

const FeedbackItem = ({ item }) => {
  const { handleDelete, editFeedbackItem } = useContext(FeedbackContext);
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='edit' onClick={() => editFeedbackItem(item)}>
        <FaEdit color='purple' />
      </button>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
