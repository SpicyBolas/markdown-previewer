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
  const boolPreview = useSelector(state=>state.boolPreview);
  const boolEditor = useSelector(state=>state.boolEditor);
  
  var editorCss = boolPreview ? 
  {
    width: '250px',
    padding: '0',
    margin: '0',
    border: '0',
    boxShadow: '0px 0px 3px 1px rgb(87, 86, 86)'
  }:
  {
    width: '500px',
    padding: '0',
    margin: '0',
    border: '0',
    boxShadow: '0px 0px 3px 1px rgb(87, 86, 86)'
  };

  //define a function to detect changes in the textarea
  function handleChange(e) {
    const newText = e.target.value;

    dispatch({type: 'updateMarkdown',payload: newText})
  }
  
  function onClickEditor(e){
    dispatch({type:'togglePreview'})
  }
  
  function onClickPreview(e){
    dispatch({type:'toggleEditor'})
  }

  return (
    <div className="App">
      {boolEditor &&
        <div className="window editor" style={editorCss}>
          <div className="header">
            <div id="header-left">
              <FaHashtag size={10} />
              <p>Editor</p>
            </div>
            <div id="header-right">
              {boolPreview ? 
                <AiOutlineFullscreen onClick={onClickEditor} /> :
                <AiOutlineFullscreenExit onClick={onClickEditor} />}
            </div>
          </div>
          <div className="ed-wrap">
            <textarea id="editor" onChange={handleChange} value={text}>
              {text}
            </textarea>
          </div>
        </div>
      }
      {boolPreview &&
        <div className="window preview">
          <div className="header">
            <div id="header-left">
              <FaHashtag size={10} />
              <p>Previewer</p>
            </div>
            <div id="header-right">
            {boolEditor ? 
                <AiOutlineFullscreen onClick={onClickPreview} /> :
                <AiOutlineFullscreenExit onClick={onClickPreview} />}
            </div>
          </div>
          <div id="preview">
            <Markdown
              children={text}
            />
          </div>
        </div>
      }
    </div>
  );
}

export default App;
