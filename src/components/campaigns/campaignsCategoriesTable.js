import { Button, Table } from 'reactstrap'

const CampaignsCategoriesTable = ({ data, modalVisibilityAction, setCampaignCategoryObject, setEditModal }) => {
    const editCategoryFunction = (categoryObj) => {
        setCampaignCategoryObject(categoryObj)
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
                    <th className='bg-primary text-white rounded-end border-0 text-center'>
                        <small className='text-xs fw-lighter text-capitalize'>
                            Action
                        </small>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data?.map((item, index) => (
                    <tr key={item?.category_id}>
                        <td className='border-bottom-0 border-start-0' align='center' width={10}>
                            <small className='text-xs fw-lighter  text-secondary'>{index + 1}</small>
                        </td>
                        <td className='border-bottom-0 border-start-0' width="80%">
                            <small className='text-xs fw-lighter  text-secondary'>{item?.name}</small>
                        </td>
                        <td className='border-bottom-0 border-start-0 border-end-0' align='center' width={10}>
                            <Button.Ripple size='sm' color='primary' onClick={() => editCategoryFunction(item)}>
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