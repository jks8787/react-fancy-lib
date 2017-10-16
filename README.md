# Install:
* npm install react-fancy-lib

# Use In Given an App:
```
// in App.js of given App
import React, { Component } from 'react';
import 'react-fancy-lib/build/style.css';
import { Button, FancyMessage } from 'react-fancy-lib';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fancy React Component Showcase</h1>
        </header>
        <h2>Button Component</h2>
        <Button />
        <h2>FancyMessage Component</h2>
        <FancyMessage />
      </div>
    );
  }
}

export default App;
```

# Set Up For Local Use:
* git clone
* npm install
* npm run test
* npm run build

# Use In Given an App Locally:
* npm adduser
* npm link ( in the react-fancy-lib dir)
* npm link react-fancy-lib ( in the given App dir)

```
// in App.js of given App
import React, { Component } from 'react';
import 'react-fancy-lib/build/style.css';
import { Button, FancyMessage } from 'react-fancy-lib';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fancy React Component Showcase</h1>
        </header>
        <h2>Button Component</h2>
        <Button />
        <h2>FancyMessage Component</h2>
        <FancyMessage />
      </div>
    );
  }
}

export default App;
```
