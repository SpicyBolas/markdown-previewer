import './App.css';
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { FaHashtag } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/esm/styles/prism';

function App() {
  
  const dispatch = useDispatch();
  //Get the current state text and display in the text area 
  const text = useSelector(state => state.inputText);

  //define a function to detect changes in the textarea
  function handleChange(e) {
    const newText = e.target.value;

    dispatch({type: 'updateMarkdown',payload: newText})
  } 

  return (
    <div className="App">
      <div className="window editor">
        <div className="header">
          <div id="header-left">
            <FaHashtag size={10} />
            <p>Editor</p>
          </div>
          <div id="header-right">
            <AiOutlineFullscreen />
          </div>
        </div>
        <div className="ed-wrap">
          <textarea id="editor" onChange={handleChange} value={text}>
            {text}
          </textarea>
        </div>
      </div>
      <div className="window preview">
        <div className="header">
          <div id="header-left">
            <FaHashtag size={10} />
            <p>Previewer</p>
          </div>
          <div id="header-right">
            <AiOutlineFullscreen />
          </div>
        </div>
        <div id="preview">
          <Markdown
            children={text}
            components={{
              code(props){
                const {children, className, node, ...rest} = props
                return (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children)}
                    language="javascript"
                    style={dracula}
                  />
                  )
              }
            }} 
          
          
          />
        </div>
      </div>
    </div>
  );
}

export default App;
