import { getMuiTheme } from 'material-ui/styles' // o metodo que lida com essa estilização
import { grey900 } from 'material-ui/styles/colors' // nossa cor diferente da cor padrão

export const muiTheme = getMuiTheme({
  appBar: {
    color: grey900
  }
})