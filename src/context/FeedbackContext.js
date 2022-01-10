import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  //* Delete a Feedback
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //* Adding New Feedback
  const addFeedback = async (addFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  //* Edit Feedback
  const editFeedbackItem = (item) => {
    setEditFeedback({
      item,
      edit: true,
    });
  };

  //* Update Feedback
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
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
