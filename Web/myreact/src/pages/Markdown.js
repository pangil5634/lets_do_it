import React, {useState} from 'react';
import MDEditor from '@uiw/react-md-editor';
import {Div} from '../components/Menubar';

function Markdown() {
    // Define state variables
    const [mdinfo, setMD] = useState(''); // Assuming mdinfo is the markdown content
    const mkdStr = mdinfo; // Assuming mkdStr is the variable used in MDEditor.Markdown

    return (
        <Div flexDirection="column">
            <h1>마크다운 페이지</h1>
            <Div>
                <div
                    className="markarea"
                    style={{
                        padding: 15,
                        width: 500
                    }}>
                    <div data-color-mode="light">
                        <MDEditor height={865} value={mdinfo} onChange={setMD}/>
                    </div>
                </div>

                <div
                    className="markdownDiv"
                    data-color-mode="light"
                    style={{
                        padding: 15,
                        width: 500
                    }}>
                    <MDEditor.Markdown
                        style={{
                            padding: 10
                        }}
                        source={mkdStr}/>
                </div>
            </Div>
        </Div>
    );
}

export default Markdown;
