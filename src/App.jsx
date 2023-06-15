import { useState } from 'react';
import text from './data';
import { nanoid } from 'nanoid';

const App = () => {
  const [paragraphs, setParagraphs] = useState(1);
  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setData(text.slice(0, paragraphs));
  }

  return (
    <div className='section-center'>
      <h4>Tired of boring lorem ipsum</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs: </label>
        <input
          type='number'
          id='amount'
          min='1'
          step='1'
          max='8'
          value={paragraphs}
          onChange={(e) => {
            setParagraphs(e.target.value);
          }}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <div className='lorem-text'>
        {data.map((paragraph) => {
          return <p key={nanoid()}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
};
export default App;
