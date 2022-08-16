
import { Trash2 } from 'react-feather'
import { Button, Col, Row, Table } from 'reactstrap'

const InstagramTable = ({ title, modalVisible, modalVisibilityAction, setKeepOnTrackObject, setEditModal }) => {
    const modalToggleFunction = () => {
        setEditModal(false)
        setKeepOnTrackObject({
            field: ""
        })
        modalVisibilityAction(!modalVisible)
    }

    return (
        <>
            <Row className='mb-1'>
                <Col lg='12' className='d-flex justify-content-between align-items-center'>
                    <div>
                        <h3 className='text-black fw-bolder'>{title}</h3>
                    </div>
                    <div>
                        <Button.Ripple color='primary' onClick={modalToggleFunction}>Add Field</Button.Ripple>
                    </div>
                </Col>
            </Row>
            <Table responsive bordered className='bg-white shadow-sm rounded'>
                <thead >
                    <tr>
                        <th className='bg-primary text-white rounded-start border-0 text-center'>
                            <small className='text-xs fw-lighter text-capitalize'>No</small>
                        </th>
                        <th className='bg-primary text-white border-0 '>
                            <small className='text-xs fw-lighter text-capitalize'>
                                name
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
                            <td className='border-bottom-0 border-start-0'  >
                                <small className='text-xs fw-lighter  text-secondary'>Following</small>
                            </td>
                            <td className='border-bottom-0 border-start-0 border-end-0' align='center' width={"10%"}>
                                <div className='d-flex justify-content-center gap-50'>
                                    <Button.Ripple className='btn-icon py-50' color='danger'>
                                        <Trash2 size={12} />
                                    </Button.Ripple>
                                    <Button.Ripple size='sm' color='primary'>
                                        <small className='text-xs fw-lighter  '>{"Detail"}</small>
                                    </Button.Ripple>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default InstagramTable
