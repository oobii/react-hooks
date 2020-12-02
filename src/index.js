import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const App = (props) => {
const [count, setCount] = useState(2)
const [text, setText] = useState('')

  return (
    <div>
      <p>
        The current {text} is {count}
      </p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <input onChange={(event) => setText(event.target.value)}></input>
    </div>
  )
}

App.defaultProps = {
  count: 3
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
