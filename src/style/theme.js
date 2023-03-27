import { indigo, lightGreen, amber } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: 960
                }
            }
        }
    },
    palette: {
        primary: indigo,
        secondary: amber,
        success: lightGreen
    },
});

export default theme;