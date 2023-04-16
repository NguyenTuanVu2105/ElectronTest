import React, { useState } from 'react';
import DocViewer, {DocViewerRenderers} from "react-doc-viewer";

function PowerpointViewer() {
    const docs = [
      { uri: require("./samplepptx.pptx") },
    ];
  
    return <DocViewer
            pluginRenderers={DocViewerRenderers} 
            documents={docs} />;
}
  
  export default PowerpointViewer;