export const RenderPanel = ({maleRenderData, maleChatheadRenderData, femaleRenderData, femaleChatheadRenderData}) => {
    return <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#292929', padding: '20px', gap: '20px', height: '100%', boxSizing: 'border-box'}}>
        {/* Full renders */}
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{flex: '0 0 auto'}}><img id='male-render' src={maleRenderData} style={{maxHeight: '500px', width: 'auto'}}/></div>
            <div style={{flex: '0 0 auto'}}><img id='female-render' src={femaleRenderData} style={{maxHeight: '500px', width: 'auto'}}/></div>
        </div>
        {/* Chathead renders */}
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <div style={{flex: '0 0 auto'}}><img id='male-chathead-render' src={maleChatheadRenderData}/></div>
            <div style={{flex: '0 0 auto'}}><img id='female-chathead-render' src={femaleChatheadRenderData}/></div>
        </div>
    </div>
}