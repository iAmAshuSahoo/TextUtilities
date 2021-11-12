import React, {useState, useRef} from 'react';
import './TextForm.css'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const goalValue = useRef(0);
    const [goal, setGoal] = useState(0);
    const [basicLayout, setbasicLayout] = useState(true);

    const handleChangeEvent = (event) => {
        setText(event.target.value);
        // console.log("Inside OnChange");
    }

    const handleUpperClickEvent = () => {
        // console.log("Inside OnClick");
        const newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClickEvent = () => {
        // console.log("Inside OnClick");
        const newText = text.toLowerCase();
        setText(newText);
    }

    const wordCount = () => {
        const word = text.split(" ");
        if (word[word.length - 1]) {
            return word;
        }
        word.pop();
        return word;
    }

    const sentenceCount = () => {
        const sentence = text.split(".");
        if (sentence[sentence.length - 1]) {
            return sentence;
        }
        sentence.pop();
        return sentence;
    }

    const paragraphCount = () => {
        const paragraph = text.split("\n").filter(item => 
            { 
                if (item) 
                { 
                    return item 
                } 
                return false
            } 
        );
        if (paragraph[paragraph.length - 1]) {
            return paragraph;
        }
        paragraph.pop();
        return paragraph;
    }

    const minutesRead = () => {
        const minutes = 0.008 * wordCount().length;
        if (minutes > 0) {
            return Math.round(minutes * 100) / 100;
        }
        return minutes;
    }

    const speakingTime = () => {
        const minutes = 0.004 * wordCount().length;
        if (minutes > 0) {
            return Math.round(minutes * 100) / 100;
        }
        return minutes;
    }

    const handleLayout = () => {
        setbasicLayout(!basicLayout);
    }

    const handleGoal = () => {
        setGoal(goalValue.current.value);
        goalValue.current.value = 0;
    }
    return (
        <>
            <div className="mb-3">
                <h1 className="my-3">{props.heading}</h1>
                <label htmlFor="myBox" className="form-label">Example textarea</label>
                <textarea className="form-control mb-3" value={text} id="myBox" rows="8" 
                    onChange={handleChangeEvent} placeholder="Enter value to convert"></textarea>
                <button className="btn btn-success mx-1" onClick={handleUpperClickEvent}>Convert To UpperCase</button>
                <button className="btn btn-success mx-1" onClick={handleLowerClickEvent}>Convert To LowerCase</button>
                <button className="btn btn-success mx-1" onClick={handleGoal}>Select Writing Goal</button>
            </div>
            <div className="d-flex my-3 justify-content-between">
                <div className="text-summary">
                    <h2 className="">Your Word Summary</h2>
                    <p>{wordCount().length} words and {text.length} characters</p>
                    <p>
                        {minutesRead()} minutes read
                        
                        <button 
                            className={`${basicLayout ? 'btn-info' : 'btn-primary'} btn mx-3`} 
                            onClick={handleLayout}>
                                {basicLayout ? 'Hide Details' : 'Show Details'}
                        </button>
                    </p>
                    <div className="mb-3">
                        <label for="wordGoal" className="form-label">Enter word goal (only numbers)</label>
                        <button 
                            className="btn btn-warning mx-3 my-3"
                            onClick={handleGoal}>
                                Set Goal
                        </button>
                        <input ref={goalValue} type="number" className="form-control" id="wordGoal" placeholder="500" />
                    </div>
                    {goal > 0 ? 
                    <p>Selected Goal {goal}</p> : null}
                    {/* {wordCount().length >= goal ?
                        <div className="modal" tabIndex="-1">
                            <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                <p>Modal body text goes here.</p>
                                </div>
                                <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                            </div>
                        </div> 
                    : null} */}
                    {text.length > 0 ?
                        <>
                        <h2>Text Preview :</h2>
                        <p>{text}</p>
                        </> : null
                    }
                </div>
                {basicLayout ? 
                <div>
                    <h2>Other Details</h2>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                            <td>Words</td>
                            <td className="detail"><span className="table-badge">{wordCount().length}</span></td>
                            </tr>
                            <tr>
                            <td>Characters</td>
                            <td className="detail"><span className="table-badge">{text.length}</span></td>
                            </tr>
                            <tr>
                            <td>Sentences</td>
                            <td className="detail"><span className="table-badge">{sentenceCount().length}</span></td>
                            </tr>
                            <tr>
                            <td>Paragraphs</td>
                            <td className="detail"><span className="table-badge">{paragraphCount().length}</span></td>
                            </tr>
                            <tr>
                            <td>Reading Time</td>
                            <td className="detail"><span className="table-badge">{minutesRead()} minutes</span></td>
                            </tr>
                            <tr>
                            <td>Speaking Time</td>
                            <td className="detail"><span className="table-badge">{speakingTime()} minutes</span></td>
                            </tr>
                        </tbody>
                    </table>         
                    
                </div> : null}
            </div>
        </>
    )
}