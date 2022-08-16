import Avatar from '@components/avatar'
import { Button, Table } from 'reactstrap'

const CreatorsSurveyTable = ({ data, modalVisibilityAction, setCreatorsSurveyObject, setEditModal }) => {
    const editSurveyFunction = (surveyObj) => {
        console.log(surveyObj, "surveyObj")
        setCreatorsSurveyObject(surveyObj)
        setEditModal(true)
        modalVisibilityAction(true)
    }
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
                {data?.map((item, index) => (
                    <tr key={item?.creator_survey_id}>
                        <td className='border-bottom-0 border-start-0' align='center' >
                            <small className='text-xs fw-lighter  text-secondary'>{index + 1}</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' width={200}>
                            <small className='text-xs fw-lighter  text-secondary'>{item?.question}</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' align='center' ><small className='text-xs fw-lighter  text-secondary'>{item?.answer_1}</small></td>
                        <td className='border-bottom-0 border-start-0' align='center' ><small className='text-xs fw-lighter  text-secondary'>{item?.answer_2}</small></td>
                        <td className='border-bottom-0 border-start-0' align='center' ><small className='text-xs fw-lighter  text-secondary'>{item?.answer_3}</small></td>
                        <td className='border-bottom-0 border-start-0' align='center' ><small className='text-xs fw-lighter  text-secondary'>{item?.answer_4}</small></td>

                        <td className='border-bottom-0 border-start-0 border-end-0' align='center'>
                            <Button.Ripple size='sm' color='primary' onClick={() => editSurveyFunction(item)}>
                                <small className='text-xs fw-lighter'>{"Edit"}</small>
                            </Button.Ripple>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default CreatorsSurveyTable