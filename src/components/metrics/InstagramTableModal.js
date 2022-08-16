import React from 'react'
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'

const TikTokTable = ({
  title = null,
  modalVisible, modalVisibilityAction,
  keepOnTrackObject, 
  setKeepOnTrackObject,
  addUpdateFunction,
  editModal
}) => {
  const setInputStateFunction = (e) => {
    setKeepOnTrackObject(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <Modal className='modal-dialog-centered px-5 ' isOpen={modalVisible} toggle={() => modalVisibilityAction(!modalVisible)}>
      <ModalHeader className='bg-transparent py-0 ' toggle={() => modalVisibilityAction(!modalVisible)}></ModalHeader>
      <ModalBody className='px-sm-2 mx-50 pt-0'>
        <h3 className='text-center mb-1 text-black fw-bolder'>{editModal ? "Edit " : "Add New "} Fields</h3>
        <Row tag='form' className='gy-1 gx-2 mt-75'>
          <Col xs={12}>
            <Input id="field" name="field"
              value={keepOnTrackObject.field}
              onChange={setInputStateFunction}
              placeholder='Add Field' />
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter className='pb-2'>
        <Button.Ripple color='primary' className='w-100' onClick={() => addUpdateFunction(title)}>
          {editModal ? "Save" : "Submit"}
        </Button.Ripple>
      </ModalFooter>
    </Modal>
  )
}

export default TikTokTable