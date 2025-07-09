import './App.css'
import { HomeComponent } from './contextAPI/HomeComponent'
import { ThemeProvider } from './contextAPI/ThemeContext'
import { ForwardRefHook } from './ForwardRefHook'
import { ReactMemo } from './React-Memo/ReactMemo'
import { ParentMemoComponent } from './React.memo+useMemo/ParentMemoComponent'
import { CountComponent } from './UseCallbackHook/CountComponent'
import { MemoParentComponent } from './useMemoHook/MemoParentComponent'
import { UseReduecerHook2 } from './useReducerHook-improved/UseReducerHook2'
import { UseReduecerHook } from './useReducerHook/UseReducerHook'
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
      {/* <ThemeProvider>
        <HomeComponent />
      </ThemeProvider> */}
      {/* <UseReduecerHook /> */}
      {/* <UseReduecerHook2 /> */}
      {/* <ReactMemo /> */}
      {/* <MemoParentComponent /> */}
      {/* <ParentMemoComponent /> */}
      <CountComponent />
    </>
  )
}

export default App
