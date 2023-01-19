import React, { component } from "react";
import QuizData from "./QuizData";
import "./style.css";

export class Quiz extends component {
    constructor(props) {
        super(props);
        this.state = {
            userAnswer: null,
            currentIndex: 0,
            option: [],
            quizEnd: false,
            score: 0,
            disabled: true,
        }
    }

    loadQuize = () => {
        const(currentIndex) = this.state;

    }


    render() {
        return (
            <div>
                <h2>{question}</h2>
            </div>
        )
    }
}
export default Quiz;