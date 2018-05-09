import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/HumpdayDashboard';

//import {MuiThemeProvider, getMuiTheme} from 'material-ui';
// import App from './components/App.jsx'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'


// ReactDOM.render(
//   <MuiThemeProvider>
//     <div>
//       <Router>  
//         <App/>
//       </Router>
//     </div>
//   </MuiThemeProvider>, 
//   document.getElementById('app')
// );

ReactDOM.render(<App/>, document.getElementById('app'));