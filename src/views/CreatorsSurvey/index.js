import React, { useState } from 'react'
import CreatorsSurveyModal from '../../components/creatorsSurvey/creatorsSurveyModal'
import Header from '../../components/creatorsSurvey/header'
import CreatorsSurveyTable from '../../components/creatorsSurvey/table'

const CreatorsSurvey = () => {
    const [addCreatorsSurveyModal, setAddCreatorsSurveyModal] = useState(false)
    const [question, setQuestion] = useState("")
    const [answer_1, setAnswer_1] = useState("")
    const [answer_2, setAnswer_2] = useState("")
    const [answer_3, setAnswer_3] = useState("")
    const [answer_4, setAnswer_4] = useState("")

    const addUpdateCreatorsSurvey = () => {
        console.log("first")
        // const obj = {
        //     question,
        //     answer_1,
        //     answer_2,
        //     answer_3,
        //     answer_4
        // }
    }
    return (
        <div className=''>
            <Header modalVisible={addCreatorsSurveyModal} modalVisibilityAction={setAddCreatorsSurveyModal} />
            <CreatorsSurveyTable />
            <CreatorsSurveyModal
                modalVisible={addCreatorsSurveyModal}
                modalVisibilityAction={setAddCreatorsSurveyModal}
                question={question} setQuestion={setQuestion}
                answer_1={answer_1} setAnswer_1={setAnswer_1}
                answer_2={answer_2} setAnswer_2={setAnswer_2}
                answer_3={answer_3} setAnswer_3={setAnswer_3}
                answer_4={answer_4} setAnswer_4={setAnswer_4}
                addUpdateFunction={addUpdateCreatorsSurvey}
            />
        </div>
    )
}

export default CreatorsSurvey
