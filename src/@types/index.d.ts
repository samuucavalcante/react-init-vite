
import 'styled-components'
import { IAppTheme } from 'theme/light';

declare module 'styled-components' {
  export interface DefaultTheme extends IAppTheme {}
}