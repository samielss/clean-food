import "../../css/ButtonMenu.scss";

export default (props) => {
    return (
        <>
        <button className={props.btnClass} onClick={props.redirect}>{props.itemMenu}</button>
        </>
    )
};