import { Form } from "react-bootstrap"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const SwiperComponent = ({ questions = [], onAnswerClick }) => (
  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {questions.map((question, idx) => (
      <SwiperSlide key={idx}>
        <h1 className='mb-4'>{question.question}</h1>
        <div className={`answersWrapper d-flex flex-column ${question.type === 'checkbox' ? 'align-items-start justify-content-start' : 'align-items-center justify-content-center'}`}>
          {question.answers.map((answer, index) => (
            <>
              {question.type === 'checkbox' ? (
                <Form.Check
                  inline
                  label={answer.answer}
                  name="group1"
                  type='checkbox'
                  id={`checkbox-${index}`}
                  key={`checkbox-${index}`}
                  onClick={(e) => onAnswerClick(answer.category, idx, e)}
                />
              ) : (
                <div key={`radio-${index}`} role='button' className='answerWrapper' onClick={(e) => onAnswerClick(answer.category, idx, e, question.type)}>
                  {answer.answer}
                </div>
              )}
            </>
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
)

export default SwiperComponent