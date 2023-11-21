import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import dataList from '../data/questions/batmanQuestions';



export default function Question() {
    const[question, setQuestion] = useState()
    const {questionId} = useParams()

    

    useEffect(() => {
        dataList.find(() => {
            dataList.id === questionId
        })
        setQuestion()
    })
}