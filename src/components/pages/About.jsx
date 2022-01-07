import Card from '../shared/Card';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Card>
      <div className='about'>
        <h1>This is About Page</h1>
        <p>This is the React App to leave Feedback for a product or service </p>
        <p>Version 1.0</p>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default About;
