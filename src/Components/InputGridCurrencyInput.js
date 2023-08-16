import CurrencyInput from "react-currency-input-field"

export default function InputGridCurrencyInput(props) {
    return (
        <CurrencyInput
            className={`form-input`}
            decimalsLimit={2}
            autoComplete="off"
            {...props}
        />
    )
}
