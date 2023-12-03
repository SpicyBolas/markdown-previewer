const initialState = {
    inputText: `# Markdown Renderer
## Write your Markdown in the Editor    
You can write single line code between two backticks: \`<div></div>\`.
\`\`\`
// this is multiline code:
function exampleFunc(param1,param2) {
    return param1 + param2;
}
\`\`\`
This is **bold** text.

You can also [link](https://www.freecodecamp.org) items and write:
>Block Quotes.

- And you can make lists.
    - By using hyphens.
        - Which are different at further indentations.
        
Feeling fancy? you can even render images!

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
}

export default function appReducer(state = initialState, action){
    switch(action.type) {
        case 'updateMarkdown':
            return {
                ...state,
                inputText: action.payload
            }
        default:
            //return state unchanged
        return state;
    }
}