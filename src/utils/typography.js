import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Libre Baskerville',
      styles: ['400'],
    },
    {
      name: 'Karla',
      styles: ['400'],
    },
    {
      name: 'Open Sans Condensed',
      styles: ['700','300'],
    },
    {
      name: 'Open Sans',
      styles: ['300', '800i','700'],
    },
    {
      name: 'Avenir Next Condensed',
      styles: ['700'],
    },
  ],
  headerFontFamily: ['Georgia', 'serif'],
  bodyFontFamily: ['Libre Baskerville', 'serif'],
})

export default typography
