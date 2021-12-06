// Lib
import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';


function App() {
  // State
  const [text, setText] = useState('# `Prévisualisateur - Markdown`\n\n\n### C\'est de la magie ?!\nEn réalité, pas vraiment : ceci s\'appelle du **markdown**. Dans ce projet, réalisé entièrement avec React, on le transformer en *HTML* !\n\n### Cas d\'utilisation\n\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1 : titre niveau 1\n* ## h2 : titre niveau 2\n* ### h3 : titre niveau 3\n* #### etc\n[Github Mariem Belgacem](https://github.com/bmariem)');

  // Methods
  const changeTextHandler = event => {
    setText(event.target.value);
  }

  const markdownToHTML = () => {
    return { __html: marked(text)};
  }
 

  // JSX
  return (
    <div className="App">
      <div className="elements">
        <div className="element">
          <textarea
            rows="30"
            value= {text}
            onChange = {(e) => changeTextHandler(e)}
          >

          </textarea>
        </div>
        <div className="element">
         <div dangerouslySetInnerHTML={markdownToHTML()}></div>
        </div>
      </div>
    


     
    </div>
  );
}

export default App;
