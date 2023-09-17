import { memo } from "react"

const ErrorMessage = ({ errorMessage }) => (
  <p className="text-danger mt-0 mb-0">{errorMessage}</p>
)

export default memo(ErrorMessage)