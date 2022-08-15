import { Button, Table } from 'reactstrap'

const CampaignsQuestionTable = () => {
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
                    <th className='bg-primary text-white border-0'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            Answer (01)
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            Answer (02)
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            Answer (03)
                        </small>
                    </th>
                    <th className='bg-primary text-white border-0'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            Answer (04)
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
                {[1, 2]?.map((item) => (
                    <tr>
                        <td className='border-bottom-0 border-start-0' align='center' >
                            <small className='text-xs fw-lighter  text-secondary'>{item}</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}>
                            <small className='text-xs fw-lighter  text-secondary'>which of the following moments ?</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' ><small className='text-xs fw-lighter  text-secondary'>Engaged (50)</small></td>
                        <td className='border-bottom-0 border-start-0' align='center' ><small className='text-xs fw-lighter  text-secondary'>Baby on the way</small></td>
                        <td className='border-bottom-0 border-start-0' align='center' ><small className='text-xs fw-lighter  text-secondary'>moving</small></td>
                        <td className='border-bottom-0 border-start-0' align='center' ><small className='text-xs fw-lighter  text-secondary'>Other</small></td>

                        <td className='border-bottom-0 border-start-0 border-end-0' align='center'>
                            <Button.Ripple size='sm' color='primary'>
                                <small className='text-xs fw-lighter  '>{"Detail"}</small>
                            </Button.Ripple>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default CampaignsQuestionTable