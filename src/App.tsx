import Exchange from "./components/Exchange"
import SkipLinks from "./components/SkipLinks"

const App = () => {

  return (
    <>
      <SkipLinks />
      <Exchange />

      <div id="main-content" className="main-content"></div>
    </>
  )
}

export default App
