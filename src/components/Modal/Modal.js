import { memo } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import { CameraVideo, ChatDots, Mic } from "react-bootstrap-icons";

const Modal = ({ show, handleClose, handleShow, activeTherapist, handleDatePick, cardClickHandler, date, session, userTherapists, setActiveTherapist }) => (
  <div className='row'>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body scrollable={1}>
        <Table striped bordered>
          <tbody>
            <tr className='tableHeading'>
              <td colSpan={2}>Име и презиме</td>
              <td colSpan={2}>{activeTherapist?.fullname}</td>
            </tr>
            <tr className='tableHeading'>
              <td colSpan={2}>Образование</td>
              <td colSpan={2}>{activeTherapist?.education}</td>
            </tr>
            <tr className='tableHeading'>
              <td colSpan={2}>Опис</td>
              <td colSpan={2}>{activeTherapist?.description}</td>
            </tr>
            <tr className='tableHeading'>
              <td colSpan={2}>Контакт</td>
              <td colSpan={2}>{activeTherapist?.phoneNumber}</td>
            </tr>
          </tbody>
        </Table>

        <Form.Group controlId="dob" className='mb-3'>
          <Form.Label>Избери термин</Form.Label>
          <Form.Control type="date" name="dob" onChange={(e) => handleDatePick(e)} />
        </Form.Group>

        <div className='row'>
          <div className='col-sm-12 mb-2'>
            Избери тип на сесија
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-4'>
            <Card
              bg='success'
              key='success'
              text='white'
              className=""
              role='button'
              onClick={() => cardClickHandler('SMS пораки')}
            >
              <Card.Body>
                <Card.Text className='d-flex flex-column align-items-center justify-content-center'>
                  <ChatDots className='mb-1' color="white" size={30} />
                  <p className='mb-0'>500 МКД</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm-4'>
            <Card
              bg='success'
              key='success'
              text='white'
              className=""
              role='button'
              onClick={() => cardClickHandler('Телефонски разговор')}
            >
              <Card.Body>
                <Card.Text className='d-flex flex-column align-items-center justify-content-center'>
                  <Mic className='mb-1' color="white" size={30} />
                  <p className='mb-0'>1000 МКД</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-sm-4'>
            <Card
              bg='success'
              key='success'
              text='white'
              className=""
              role='button'
              onClick={() => cardClickHandler('Видео состанок')}
            >
              <Card.Body>
                <Card.Text className='d-flex flex-column align-items-center justify-content-center'>
                  <CameraVideo className='mb-1' color="white" size={30} />
                  <p className='mb-0'>1500 МКД</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          {date && session && (
            <div className='mt-3'>
              <div><b>Датум:</b> {date}</div>
              <div className='mb-0'><b>Тип:</b> {session}</div>
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Затвори
        </Button>
        <Button disabled={!date || !session} variant={date && session ? 'success' : 'disabled'} onClick={handleClose}>
          Закажи
        </Button>
      </Modal.Footer>
    </Modal>
    {userTherapists.map((therapist) => (
      <>
        <div className='col-sm-6' role='button' onClick={() => { handleShow(); setActiveTherapist(therapist) }}>
          <div className="card">
            <img src={therapist.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">{therapist.fullname}</p>
            </div>
          </div>
        </div>
      </>
    ))}
  </div>
)

export default memo(Modal)