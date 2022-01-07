import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
const FeedbackContext = createContext();

const feedbackData = [
  { id: 1, text: 'This is Feedback 1', rating: 10 },
  { id: 2, text: 'This is Feedback 2', rating: 8 },
  { id: 3, text: 'This is Feedback 3', rating: 4 },
];

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  //* Delete a Feedback
  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  //* Adding New Feedback
  const addFeedback = (addFeedback) => {
    addFeedback.id = uuid();
    setFeedback([addFeedback, ...feedback]);
  };

  //* Edit Feedback
  const editFeedbackItem = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  //* Update Feedback
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        addFeedback,
        editFeedbackItem,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackContext };
export default FeedbackProvider;
