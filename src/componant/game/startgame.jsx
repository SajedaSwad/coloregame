import { useState } from 'react';
import ColorCardTrying from '../HelpThing/colorCardTrying';
import FormButtonCard from '../HelpThing/formButtonCard';
import './startgame.css'
import ListTryingBlock from '../HelpThing/listTryingBlock';
import { checkAnswer, Compare, Question } from '../HelpThing/data';


const Startgame = (props) => {
    const [currentAnswer, setCurrentAnswer] = useState([]);
    const [list, setList] = useState([]);
    const [formColor, setFormColor] = useState(['blue', 'green', 'yellow', 'purple', 'pink']);
    const [isWin, setIsWin] = useState(false);
    const [rightAns, setRightAns] = useState(Question());
    const checkwin = (userAns) => {
        if (Compare(rightAns, userAns)) {
            setIsWin(true);
        }
    }
    const setCurrentAnswerForm = (color) => {

        if (currentAnswer.length < 3) {
            setCurrentAnswer([...currentAnswer, color])
        }
        else {
            const ans = [...currentAnswer, color];
            console.log('ans', ans);
            console.log('rightAns', rightAns);
            const stats = checkAnswer(ans, rightAns);
            console.log(stats);
            checkwin([...currentAnswer, color]);
            list.push({ colors: [...currentAnswer, color], states: stats })
            setList(list);
            setCurrentAnswer([]);

        }
    }



    return (
        <>
            <div className='all'>
                <div className='gameform'>

                    <h1>
                        Color Game
                        &nbsp; &nbsp; &nbsp;
                        <span> Steps : {list.length} </span>
                    </h1>
                    <hr />

                    <div>
                        <ColorCardTrying hide={!isWin} colors={rightAns} />
                    </div>
                    {isWin && <div className='winner'>
                        <span className="correct">Correct Answer!</span>
                        <button
                            className='play-again-btn'
                            onClick={() => {
                                setList([]);
                                setIsWin(false);
                                setRightAns(Question());

                            }}
                        >
                            Play Again
                        </button>
                    </div>


                    }
                    <hr />
                    <div>
                        <ListTryingBlock list={list} />
                    </div>
                    <hr />
                    <div>
                        <ColorCardTrying withclear colors={currentAnswer} onClick={() => setCurrentAnswerForm([])} />
                    </div>
                    <hr />
                    <div>
                        <FormButtonCard onClick={setCurrentAnswerForm} colors={formColor} />

                    </div>
                </div>
            </div>
        </>
    );
};
export default Startgame;
