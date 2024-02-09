import "../css/ButtonMenu.css"

function ButtonMenu (props){
    return (
        <>
        <button className={props.btn_menu} onClick={props.redirect}>{props.itemMenu}</button>
        </>
    )
}

export default ButtonMenu;