import { IconButton, SvgIcon } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

const InputGridDeleteRowBtn = ({Icon, iconClass, ...otherProps}) => {
    return (
        <IconButton
            variant="contained"
            color="error"
            className='kendo-action-btn'
            tabIndex={-1}
            {...otherProps}
        >
            {Icon ?
                <SvgIcon className={iconClass}>
                    <Icon />
                </SvgIcon>
                :
                <DeleteIcon />}
        </IconButton>
    )
}

export default InputGridDeleteRowBtn