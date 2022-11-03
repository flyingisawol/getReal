import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Questionnaire = () => {
    const navigate = useNavigate()
    const questions = [
        { 
            questionText: "You've got free cinema tickets! What are you watching?",
            answerOptions: [
                { answerText: 'Titanic'},
                { answerText: 'Shutter Island'},
                { answerText: 'Fast and Furious'},
                { answerText: 'The Conjuring'},
            ],
        },
        { 
            questionText: "You're turning into a dog tomorrow! You choose the breed!",
            answerOptions: [
                { answerText: 'Chihuahua'},
                { answerText: 'Border Collie'},
                { answerText: 'Greyhound'},
                { answerText: 'Rottweiler'},
            ],
        },
        { 
            questionText: "How would you rather be spending your weekend?",
            answerOptions: [
                { answerText: 'Retail therapy, eating out and a night out on the the town'},
                { answerText: 'Cozy night in reading or watching your favourite show'},
                { answerText: 'You like to stay on the move, exercising, playing sports and going to the gym'},
                { answerText: 'You enjoy the outdoors, being a beach bum, nature walks, and would enjoy a day-trip'},
            ],
        },
        { 
            questionText: "You're stuck on a long drive home, what genre music are you listening to?",
            answerOptions: [
                { answerText: 'Hip-hop' },
                { answerText: 'Pop'},
                { answerText: 'Indie'},
                { answerText: 'Electronic music'},
            ],
        },
        { 
            questionText: "You got a free take-out voucher, what are you getting?",
            answerOptions: [
                { answerText: 'HSP' },
                { answerText: 'Asian'},
                { answerText: 'Pizza'},
                { answerText: 'KFC'},
            ]
        }
    ]
    const [questionIndex, setQuestionIndex] = useState(0)

    const [finished, setFinished] = useState(false)

    const [answers, setAnswers] = useState([])

    const handleAnswerButtonClick = (event) => {            
        setAnswers([...answers, event.target.value])
        const nextQuestion = questionIndex + 1
        if (nextQuestion < questions.length){
            console.log(nextQuestion)
            console.log('current question', questionIndex, questions.length)
            setQuestionIndex(nextQuestion)
        } else {
            setFinished(true)
        }
        setQuestionIndex(nextQuestion)
    }


    const handleSubmit = async () => {
    await fetch("/api/personality", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(answers),
        })
        navigate("/getreal")
    }

    return (
        <div className="questionnaire">
            <div className="finishedQuiz">
                { finished ? <button onClick={handleSubmit}>"You're all done, welcome... Click to continue"</button> :
                    <div className='question-section'>  
                        <div className='question-text'>{questions[questionIndex].questionText}
                    </div>
                    <div className='answer-section'>
                        {questions[questionIndex].answerOptions.map((answerOption) => (
                            <button onClick={handleAnswerButtonClick} value={answerOption.answerText}>{answerOption.answerText}</button>
                            ))
                        }
                    </div> 
                    </div>
                }
            </div>
        </div>
      
    )
}

export default Questionnaire