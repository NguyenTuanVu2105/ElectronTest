import React from 'react';
import PPTXViewer from './PowerPoint';

class App extends React.Component {
  render() {
    const filePath = 'path/to/your/pptx/file';
    return <PPTXViewer filePath={filePath} />;
  }
}

export default App;