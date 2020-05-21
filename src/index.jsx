import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './containers/App';

// Styles
import '../assets/stylesheets/application.scss';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}
