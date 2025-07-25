export const AppLink = ({ value, handlerClickLink, text }) => {
    return (<a
        href="#"
        className="link"
        data-value={value}
        onClick={handlerClickLink}>{text}</a>)
}