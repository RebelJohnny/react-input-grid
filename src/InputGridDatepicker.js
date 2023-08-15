import DatePicker from "react-multi-date-picker";
import { renderCalendarLocaleSwitch, renderCalendarSwitch } from "../../utils/calenderLang";
import { useTranslation } from "react-i18next";

const InputGridDatepicker = (props) => {
    const {t, i18n} = useTranslation()
    return (
        <DatePicker
            calendar={renderCalendarSwitch(i18n.language)}
            locale={renderCalendarLocaleSwitch(i18n.language)}
            calendarPosition="bottom-right"
            onOpen={false}
            onOpenPickNewDate={false}
            {...props}
        />
    )
}
export default InputGridDatepicker