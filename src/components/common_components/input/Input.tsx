import { ChangeEvent } from "react"

export function Input(props: {
    label: string
    id: string
    type: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}) {
    return <div className="input_container">
        <label htmlFor={props.id}>{props.label}:</label>
        <input onChange={props.onChange} type={props.type} id={props.id}></input>
    </div>
}