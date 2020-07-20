import React, {useState} from "react";
import style from "../Board.module.css";
import Modal from "react-modal";

Modal.setAppElement('#root');

const Texts = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [description, setDescription] = useState([])
    const [editText, setEditText] = useState(false)

    let newText = React.createRef();

    const isToggleTrue = () => {
        window.history.pushState({}, '', '/modal')
        setModalIsOpen(true)
    }

    const isToggleFalse = () => {
        window.history.back()
        setModalIsOpen(false)
    }

    const isToggleActivated = () => {
        setEditText(true)
    }

    const isToggleDeactivated = (id) => {
        let text = newText.current.value;
        props.editHeader({text, id})
        setEditText(false)
    }

    const onChangeDescription = (e) => {
        let description = e.target.value;
        setDescription(description)
    }

    const onAddDescription = (id) => {
        let newDescription = description;
        props.addDescription({newDescription, id})
        window.history.back()
        setModalIsOpen(false)
    }

    return (
        <>
            <div className={style.textBlock}>
                <span onClick={() => {
                    isToggleTrue()
                }}><p>{props.text}</p></span>
            </div>
            <Modal className={style.modal} isOpen={modalIsOpen} onRequestClose={() => {
                isToggleFalse()
            }}>
                <div className={style.popUp}>
                    <div className={style.textBlockModal}>
                        <span title={'Закрыть'} className={style.closeIcon} onClick={() => {
                            isToggleFalse()
                        }}/>
                        <div className={style.text}>
                            {!editText &&
                            <p onClick={() => {
                                isToggleActivated()
                            }} title='Редактировать заголовок'>{props.text}</p>
                            }
                            {editText &&
                            <textarea type="text" ref={newText} autoFocus={true} onBlur={() => {
                                isToggleDeactivated(props.id)
                            }}>{props.text}</textarea>
                            }
                        </div>

                        <div className={style.descriptionBlock}>
                            <textarea type="text" onChange={onChangeDescription}
                                      placeholder='Описание'>{props.description}</textarea>
                        </div>

                        <div className={style.buttonBlockModal}>
                            <input type="button" onClick={() => {
                                onAddDescription(props.id)
                            }} value="Сохранить"
                                   className={style.inputAddButtonModal}/>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Texts;