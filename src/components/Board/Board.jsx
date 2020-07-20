import React, {useState} from "react";
import style from "./Board.module.css";
import Footer from "../Footer/Footer";
import Texts from "./Texts/Texts";
import Texts_2 from "./Texts/Texts_2";
import Texts_3 from "./Texts/Texts_3";


const Board = React.memo(props => {

    let [editMode_1, setEditMode_1] = useState(false);
    let [editMode_2, setEditMode_2] = useState(false);
    let [editMode_3, setEditMode_3] = useState(false);

    const [data_1] = [props.boardData_1];
    const [data_2] = [props.boardData_2];
    const [data_3] = [props.boardData_3];

    const activateEditMode = (id) => {
        props.addElementId(id)
        if (id === data_1) {
            setEditMode_1(true)
        } else if (id === data_2) {
            setEditMode_2(true)
        } else {
            setEditMode_3(true)
        }
    }

    const deactivateEditMode = (id) => {
        if (id === data_1) {
            props.addCard_1(props.newText)
            setEditMode_1(false)
        } else if (id === data_2) {
            props.addCard_2(props.newText)
            setEditMode_2(false)
        } else {
            props.addCard_3(props.newText)
            setEditMode_3(false)
        }
    }

    const setOut = (id) => {
        if (id === data_1) {
            setEditMode_1(false)
        } else if (id === data_2) {
            setEditMode_2(false)
        } else {
            setEditMode_3(false)
        }
    }

    const onChangeText = (e) => {
        let text = e.target.value;
        props.changeText(text)
    }

    let boardTexts_1 =
        [...props.boardData_1]
            .map((t) => <Texts
                id={t.id}
                key={t.id}
                text={t.text}
                description={t.description}
                newDescription={props.newDescription}
                addDescription={props.addDescription}
                editHeader={props.editHeader}
            />);
    let boardTexts_2 =
        [...props.boardData_2]
            .map((t) => <Texts_2
                id={t.id}
                key={t.id}
                text={t.text}
                description={t.description}
                newDescription={props.newDescription}
                addDescription={props.addDescription}
                editHeader={props.editHeader}
            />);
    let boardTexts_3 =
        [...props.boardData_3]
            .map((t) => <Texts_3
                id={t.id}
                key={t.id}
                text={t.text}
                description={t.description}
                newDescription={props.newDescription}
                addDescription={props.addDescription}
                editHeader={props.editHeader}
            />);

    return (
        <>
            <div className={style.mainBlock}>
                <div className={style.atWorkBlock}>
                    <div className={style.blockElements}>

                        <h3>В работе</h3>

                        {boardTexts_1}

                        {!editMode_1 &&
                        <div className={style.addCard} onClick={() => {
                            activateEditMode(data_1)
                        }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#626262"/>
                            </svg>

                            <span>Добавить еще одну карточку</span>
                        </div>
                        }
                        {editMode_1 &&
                        <div onBlur={() => {
                            setOut(data_1)
                        }}>
                            <input type="text" placeholder='Введите текст карточки' value={props.newText}
                                   className={style.inputAddText} autoFocus={true}
                                   onChange={onChangeText}/>

                            <div className={style.buttonBlock}>
                                <input type="button" onMouseDown={() => {
                                    deactivateEditMode(data_1)
                                }} value="Добавить карточку"
                                       className={style.inputAddButton}/>

                                <input type="button" onClick={() => {
                                    setOut(data_1)
                                }} value="Отмена" className={style.inputCancelButton}/>
                            </div>
                        </div>
                        }
                    </div>
                </div>

                <div className={style.atWorkBlock}>
                    <div className={style.blockElements}>

                        <h3>На проверке</h3>

                        {boardTexts_2}

                        {!editMode_2 &&
                        <div className={style.addCard} onClick={() => {
                            activateEditMode(data_2)
                        }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#626262"/>
                            </svg>

                            <span>Добавить еще одну карточку</span>
                        </div>
                        }
                        {editMode_2 &&
                        <div onBlur={() => {
                            setOut(data_2)
                        }}>
                            <input type="text" placeholder='Введите текст карточки' value={props.newText}
                                   className={style.inputAddText}
                                   autoFocus={true} onChange={onChangeText}/>

                            <div className={style.buttonBlock}>
                                <input type="button" onMouseDown={() => {
                                    deactivateEditMode(data_2)
                                }} value="Добавить карточку"
                                       className={style.inputAddButton}/>

                                <input type="button" onClick={() => {
                                    setOut(data_2)
                                }} value="Отмена" className={style.inputCancelButton}/>
                            </div>
                        </div>
                        }
                    </div>
                </div>

                <div className={style.atWorkBlock}>
                    <div className={style.blockElements}>

                        <h3>Выполнено</h3>

                        {boardTexts_3}

                        {!editMode_3 &&
                        <div className={style.addCard} onClick={() => {
                            activateEditMode(data_3)
                        }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#626262"/>
                            </svg>

                            <span>Добавить еще одну карточку</span>
                        </div>
                        }
                        {editMode_3 &&
                        <div onBlur={() => {
                            setOut(data_3)
                        }}>
                            <input type="text" placeholder='Введите текст карточки' value={props.newText}
                                   className={style.inputAddText}
                                   autoFocus={true} onChange={onChangeText}/>

                            <div className={style.buttonBlock}>
                                <input type="button" onMouseDown={() => {
                                    deactivateEditMode(data_3)
                                }} value="Добавить карточку"
                                       className={style.inputAddButton}/>

                                <input type="button" onClick={() => {
                                    setOut(data_3)
                                }} value="Отмена" className={style.inputCancelButton}/>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
})

export default Board;