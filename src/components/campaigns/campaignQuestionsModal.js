import React from 'react'
import { Button, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row, Col } from 'reactstrap'

const CampaignQuestionsModal = ({
  modalVisible, modalVisibilityAction,
  campaignQuestionsObject,
  setCampaignQuestionsObject,
  addUpdateFunction,
  editModal
}) => {
  const setInputStateFunction = (e) => {
    console.log(e)
    setCampaignQuestionsObject(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <Modal className='modal-dialog-centered px-5 ' isOpen={modalVisible} toggle={() => modalVisibilityAction(!modalVisible)}>
      <ModalHeader className='bg-transparent py-0 ' toggle={() => modalVisibilityAction(!modalVisible)}></ModalHeader>
      <ModalBody className='px-sm-2 mx-50 pt-0'>
        <h3 className='text-center mb-1 text-black fw-bolder'>{editModal ? "Edit " : "Add New "}</h3>
        <Row tag='form' className='gy-1 gx-2 mt-75'>
          <Col xs={12}>
            <Input id="question" name="question"
              value={campaignQuestionsObject.question}
              onChange={setInputStateFunction}
              placeholder='Question' />
          </Col>
          <Col xs={12}>
            <Input id="answer_1" name="answer_1"
              value={campaignQuestionsObject.answer_1}
              onChange={setInputStateFunction}
              placeholder='Answer' />
          </Col>
          <Col xs={12}>
            <Input id="answer_2" name="answer_2"
              value={campaignQuestionsObject.answer_2}
              onChange={setInputStateFunction}
              placeholder='Answer' />
          </Col>
          <Col xs={12}>
            <Input id="answer_3" name="answer_3"
              value={campaignQuestionsObject.answer_3}
              onChange={setInputStateFunction}
              placeholder='Answer' />
          </Col>
          <Col xs={12}>
            <Input id="answer_4" name="answer_4"
              value={campaignQuestionsObject.answer_4}
              onChange={setInputStateFunction}
              placeholder='Answer' />
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter className='pb-2'>
        <Button.Ripple color='primary' className='w-100' onClick={addUpdateFunction}>
          {editModal ? "Save" : "Submit"}
        </Button.Ripple>
      </ModalFooter>
    </Modal>
  )
}

export default CampaignQuestionsModal