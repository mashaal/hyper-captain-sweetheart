const foregroundColor = '#eff0eb'
const backgroundColor = '#212121'
const red = '#e51524'
const green = '#55a087'
const yellow = '#ce839d'
const blue = '#65d7fd'
const magenta = yellow
const cyan = green

exports.decorateConfig = config =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor: '#212121',
    cursorColor: '#97979b',
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white: '#f1f1f0',
      lightBlack: '#686868',
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor
    },
    css: `
    ${config.css}
  `
  })
