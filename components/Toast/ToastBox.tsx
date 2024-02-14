import PropTypes from "prop-types"
import { toast, TypeOptions } from "react-toastify"

const ToastMessage = ({ type, message }: { type: string; message: string }) =>
  toast(
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: 1, fontSize: 15, padding: "8px 12px" }}>
          {message}
        </div>
      </div>
    </>,
    {
      type: type as TypeOptions
    }
  )

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

ToastMessage.dismiss = toast.dismiss

export default ToastMessage
