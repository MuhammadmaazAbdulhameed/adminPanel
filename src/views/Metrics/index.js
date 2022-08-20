import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import InstagramModal from '../../components/metrics/instagramModal'
import InstagramTable from '../../components/metrics/instagramTable'
import KeepOnTrackHeader from '../../components/metrics/keepOnTrackHeader'
import MetricsHeader from '../../components/metrics/MetricsHeader'
import TikTokModal from '../../components/metrics/tikTokModal'
import TikTokTable from '../../components/metrics/tikTokTable'
import { Failure, Success } from '../../components/toast'
import appConstant from '../../configs/constants'
// ** Third Party Components
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Metrics = () => {
    const token = localStorage.getItem("token")
    const [instagramTableData, setInstagramTableData] = useState([])
    const [instagramModal, setInstagramModal] = useState(false)
    const [editInstagramModal, setEditInstagramModal] = useState(false)
    const [instagramObject, setInstagramObject] = useState({
        field: ""
    })

    const [tikTokTableData, setTikTokTableData] = useState([])
    const [tikTokModal, setTikTokModal] = useState(false)
    const [editTokModal, setEditTikTokModal] = useState(false)
    const [tikTokObject, setTikTokObject] = useState({
        field: ""
    })

    const getKeepOnTrack = () => {
        axios.get(`https://authentic-web.authenticmatchinglimited.com/api/get_keep_on_tracks`,
            {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then(response => {
                const data = response?.data?.response?.detail
                console.log(data, "data")
                setInstagramTableData(data?.filter((item) => item?.type === appConstant?.instagram))
                setTikTokTableData(data?.filter((item) => item?.type === appConstant?.tiktok))
            })
            .catch(err => {
                Failure(err?.response?.data?.error?.message)
            })
    }
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
                    getKeepOnTrack()
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
                    getKeepOnTrack()
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
                    getKeepOnTrack()
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
                    getKeepOnTrack()
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
    const deleteKeepOnTrackFunction = (id) => {
        const data = { keep_on_track_id: id }
        return MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger ms-1'
            },
            buttonsStyling: false
        }).then(function (result) {
            if (result.value) {
                axios.delete(`https://authentic-web.authenticmatchinglimited.com/api/delete_keep_on_track`,
                    {
                        headers: {
                            Accept: 'application/json',
                            Authorization: `Bearer ${token}`
                        },
                        data

                    })
                    .then(response => {
                        getKeepOnTrack()
                        Success(response?.data?.response?.message)
                    })
                    .catch(err => {
                        Failure(err?.response?.data?.error?.message)
                    })
                console.log(result.value, "result.value")
                MySwal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    customClass: {
                        confirmButton: 'btn btn-success'
                    }
                })
            }
        })
    }
    useEffect(() => {
        getKeepOnTrack()
    }, [])
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
                        data={instagramTableData}
                        deleteAction={deleteKeepOnTrackFunction}

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
                        data={tikTokTableData}
                        deleteAction={deleteKeepOnTrackFunction}

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