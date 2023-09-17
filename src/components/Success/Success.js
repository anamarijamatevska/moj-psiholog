import { memo } from "react"
import { CheckCircleFill } from "react-bootstrap-icons"

const Success = () => (
  <div className='row d-flex flex-column align-items-center justify-content-center'>
    <div className='col-sm-12 d-flex align-items-center justify-content-center flex-column'>
      <CheckCircleFill size={100} color='lightgreen' className='mb-5 mt-5' />
      <h2 className='boxShadow text-light'>Вашиот избран психолог ќе Ве контактира</h2>
    </div>
  </div>
)

export default memo(Success)
