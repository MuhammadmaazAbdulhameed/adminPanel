import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import CampaignCategoriesModal from '../../components/campaigns/campaignCategoriesModal'
import CampaignQuestionsModal from '../../components/campaigns/campaignQuestionsModal'
import CampaignsCategoriesHeader from '../../components/campaigns/campaignsCategoriesHeader'
import CampaignsCategoriesTable from '../../components/campaigns/campaignsCategoriesTable'
import CampaignsQuestionHeader from '../../components/campaigns/campaignsQuestionHeader'
import CampaignsQuestionTable from '../../components/campaigns/campaignsQuestionTable'
import CampaignsResultFormHeader from '../../components/campaigns/campaignsResultFormHeader'
import Header from '../../components/campaigns/header'
import InstagramTikTokTable from '../../components/campaigns/InstagramTikTokTable'
import CampaignsTable from '../../components/campaigns/table'
import { Failure, Success } from '../../components/toast'

const Campaigns = () => {
  const token = localStorage.getItem("token")

  const [campaignQuestionsModal, setCampaignQuestionsModal] = useState(false)
  const [editCampaignQuestionsModal, setEditCampaignQuestionsModal] = useState(true)
  const [campaignQuestionsObject, setCampaignQuestionsObject] = useState({
    question: "",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: ""
  })

  const [campaignCategory, setCampaignCategory] = useState([])
  const [campaignCategoryModal, setCampaignCategoryModal] = useState(false)
  const [editCampaignCategoryModal, setEditCampaignCategoryModal] = useState(false)
  const [campaignCategoryObject, setCampaignCategoryObject] = useState({
    name: ""
  })

  const getCategory = () => {
    axios.get(`http://authenticinfluencersbackend-env.eba-auctmm2z.eu-west-2.elasticbeanstalk.com/api/get_categories`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setCampaignCategory(response?.data?.response?.detail)
      })
      .catch(err => {
        Failure(err?.response?.data?.error?.message)
      })
  }
  const addUpdateCampaignQuestionFunction = () => { }
  const addUpdateCampaignCategoryFunction = () => {
    if (!editCampaignCategoryModal) {
      axios.post(`http://authenticinfluencersbackend-env.eba-auctmm2z.eu-west-2.elasticbeanstalk.com/api/add_category`,
        campaignCategoryObject,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          getCategory()
          setCampaignCategoryObject({
            name: ""
          })
          setCampaignCategoryModal(false)
          setEditCampaignCategoryModal(false)
          Success(response?.data?.response?.message)
        })
        .catch(err => {
          Failure(err?.response?.data?.error?.message)
        })
    } else {
      axios.patch(`http://authenticinfluencersbackend-env.eba-auctmm2z.eu-west-2.elasticbeanstalk.com/api/edit_category`,
        campaignCategoryObject,
        {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          getCategory()
          setCampaignCategoryObject({
            name: ""
          })
          setCampaignCategoryModal(false)
          setEditCampaignCategoryModal(false)
          Success(response?.data?.response?.message)
        })
        .catch(err => {
          Failure(err?.response?.data?.error?.message)
        })
    }
  }
  useEffect(() => {
    getCategory()
  }, [])
  return (
    <div>
      <Header />
      <CampaignsTable />
      <CampaignsQuestionHeader
        modalVisible={campaignQuestionsModal}
        modalVisibilityAction={setCampaignQuestionsModal}
        editModal={editCampaignQuestionsModal}
        setEditModal={setEditCampaignQuestionsModal}
      />
      <CampaignsQuestionTable />
      <CampaignsCategoriesHeader
        modalVisible={campaignCategoryModal}
        modalVisibilityAction={setCampaignCategoryModal}
        campaignCategoryObject={campaignCategoryObject}
        setCampaignCategoryObject={setCampaignCategoryObject}
        editModal={editCampaignCategoryModal}
        setEditModal={setEditCampaignCategoryModal} />
      <CampaignsCategoriesTable
        data={campaignCategory}
        setData={setCampaignCategory}
        modalVisible={campaignCategoryModal}
        modalVisibilityAction={setCampaignCategoryModal}
        campaignCategoryObject={campaignCategoryObject}
        setCampaignCategoryObject={setCampaignCategoryObject}
        editModal={editCampaignCategoryModal}
        setEditModal={setEditCampaignCategoryModal}
      />
      <CampaignsResultFormHeader />
      <Row>
        <Col xs={6}>
          <InstagramTikTokTable title="Instagram" />
        </Col>
        <Col xs={6}>
          <InstagramTikTokTable title="TikTok" />
        </Col>
      </Row>

      {/* Question Modal */}
      <CampaignQuestionsModal
        modalVisible={campaignQuestionsModal}
        modalVisibilityAction={setCampaignQuestionsModal}
        campaignQuestionsObject={campaignQuestionsObject}
        setCampaignQuestionsObject={setCampaignQuestionsObject}
        addUpdateFunction={addUpdateCampaignQuestionFunction}
        editModal={editCampaignQuestionsModal}
        setEditModal={setEditCampaignQuestionsModal}
      />
      {/* Categories Modal */}
      <CampaignCategoriesModal
        modalVisible={campaignCategoryModal}
        modalVisibilityAction={setCampaignCategoryModal}
        campaignCategoryObject={campaignCategoryObject}
        setCampaignCategoryObject={setCampaignCategoryObject}
        addUpdateFunction={addUpdateCampaignCategoryFunction}
        editModal={editCampaignCategoryModal}
        setEditModal={setEditCampaignCategoryModal} />
    </div>
  )
}
export default Campaigns 