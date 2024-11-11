import './RenderPanel.css'

export const RenderPanel = ({itemNames, maleRenderData, maleChatheadRenderData, femaleRenderData, femaleChatheadRenderData}) => {
    const baseFileName = itemNames?.length > 1 ? '_'.join(itemNames) : (itemNames[0] ?? '')
    return <div className='render-panel'>
        {/* Full renders */}
        <div className='render-row'>
            <a className='render-container' href={maleRenderData} download={baseFileName + ' equipped male.png'}>
                <img id='male-render' src={maleRenderData} className='full-render-image'/>
            </a>
            <a className='render-container' href={femaleRenderData} download={baseFileName + ' equipped female.png'}>
                <img id='female-render' src={femaleRenderData} className='full-render-image'/>
            </a>
        </div>
        {/* Chathead renders */}
        <div className='render-row'>
            <a href={maleChatheadRenderData} download={baseFileName + ' chathead.png'}>
                <div className='render-container'><img id='male-chathead-render' src={maleChatheadRenderData}/></div>
            </a>
            <a href={femaleChatheadRenderData} download={baseFileName + ' chathead female.png'}>
                <div className='render-container'><img id='female-chathead-render' src={femaleChatheadRenderData}/></div>
            </a>
        </div>
    </div>
}