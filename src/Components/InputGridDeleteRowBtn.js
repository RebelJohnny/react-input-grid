import { IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';

export default function InputGridDeleteRowBtn (props) {
    return (
        <IconButton
            variant="contained"
            color="error"
            className='kendo-action-btn'
            {...props}
        >
            <DeleteIcon />
        </IconButton>
    )
}