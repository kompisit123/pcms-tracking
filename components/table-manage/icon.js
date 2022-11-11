// import ArrowDownward from "@material-ui/icons/ArrowDownward";
import { forwardRef } from "react";
import VisibilityIcon from '@material-ui/icons/Visibility';
import SaveAlt from "@material-ui/icons/SaveAlt";
import AddCircleIcon from "@material-ui/icons/AddCircle"
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Search from "@material-ui/icons/Search";
import Remove from "@material-ui/icons/Remove";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import { ArrowDownward, Edit } from "@material-ui/icons";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LastPageIcon from '@material-ui/icons/LastPage';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import FeedbackIcon from '@material-ui/icons/Feedback';

export const tableIcons = {
    ViewColumn: VisibilityIcon, 
    SortArrow: ArrowDownward,
    Export: SaveAlt,
    Add : AddCircleIcon,
    //Add: forwardRef((props, ref) => <AddCircleIcon  style={{ color: '#9B59B6',fontSize:'30' }} {...props} ref={ref} />),
    Edit:Edit,
    Check: Check,
    Clear: Clear,
    ResetSearch: Clear,
    Search: Search,
    ThirdStateCheck: Remove,
    Delete: DeleteOutline,
    NextPage: ArrowForwardIosIcon,
    LastPage: LastPageIcon,
    FirstPage: FirstPageIcon,
    PreviousPage: ArrowBackIosIcon,
    Feedback: FeedbackIcon,
    DetailPanel: FeedbackIcon,
    Filter: FeedbackIcon
};