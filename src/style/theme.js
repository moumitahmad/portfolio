import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, lightBlue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: lightBlue
    },
});

export default theme;