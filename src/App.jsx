import './App.css'
import { OptionsPanel } from './OptionsPanel'
import { RenderPanel } from './RenderPanel'
import { useState } from 'react'

function App() {

  const [requestInProcess, setRequestInProcess] = useState(false);
  const [maleRenderData, setMaleRenderData] = useState(null);
  const [femaleRenderData, setFemaleRenderData] = useState(null);
  const [maleChatheadRenderData, setMaleChatheadRenderData] = useState(null);
  const [femaleChatheadRenderData, setFemaleChatheadRenderData] = useState(null);

  const updateRenderData = ({ maleRenderData, femaleRenderData, maleChatheadRenderData, femaleChatheadRenderData }) => {
    setMaleRenderData(maleRenderData)
    setMaleChatheadRenderData(maleChatheadRenderData)
    setFemaleRenderData(femaleRenderData)
    setFemaleChatheadRenderData(femaleChatheadRenderData)
  }

  const fetchResults = (itemId, selectedRotation, poseAnim) => {
    setRequestInProcess(true)
    updateRenderData({ maleRenderData: null, femaleRenderData: null, maleChatheadRenderData: null, femaleChatheadRenderData: null })
    fetch('https://chisel.weirdgloop.org/playerkit/render', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "id": itemId, "rotation": selectedRotation, "poseAnim": poseAnim }),
    })
      .then((response) => response.json())
      .then((data) => { updateRenderData(data) })
      .finally(() => setRequestInProcess(false))
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: '1 1' }}>
        <OptionsPanel onSubmit={fetchResults} canSubmit={!requestInProcess} />
      </div>
      <div style={{ flex: '0 0 50%', minHeight: '700px' }}>
        <RenderPanel
          maleRenderData={maleRenderData}
          maleChatheadRenderData={maleChatheadRenderData}
          femaleRenderData={femaleRenderData}
          femaleChatheadRenderData={femaleChatheadRenderData}
        />
      </div>
    </div>
  )
}

export default App
