
const ModalPortal = ({ children }) => {
    const el = document.getElementById("root")
    return ReactDOM.createPortal(children, el)
}

export default ModalPortal