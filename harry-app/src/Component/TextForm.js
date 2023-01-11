import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState("Enter text here")

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className='container'>
                <h1 className='text-primary'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        onChange={handleOnChange}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="8"
                        value={text}>
                    </textarea>
                </div>
                <button
                    onClick={handleUpClick}
                    className="btn btn-primary m-2">
                    Conert to Uppercase
                </button>
                <button
                    onClick={handleLowClick}
                    className="btn btn-primary m-2">
                    Conert to Lowercase
                </button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </>
    )
}

export default TextForm;
