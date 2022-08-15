import Avatar from '@components/avatar'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import { Play } from 'react-feather'
import { Button, Table } from 'reactstrap'

const CampaignsTable = () => {
    return (
        <Table responsive bordered className='bg-white shadow-sm rounded'>
            <thead >
                <tr>
                    <th className='bg-primary text-white rounded-start border-0 text-center'>
                        <small className='text-xs fw-lighter text-capitalize'>No</small>
                    </th>
                    <th className='bg-primary text-white border-0 '>
                        <small className='text-xs fw-lighter text-capitalize'>
                            brand name
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            image
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            image
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0 text-center'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            campaign
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0 text-center'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            not interested
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0 text-center'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            status
                        </small>
                    </th>
                    <th className='bg-primary text-white rounded-end border-0 text-center'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            Action
                        </small>
                    </th>
                </tr>
            </thead>
            <tbody>
                {[1, 2, 3, 4]?.map((item) => (
                    <tr>
                        <td className='border-bottom-0 border-start-0' align='center' width={5}>
                            <small className='text-xs fw-lighter text-secondary'>{item}</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}>
                            <small className='text-xs fw-lighter text-secondary'>Wendy Cardenas</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}>
                            <small className='text-xs fw-lighter text-secondary'>
                                <Avatar className="rounded" img={avatar2} size='sm' />
                            </small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}>
                            <small className='text-xs fw-lighter text-secondary'>Campaign Title</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}>
                            <small className='text-xs fw-lighter text-secondary'>10</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}>
                            <small className='text-xs fw-lighter text-secondary'>06</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}>
                            <small className='text-xs fw-lighter text-secondary'>In Progress</small>
                        </td>
                        <td className='border-bottom-0 border-start-0 border-end-0' align='center' width={10}>
                            <div className='d-flex gap-50'>
                                <Button.Ripple size='sm' color='danger'>
                                    <small className='text-xs fw-lighter '>{"Reject"}</small>
                                </Button.Ripple>
                                <Button.Ripple size='sm' color='success'>
                                    <small className='text-xs fw-lighter '>{"Accept "}</small>
                                </Button.Ripple>
                                <Button.Ripple size='sm' color='primary'>
                                    <small className='text-xs fw-lighter '>{"Detail"}</small>
                                </Button.Ripple>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default CampaignsTable