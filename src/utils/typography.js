import Typography from 'typography'

import 'normalize.css'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Libre Baskerville',
      styles: ['400'],
    },
    {
      name: 'Open Sans',
      styles:['800i','700'],
    },
    {
      name: 'Open Sans Condensed',
      styles:['300'],
    },
    {
      name: 'Karla',
      styles:['400'],
    },
  ],
  headerFontFamily: ['Georgia', 'serif'],
  bodyFontFamily: ['Libre Baskerville', 'serif'],

})

export default typography
