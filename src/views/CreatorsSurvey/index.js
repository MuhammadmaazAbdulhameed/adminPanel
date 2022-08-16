import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CreatorsSurveyModal from '../../components/creatorsSurvey/creatorsSurveyModal'
import Header from '../../components/creatorsSurvey/header'
import CreatorsSurveyTable from '../../components/creatorsSurvey/table'
import { Failure, Success } from '../../components/toast'

const CreatorsSurvey = () => {
    const [addCreatorsSurveyModal, setAddCreatorsSurveyModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [creatorsSurveyObject, setCreatorsSurveyObject] = useState(
        {
            question: "",
            answer_1: "",
            answer_2: "",
            answer_3: "",
            answer_4: ""
        })
    const [dataList, setDataList] = useState([])
    const getCreatorsSurvey = () => {
        const token = localStorage.getItem("token")
        axios.get(`http://authentic-web.authenticmatchinglimited.com/api/get_creator_surveys`,
            {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                setDataList(response?.data?.response?.detail)
            })
            .catch(err => {
                Failure(err?.response?.data?.error?.message)
            })
    }
    const addUpdateCreatorsSurvey = () => {
        const token = localStorage.getItem("token")
        if (!editModal) {
            axios.post(`http://authentic-web.authenticmatchinglimited.com/api/add_creator_survey`, creatorsSurveyObject,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    getCreatorsSurvey()
                    setCreatorsSurveyObject({
                        question: "",
                        answer_1: "",
                        answer_2: "",
                        answer_3: "",
                        answer_4: ""
                    })
                    setAddCreatorsSurveyModal(false)
                    setEditModal(false)
                    Success(response?.data?.response?.message)
                })
                .catch(err => {
                    Failure(err?.response?.data?.error?.message)
                })
        } else {
            axios.patch(`http://authentic-web.authenticmatchinglimited.com/api/edit_creator_survey`, creatorsSurveyObject,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    getCreatorsSurvey()
                    setCreatorsSurveyObject({
                        question: "",
                        answer_1: "",
                        answer_2: "",
                        answer_3: "",
                        answer_4: ""
                    })
                    setAddCreatorsSurveyModal(false)
                    setEditModal(false)
                    Success(response?.data?.response?.message)
                })
                .catch(err => {
                    Failure(err?.response?.data?.error?.message)
                })
        }

    }
    useEffect(() => {
        getCreatorsSurvey()
    }, [])
    return (
        <div className=''>
            <Header
                modalVisible={addCreatorsSurveyModal}
                modalVisibilityAction={setAddCreatorsSurveyModal}
                creatorsSurveyObject={creatorsSurveyObject}
                setCreatorsSurveyObject={setCreatorsSurveyObject}
                editModal={editModal}
                setEditModal={setEditModal}
            />
            <CreatorsSurveyTable
                data={dataList}
                setData={setDataList}
                modalVisible={addCreatorsSurveyModal}
                modalVisibilityAction={setAddCreatorsSurveyModal}
                creatorsSurveyObject={creatorsSurveyObject}
                setCreatorsSurveyObject={setCreatorsSurveyObject}
                editModal={editModal}
                setEditModal={setEditModal}
            />
            <CreatorsSurveyModal
                modalVisible={addCreatorsSurveyModal}
                modalVisibilityAction={setAddCreatorsSurveyModal}
                creatorsSurveyObject={creatorsSurveyObject}
                setCreatorsSurveyObject={setCreatorsSurveyObject}
                addUpdateFunction={addUpdateCreatorsSurvey}
                editModal={editModal}
                setEditModal={setEditModal}
            />
        </div>
    )
}

export default CreatorsSurvey
