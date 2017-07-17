import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { LibraryContainer } from './views/containers/Library';

ReactDOM.render(
  <LibraryContainer/>,
  document.getElementById("application")
);
