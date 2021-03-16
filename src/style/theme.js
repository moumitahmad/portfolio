import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: green,
        secondary: {
            main: '#9500ae',
        }
    },
});

export default theme;