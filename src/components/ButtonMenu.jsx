import "../css/ButtonMenu.css";

export default (props) => {
    return (
        <>
        <button className={props.btn_menu} onClick={props.redirect}>{props.itemMenu}</button>
        </>
    )
};