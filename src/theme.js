import { createTheme } from '@mui/material';

export const theme = createTheme({
    components: {
        palette: {
            primary: {
                main: '#529f88',
                light: '#396f5f',
                dark: '#74b29f'
            },
        },
        typography: {
            fontFamily: 'Product Sans Medium',
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: `
       @import url('https://fonts.cdnfonts.com/css/white-love');
       @import url('https://fonts.cdnfonts.com/css/product-sans')
}
      `,
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
            @import url('https://fonts.cdnfonts.com/css/product-sans');

      `,
        },
    },
});