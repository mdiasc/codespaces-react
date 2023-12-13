import{ createTheme} from '@mui/material/styles'

const theme = createTheme({
    palette:{
        primary:{
            main: '#e47911',
            light: '#d57a2c',
            dark: '#c67b3f'
        },
        secondary:{
            main: '#ed9121',
            light: '#d2691e',
            dark: '#cd853f'
        },
        error:{
            main: '#bb6414',
            light: '#935015',
            dark: '#6d3d14'
        },
        warning:{
            main: '#cd7f32',
            light: '#cc7722',
            dark: '#fe7900'
        },
        info:{
            main: '#d3d3d3',
            light: '#dcdcdc',
            dark: '#f5f5f5'
        },
        success:{
            main: '#3cb371',
            light: '#00f573',
            dark: '#2e8b57'
        },
        text:{
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary:  'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
        background:{
            default:  '#ffd2b2',
            paper: 'ffe8d8',
        },

    },
    typography:{
        fontFamily: 'Arial, sans-serif'
    }
})
export default theme
