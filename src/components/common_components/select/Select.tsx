
export function Select(props: {
    options: { [option: string]: string; }
    id: string
    children: string
}) {
    return <div className="input_container">
        <label htmlFor={props.id}>{props.children}</label>
        <select id={props.id}>
            {
                Object.keys(props.options).map(key => {
                    return <option key={key} label={props.options[key]}>
                        {props.options[key]}
                    </option>
                })
            }
        </select>
    </div>
}