import { useState } from "react"

export default function InputGridInput ({ inputType = "text", ...props }) {
    const [type, setType] = useState(inputType)
    return (
        <input
            className="form-input"
            type={type}
            autoComplete="off"
            {...props}
        />
    )
}