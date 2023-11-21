import { useEffect, useState } from "react"
import Answer from "./Answer"

const answers ={
    id: 1,
    items: [
        
    ]
}

export default function Answer() {
    
    const [answerList, setAnswerList] = useState([answers])

    
    
    return(
        <div className="answerList">
            <Answer answer={answerList}/>
        </div>
    )
}