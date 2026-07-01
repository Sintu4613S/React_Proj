import React from 'react'
import Button from './Button'

const Colorsw = () => {
  const [color, setColor] = React.useState('transparent');
  const handleColor = (color) => {
    setColor(color);
  };
  return (
    <div>
      <div className="container text-center my-4">
        <h1> 🎨Color Switcher</h1>
      </div>
      <div className="container d-flex justify-content-center">
        <Button title='Pink' func={() => { handleColor('pink'.toUpperCase()) }} />
        <Button title='Red' func={() => { handleColor('red'.toUpperCase()) }} />
        <Button title='Green' func={() => { handleColor('green'.toUpperCase()) }} />
        <Button title='LightCoral' func={() => { handleColor('lightcoral'.toUpperCase()) }} />
        <Button title='Black' func={() => { handleColor('black'.toUpperCase()) }} />
        <Button title='Blue' func={() => { handleColor('blue'.toUpperCase()) }} />
        <Button title='Orange' func={() => { handleColor('orange'.toUpperCase()) }} />
      </div>
      <div className="container border border-4 my-4 d-flex align-items-center justify-content-center" style={{ width: '200px', height: '200px', backgroundColor: color }}>
        {color === 'transparent' ? <h3>Color Box</h3> : <h3 className='text-white'>{color}</h3>}
      </div>

    </div>
  )
}

export default Colorsw
