export function Button(props: { onClick, children }) {
    return <button type={"button"} onClick={props.onClick} className="button">
        {props.children}
    </button>
}