import './App.css'
import { HomeComponent } from './contextAPI/HomeComponent'
import { ThemeProvider } from './contextAPI/ThemeContext'
import { ForwardRefHook } from './ForwardRefHook'
import { UseRefHook } from './UseRefHook'
import { UseRefHook2 } from './UseRefHook2'
import { UseRefHook3 } from './UseRefHook3'
import { UseRefHook4 } from './UseRefHook4'

function App() {

  return (
    <>
      {/* <UseRefHook />
      <UseRefHook2 />
      <UseRefHook3 /> */}
      {/* <UseRefHook4 /> */}
      {/* <ForwardRefHook /> */}
      <ThemeProvider>
        <HomeComponent />
      </ThemeProvider>
    </>
  )
}

export default App
