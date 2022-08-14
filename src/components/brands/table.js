import Avatar from '@components/avatar'
import avatar2 from '@src/assets/images/portrait/small/avatar-s-6.jpg'
import { Button, Table } from 'reactstrap'

const BrandTable = () => {
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
                {[1, 2, 3, 4]?.map((item) => (
                    <tr>
                        <td className='border-bottom-0 border-start-0' align='center' width={5}>
                            <small className='text-xs fw-lighter text-secondary'>{item}</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}>
                            <div className='d-flex justify-content-between align-items-center gap-1'>
                                <div>
                                    <Avatar className="rounded" img={avatar2} size='sm' />
                                </div>
                                <div>
                                    <small className='text-xs fw-lighter text-secondary'>Wendy Cardenas</small>
                                </div>
                            </div>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}><small className='text-xs fw-lighter text-secondary'>wendycardenas@gmail.com</small></td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}><small className='text-xs fw-lighter text-secondary'>+44 79112356</small></td>
                        <td className='border-bottom-0 border-start-0 border-end-0' align='center' width={10}>
                            <Button.Ripple size='sm' color='primary'>
                                <small className='text-xs fw-lighter '>{"Detail"}</small>
                            </Button.Ripple>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default BrandTable