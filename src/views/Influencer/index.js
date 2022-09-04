import { useEffect, useState } from 'react'
import axios from 'axios'
import { Failure, Success } from '../../components/toast'
import Header from '../../components/influencer/header'
import InfluencerTable from '../../components/influencer/table'
const Influencer = () => {
    const token = localStorage.getItem("token")
    const [dataList, setDataList] = useState([])
    const getInfluencer = () => {

        axios.get(`http://authenticinfluencersbackend-env.eba-auctmm2z.eu-west-2.elasticbeanstalk.com/api/get_influencers`,
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
    const updateInfluencerStatus = (id) => {
        const data = { influencer_id: id }
        axios.post(`http://authenticinfluencersbackend-env.eba-auctmm2z.eu-west-2.elasticbeanstalk.com/api/change_influencer_status`,
            data,
            {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }

            })
            .then(response => {
                Success(response?.data?.response?.message)
                getInfluencer()
                // setDataList(response?.data?.response?.detail)
            })
            .catch(err => {
                Failure(err?.response?.data?.error?.message)
            })
    }
    useEffect(() => {
        getInfluencer()
    }, [])
    return (
        <div className=''>
            <Header />
            <InfluencerTable
                data={dataList}
                setData={setDataList}
                acceptRejectAction={updateInfluencerStatus}
            />
        </div>
    )
}

export default Influencer