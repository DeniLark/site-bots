import "./AppHeader.scss"
import { AppLink } from "./AppLink"

const handlerClickLink = (setValue) => (e) => {
    e.preventDefault()
    setValue(e.currentTarget.dataset.value)
}

export const AppHeader = ({ setValue }) => {
    return (<header className="header">
        <AppLink value={"main"} handlerClickLink={handlerClickLink(setValue)} text={"Главная"} />
        <AppLink value={"porto"} handlerClickLink={handlerClickLink(setValue)} text={"Портфолио"} />
        <AppLink value={"feedback"} handlerClickLink={handlerClickLink(setValue)} text={"Обратная связь"} />
    </header>)
}