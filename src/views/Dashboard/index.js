
// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Custom Components
import StatsHorizontal from '@components/widgets/stats/StatsHorizontal'

// ** Icons Imports
import { User, UserPlus, UserCheck, UserX } from 'react-feather'

// ** Styles
import '@styles/react/apps/app-users.scss'
import StatsCard from '../../components/dashbaord/statsCard'
import { useEffect, useState } from 'react'


const UsersList = () => {

  const [dashbaord, setDashbaord] = useState([
    {
      icon: "",
      title: "Campaigns",
      count: "5,621"
    }, {
      icon: "",
      title: "Brand",
      count: "5,621"
    }, {
      icon: "",
      title: "Campaign Result",
      count: "5,621"
    }, {
      icon: "",
      title: "Survery Creators",
      count: "5,621"
    }
  ])
  useEffect(() => {
    if (false) {
      setDashbaord([])
    }
  }, [])
  return (
    <div className='app-user-list'>
      <Row>
        {dashbaord?.map(((item, index) => (
          <Col lg='3' sm='6' key={index}>
            <StatsCard
              icon={<User size={20} />}
              title={item.title}
              count={item.count}
            />
          </Col>
        )))}
      </Row>

    </div>
  )
}

export default UsersList
