import Avatar from '@components/avatar'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import { Check, X } from 'react-feather'

import { Button, Table } from 'reactstrap'

const InfluencerTable = ({ data, acceptRejectAction }) => {
    return (
        <Table responsive bordered className='bg-white shadow-sm rounded'>
            <thead >
                <tr>
                    <th className='bg-primary text-white rounded-start border-0 text-center'>
                        <small className='text-xs fw-lighter text-capitalize'>No</small>
                    </th>
                    <th className='bg-primary text-white border-0 '>
                        <small className='text-xs fw-lighter text-capitalize'>
                            Name
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            Email
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            Contact
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            Last Active
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0 '>
                        <small className='text-xs fw-lighter text-capitalize'>
                            Instagram
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0 '>
                        <small className='text-xs fw-lighter text-capitalize'>
                            TikTok
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
                {data?.map((item, index) => (
                    <tr key={item?.influencer_id}>
                        <td className='border-bottom-0 border-start-0' align='center' width={5}>
                            <small className='text-xs fw-lighter text-secondary'>{index + 1}</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={600}>
                            <div className='d-flex  align-items-center gap-1'>
                                <div>
                                    <Avatar className="rounded" img={avatar2} size='sm' />
                                </div>
                                <div>
                                    <small className='text-xs fw-lighter text-secondary'>{item?.influencer_name}</small>
                                </div>
                            </div>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}><small className='text-xs fw-lighter text-secondary'>{item?.email}</small></td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}><small className='text-xs fw-lighter text-secondary'> - </small></td>
                        <td className='border-bottom-0 border-start-0' align='center' width={380}>
                            <small> - </small>
                            {/* <div className='d-flex flex-column'>
                                <small className='text-xs fw-lighter text-secondary'>{moment().format('hh:mm A')}</small>
                                <small className='text-xs fw-lighter text-secondary'>{moment().format('dd MMM YYYY')}</small>
                            </div> */}
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={10}><small className='text-xs fw-lighter text-secondary'> - </small></td>
                        <td className='border-bottom-0 border-start-0' align='center' width={10}><small className='text-xs fw-lighter text-secondary'> - </small></td>
                        <td className='border-bottom-0 border-start-0 border-end-0' align='center' width={10}>
                            <div className='d-flex align-items-center gap-50'>
                                <Button.Ripple onClick={() => acceptRejectAction(item?.influencer_id)} size="sm" className='btn-icon' color='success'>
                                    <Check size={16} />
                                </Button.Ripple>
                                <Button.Ripple size="sm" className='btn-icon' color='danger'>
                                    <X size={16} />
                                </Button.Ripple>
                            </div>

                            {/* <Button.Ripple size='sm' color='primary'>
                                <small className='text-xs fw-lighter '>{"Detail"}</small>
                            </Button.Ripple> */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default InfluencerTable