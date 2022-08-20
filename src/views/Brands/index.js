import axios from "axios"
import { useEffect, useState } from "react"
import Header from "../../components/brands/header"
import BrandsTable from "../../components/brands/table"

const Brands = () => {
    const token = localStorage.getItem("token")
    const [dataList, setDataList] = useState([])
    const getBrands = () => {
        axios.get(`https://authentic-web.authenticmatchinglimited.com/api/get_influencers`,
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

    useEffect(() => {
        getBrands()
    }, [])
    return (
        <div className=''>
            <Header />
            <BrandsTable 
            data={dataList}
            setData={setDataList} />
        </div>
    )
}
export default Brands

