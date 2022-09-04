import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../../components/brands/header"
import BrandsTable from "../../components/brands/table"
import { Failure, Success } from "../../components/toast"

const Brands = () => {
    const token = localStorage.getItem("token")
    const [dataList, setDataList] = useState([])
    const getBrands = () => {
        axios.get(`http://authenticinfluencersbackend-env.eba-auctmm2z.eu-west-2.elasticbeanstalk.com/api/get_brands`,
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
    const updateBrandStatus = (id) => {
        const data = { brand_id: id }
        axios.post(`http://authenticinfluencersbackend-env.eba-auctmm2z.eu-west-2.elasticbeanstalk.com/api/change_brand_status`,
            data,
            {
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }

            })
            .then(response => {
                Success(response?.data?.response?.message)
                getBrands()
            })
            .catch(err => {
                Failure(err?.response?.data?.error?.message)
            })
    }
    useEffect(() => {
        getBrands()
    }, [])
    return (
        <div className=''>
            <Header />
            <BrandsTable data={dataList} setData={setDataList} acceptRejectAction={updateBrandStatus} />
        </div>
    )
}
export default Brands

