import Avatar from '@components/avatar'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import { Button, Table } from 'reactstrap'
import { Check, X } from 'react-feather'
import appConstant from '../../configs/constants'

const BrandTable = ({ data, acceptRejectAction }) => {
    // 
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
                    <th className='bg-primary text-white rounded-end border-0 text-center'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            Action
                        </small>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item, index) => (
                    <tr key={item.brand_id}>
                        <td className='border-bottom-0 border-start-0' align='center' width={5}>
                            <small className='text-xs fw-lighter text-secondary'>{index + 1}</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}>
                            <div className='d-flex  align-items-center gap-1'>
                                <div>
                                    <Avatar className="rounded" img={avatar2} size='sm' />
                                </div>
                                <div>
                                    <small className='text-xs fw-lighter text-secondary'>{item?.brand_name}</small>
                                </div>
                            </div>
                        </td>
                        <td className='border-bottom-0 border-start-0' width={200}><small className='text-xs fw-lighter text-secondary'>{item?.email}</small></td>
                        <td className='border-bottom-0 border-start-0' width={200}><small className='text-xs fw-lighter text-secondary'> - </small></td>
                        <td className='border-bottom-0 border-start-0 border-end-0' align='center' width={10}>
                            <div className='d-flex justify-content-center'>
                                {item?.status === appConstant.active ? (<Button.Ripple size='sm' color='primary'>
                                    <small className='text-xs fw-lighter '>{"Detail"}</small>
                                </Button.Ripple>) : (
                                    <div className='d-flex align-items-center gap-50'>
                                        <Button.Ripple onClick={() => acceptRejectAction(item?.brand_id)} size="sm" className='btn-icon' color='success'>
                                            <Check size={16} />
                                        </Button.Ripple>
                                        <Button.Ripple size="sm" className='btn-icon' color='danger'>
                                            <X size={16} />
                                        </Button.Ripple>
                                    </div>
                                )}
                            </div>
                            {/* <div className='d-flex justify-content-center'>
                                <div className='d-flex align-items-center gap-50'>
                                    <Button.Ripple onClick={() => acceptRejectAction(item?.brand_id)} size="sm" className='btn-icon' color='success'>
                                        <Check size={16} />
                                    </Button.Ripple>
                                    <Button.Ripple size="sm" className='btn-icon' color='danger'>
                                        <X size={16} />
                                    </Button.Ripple>
                                </div>

                            </div> */}
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

export default BrandTable