import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, lightGreen, amber } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: amber,
        success: lightGreen
    },
});

export default theme;