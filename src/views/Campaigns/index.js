import React from 'react'
import { Col, Row } from 'reactstrap'
import CampaignsCategoriesHeader from '../../components/campaigns/campaignsCategoriesHeader'
import CampaignsCategoriesTable from '../../components/campaigns/campaignsCategoriesTable'
import CampaignsQuestionHeader from '../../components/campaigns/campaignsQuestionHeader'
import CampaignsQuestionTable from '../../components/campaigns/campaignsQuestionTable'
import CampaignsResultFormHeader from '../../components/campaigns/campaignsResultFormHeader'
import Header from '../../components/campaigns/header'
import InstagramTikTokTable from '../../components/campaigns/InstagramTikTokTable'
import CampaignsTable from '../../components/campaigns/table'

const Campaigns = () => {
  return (
    <div>
      <Header />
      <CampaignsTable />
      <CampaignsQuestionHeader />
      <CampaignsQuestionTable />
      <CampaignsCategoriesHeader />
      <CampaignsCategoriesTable />
      <CampaignsResultFormHeader />
      <Row>
        <Col>
          <InstagramTikTokTable title="Instagram" />
        </Col>
        <Col>
          <InstagramTikTokTable title="TikTok" />
        </Col>
      </Row>

    </div>
  )
}

export default Campaigns 