import "../css/ButtonMenu.css";

export default (props) => {
    return (
        <>
        <button className={props.btnClass} onClick={props.redirect}>{props.itemMenu}</button>
        </>
    )
};