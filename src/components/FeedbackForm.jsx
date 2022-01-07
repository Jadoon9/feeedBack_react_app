import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { FeedbackContext } from '../context/FeedbackContext';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState('');

  const { addFeedback, editFeedback, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (editFeedback.edit === true) {
      setIsDisabled(false);
      setText(editFeedback.item.text);
      setRating(editFeedback.item.rating);
    }
  }, [editFeedback]);

  const reviewChangeHandler = (e) => {
    //* Validating for review Input Form
    if (text === '') {
      setMessage(null);
      setIsDisabled(true);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Review must be at least 10 characters');
      setIsDisabled(true);
    } else {
      setMessage(null);
      setIsDisabled(false);
    }
    setText(e.target.value);
  };

  //* Form Submit
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (editFeedback.edit) {
        updateFeedback(editFeedback.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setMessage('');
    }
  };
  return (
    <Card>
      <form onSubmit={formSubmitHandler}>
        <h2>How would you like to rate us</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Enter your Review'
            onChange={reviewChangeHandler}
            value={text}
          />
          <Button type='submit' version='btn-secondary' isDisabled={isDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
