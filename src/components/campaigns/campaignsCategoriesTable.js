import Avatar from '@components/avatar'
import { Button, Table } from 'reactstrap'

const CampaignsCategoriesTable = () => {
    return (
        <Table responsive bordered className='bg-white shadow-sm rounded'>
            <thead >
                <tr>
                    <th className='bg-primary text-white rounded-start border-0 text-center'>
                        <small className='text-xs fw-lighter text-capitalize'>No</small>
                    </th>
                    <th className='bg-primary text-white border-0 '>
                        <small className='text-xs fw-lighter text-capitalize'>
                            title
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
                        <td className='border-bottom-0 border-start-0' align='center' width={10}>
                            <small className='text-xs fw-lighter  text-secondary'>{item}</small>
                        </td>
                        <td className='border-bottom-0 border-start-0'  width="80%">
                            <small className='text-xs fw-lighter  text-secondary'>Beauty</small>
                        </td>
                        <td className='border-bottom-0 border-start-0 border-end-0' align='center'  width={10}>
                            <Button.Ripple size='sm' color='primary'>
                                <small className='text-xs fw-lighter  '>{"Edit"}</small>
                            </Button.Ripple>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default CampaignsCategoriesTable