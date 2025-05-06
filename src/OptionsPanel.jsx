import './OptionsPanel.css';
import { useRef, useState } from 'react';

const ROT_128 = '0';
const ROT_384 = '1';
const ROT_1152 = '2';
const ROT_1664 = '3';
export const OptionsPanel = ({ onSubmit, canSubmit }) => {
    const idFieldRef = useRef(null);
    const poseAnimFieldRef = useRef(null);
    const [selectedRotation, setSelectedRotation] = useState('0');

    const onClick = () => {
        const itemId = idFieldRef.current.value;
        const poseAnimId = poseAnimFieldRef.current.value

        if (idFieldRef.current.validity.valid && poseAnimFieldRef.current.validity.valid)
            onSubmit(itemId, selectedRotation, poseAnimId)
        else
            console.log('fill out the form dumbass')
    }

    const onRadioChange = (event) => {
        setSelectedRotation(event.target.value)
    }

    return <div style={{ padding: '20px 40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', width: '80%' }}>
            <label style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'flex-start' }}>
                <span className='form-label'>Item id</span>
                <input ref={idFieldRef} type='text' size='6' className='form-text-input' pattern='([0-9]+)(,[0-9]+)*' required />
            </label>

            <label style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'flex-start' }}>
                <span className='form-label'>Pose id</span>
                <input ref={poseAnimFieldRef} type='text' defaultValue='808' size='6' className='form-text-input' pattern='[0-9]+' required/>
            </label>

            <label style={{ display: 'flex', gap: '12px', alignItems: 'center', justifyContent: 'flex-start' }}>
                <span className='form-label'>Rotation</span>
                <span className='btn-group'>
                    <input id="btn-radio-0" className='btn-radio' type="radio" name="options" value={ROT_128} checked={selectedRotation === ROT_128} onChange={onRadioChange} />
                    <label htmlFor="btn-radio-0" className='btn'>128</label>

                    <input id="btn-radio-1" className='btn-radio' type="radio" name="options" value={ROT_384} checked={selectedRotation === ROT_384} onChange={onRadioChange} />
                    <label htmlFor="btn-radio-1" className='btn'>384</label>

                    <input id="btn-radio-2" className='btn-radio' type="radio" name="options" value={ROT_1152} checked={selectedRotation === ROT_1152} onChange={onRadioChange} />
                    <label htmlFor="btn-radio-2" className='btn'>1152</label>

                    <input id="btn-radio-3" className='btn-radio' type="radio" name="options" value={ROT_1664} checked={selectedRotation === ROT_1664} onChange={onRadioChange} />
                    <label htmlFor="btn-radio-3" className='btn'>1664</label>
                </span>
            </label>

            <button onClick={onClick} style={{ maxWidth: '200px' }} disabled={!canSubmit}>Submit</button>
        </div>
    </div>
}