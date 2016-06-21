import React from 'react';
import {render} from 'react-dom';

/*
new webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("production")
  }
});
*/

class App extends React.Component {
    render() {
        return <p>
            Hello React!</p>;
    }
}

render(
    <App/>, document.getElementById('app'));
