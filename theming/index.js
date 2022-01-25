import { createTheme } from '@mui/material';


const staticTheme = {
    primary: {
        main: '#ED1B24',
        contrastText: '#fff',
    },
    secondary: {
        main: '#e67e22',
        contrastText: '#ffffff',
    },

}

export const lightTheme = createTheme({
    palette: {
        ...staticTheme,
        background: {
            default: "#e4f0e2", 
        },
        text: {
            primary: "#1a1a1a"
        }
    }
})

export const darkTheme = createTheme({
    palette: {
        ...staticTheme,
        background: {
            default: "#0E0E0E",
            paper: '#1C1C1C'

        },
        text: {
            primary: "#f2f2f2"
        }
    }
})