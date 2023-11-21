// import { useState, useEffect, useRef } from "react";

// const Answer = ({ answer }) => {

//     const [answer,setAnswer] = useState("")

//     const addAnswer = () => {}

//     return(
//         <div>
//             <div className={answer.id === 1 ? "inputContainer" : "answerContainer" }>
//                 {answer.id === 1 ? (
//                 <>
//                     <input
//                         type="text"
//                         className="inputContainer"
//                         value={answer}
//                         onChange={(e) => setAnswer(e.target.value)}
//                         placeholder="Answer here..."
//                     />
//                     <div className="reply" onClick={addAnswer}>
//                         Answer
//                     </div>
//                 </>
//             ) : (
//                 <span style={{ wordWrap: "break-word"}}>{answer.name}</span>
//             )}
//         </div>
//         {answer?.items?.map((ansr) => {
//             return <Answer key={ansr.id} answer={ansr}/>
//         })}   
//     </div>
//     )
// }

// export default Answer