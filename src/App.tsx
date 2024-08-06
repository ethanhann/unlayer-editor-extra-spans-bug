import {useRef, useState} from 'react'
import './App.css'
import {Editor, EmailEditor} from 'react-email-editor';

function App() {
    const editorRef = useRef(null);
    const [html, setHtml] = useState<string>('')
    return (
        <>
            <EmailEditor
                ref={editorRef}
                onReady={(editor: Editor) => {
                    editor.addEventListener('design:updated', (event) => {
                        if (event.type === 'content:modified' && event.item.type === 'heading') {
                            console.log('heading:', event.changes.value);
                            setHtml(event.changes.value);
                        } else if (event.type === 'content:modified') {
                            console.log('other elements:', event.changes.value);
                            setHtml(event.changes.value);
                        }
                    });
                }}
            />

            <h2>Last changed value...</h2>
            <pre>{html}</pre>
        </>
    )
}

export default App
