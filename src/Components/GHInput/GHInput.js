import { useState } from "react"

/**
 * @typedef {Object} GHInputProps
 * @property {string} [inputType="text"] - The type of the input.
 * @property {Object} [props] - Any other properties valid for an <input> element.
 */

/**
 * Custom input component.
 * @param {GHInputProps} props 
 */
const GHInput = ({ inputType = "text", ...props }) => {
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
export default GHInput