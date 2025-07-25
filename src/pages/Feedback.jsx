export const Feedback = () => {

    const handlerSubmit = (e) => {

    }

    const options = [{
        value: "order",
        label: "Сделать заказ"
    }, {
        value: "letter",
        label: "Написать"
    }, {
        value: "other",
        label: "Что то еще"
    }]


    return (<div>
        <form onSubmit={handlerSubmit}>
            <input type="text" placeholder="Имя" />
            <br />
            <input type="email" placeholder="example@gmail.com" />
            <br />
            <select>
                {options.map(i => <option key={i.value} value={i.value}>
                    {i.label}</option>)}
            </select>
            <br />
            <br />
            <input type="submit" value="Отправить" className="button" />
        </form>
    </div>)
}