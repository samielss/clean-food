import "../css/ButtonMenu.css"

function ButtonMenu (props){
    return (
        <>
        <button className="button_menu" onClick={props.redirect}>{props.itemMenu}</button>
        </>
    )
}

export default ButtonMenu;