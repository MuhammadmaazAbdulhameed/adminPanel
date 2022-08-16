import axios from 'axios'
import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import InstagramModal from '../../components/metrics/instagramModal'
import InstagramTable from '../../components/metrics/instagramTable'
import KeepOnTrackHeader from '../../components/metrics/keepOnTrackHeader'
import MetricsHeader from '../../components/metrics/MetricsHeader'
import TikTokModal from '../../components/metrics/tikTokModal'
import TikTokTable from '../../components/metrics/tikTokTable'
import { Failure, Success } from '../../components/toast'

const Metrics = () => {
    const token = localStorage.getItem("token")

    const [instagramModal, setInstagramModal] = useState(false)
    const [editInstagramModal, setEditInstagramModal] = useState(false)
    const [instagramObject, setInstagramObject] = useState({
        field: ""
    })

    const [tikTokModal, setTikTokModal] = useState(false)
    const [editTokModal, setEditTikTokModal] = useState(false)
    const [tikTokObject, setTikTokObject] = useState({
        field: ""
    })
    const updateAddInstagramFunction = () => {
        const obj = { ...instagramObject, type: "instagram" }
        if (!editInstagramModal) {
            axios.post(`https://authentic-web.authenticmatchinglimited.com/api/add_keep_on_track`,
                obj,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    // getCategory()
                    setInstagramObject({
                        field: ""
                    })
                    setInstagramModal(false)
                    setEditInstagramModal(false)
                    Success(response?.data?.response?.message)
                })
                .catch(err => {
                    Failure(err?.response?.data?.error?.message)
                })
        } else {
            axios.patch(`https://authentic-web.authenticmatchinglimited.com/api/edit_category`,
                obj,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    // getCategory()
                    setInstagramObject({
                        field: ""
                    })
                    setInstagramModal(false)
                    setEditInstagramModal(false)
                    Success(response?.data?.response?.message)
                })
                .catch(err => {
                    Failure(err?.response?.data?.error?.message)
                })
        }
    }
    const updateAddTikTokFunction = () => {
        const obj = { ...tikTokObject, type: "tiktok" }
        if (!editInstagramModal) {
            axios.post(`https://authentic-web.authenticmatchinglimited.com/api/add_keep_on_track`,
                obj,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    // getCategory()
                    setTikTokObject({
                        field: ""
                    })
                    setTikTokModal(false)
                    setEditTikTokModal(false)
                    Success(response?.data?.response?.message)
                })
                .catch(err => {
                    Failure(err?.response?.data?.error?.message)
                })
        } else {
            axios.patch(`https://authentic-web.authenticmatchinglimited.com/api/edit_category`,
                obj,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(response => {
                    // getCategory()
                    setTikTokObject({
                        field: ""
                    })
                    setTikTokModal(false)
                    setEditTikTokModal(false)
                    Success(response?.data?.response?.message)
                })
                .catch(err => {
                    Failure(err?.response?.data?.error?.message)
                })
        }
    }
    return (
        <div>
            <MetricsHeader />
            <KeepOnTrackHeader />
            <Row>
                <Col xs={6}>
                    <InstagramTable title="Instagram"
                        modalVisible={instagramModal}
                        modalVisibilityAction={setInstagramModal}
                        keepOnTrackObject={instagramObject}
                        setKeepOnTrackObject={setInstagramObject}
                        editModal={editInstagramModal}
                        setEditModal={setEditInstagramModal}
                    />
                    <InstagramModal
                        modalVisible={instagramModal}
                        modalVisibilityAction={setInstagramModal}
                        keepOnTrackObject={instagramObject}
                        setKeepOnTrackObject={setInstagramObject}
                        editModal={editInstagramModal}
                        setEditModal={setEditInstagramModal}
                        addUpdateFunction={updateAddInstagramFunction}
                    />
                </Col>
                <Col xs={6}>
                    <TikTokTable title="TikTok"
                        modalVisible={tikTokModal}
                        modalVisibilityAction={setTikTokModal}
                        keepOnTrackObject={tikTokObject}
                        setKeepOnTrackObject={setTikTokObject}
                        editModal={editTokModal}
                        setEditModal={setEditTikTokModal}
                    />
                    <TikTokModal
                        modalVisible={tikTokModal}
                        modalVisibilityAction={setTikTokModal}
                        keepOnTrackObject={tikTokObject}
                        setKeepOnTrackObject={setTikTokObject}
                        editModal={editTokModal}
                        setEditModal={setEditTikTokModal}
                        addUpdateFunction={updateAddTikTokFunction}
                    />
                </Col>
            </Row>

        </div>
    )
}

export default Metrics