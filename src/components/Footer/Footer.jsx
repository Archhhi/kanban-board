import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <span>Все права защищены 2020 <sup>&copy;</sup></span>

            <div className={style.contacts}>
                <span>Контакты автора:</span> <br />
                <span>Номер телефона: +7 905 437 98-77</span>
                <span>Электронная почта: brabus-20@mail.ru</span>
            </div>
        </footer>
    )
}

export default Footer;