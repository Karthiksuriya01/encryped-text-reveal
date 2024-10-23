# EncryptedButton React Component

EncryptedButton is a customizable React component that adds an engaging encryption effect to button text on hover. It's perfect for creating interactive and visually appealing buttons in your React applications.

## Features

- Text encryption effect on hover
- Customizable reveal speed
- Optional looping animation
- Fully customizable styles for different button states (base, hover, active)

## Installation

To use EncryptedButton in your project, first ensure you have React installed. Then, copy the `EncryptedButton.jsx` file into your project's component directory.

## Usage

Import the EncryptedButton component in your React file:


Then, use it in your JSX:
jsx
<EncryptedButton
text="Click me!"
styles={yourCustomStyles}
/>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | (required) | The text to display on the button |
| revealSpeed | number | 50 | The speed of the decryption effect (in milliseconds) |
| loop | boolean | false | Whether the encryption effect should loop |
| styles | object | {} | Custom styles for the button |

## Styling

The `styles` prop accepts an object with three sub-objects:

- `base`: Styles applied to the button in its default state
- `hover`: Styles applied when the button is hovered over
- `active`: Styles applied when the button is clicked

Example:
jsx
const buttonStyles = {
base: {
fontFamily: 'Arial, sans-serif',
padding: '10px 20px',
fontSize: '16px',
backgroundColor: '#4CAF50',
color: 'white',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
transition: 'all 0.3s ease',
},
hover: {
backgroundColor: '#45a049',
transform: 'scale(1.05)',
},
active: {
backgroundColor: '#3e8e41',
transform: 'scale(0.95)',
},
};
<EncryptedButton
text="Styled Button"
styles={buttonStyles}
/>

## Example

Here's a complete example of how to use the EncryptedButton component:


jsx
import React from 'react';
import EncryptedButton from './EncryptedButton';
function App() {
const buttonStyles = {
base: {
fontFamily: 'monospace',
padding: '10px',
fontSize: '16px',
backgroundColor: '#3498db',
color: 'white',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
transition: 'all 0.3s ease',
},
hover: {
backgroundColor: '#2980b9',
transform: 'scale(1.05)',
},
active: {
backgroundColor: '#2471a3',
transform: 'scale(0.95)',
},
};
return (
<div>
<h1>Encrypted Button Demo</h1>
<EncryptedButton
text="Hover over me!"
styles={buttonStyles}
revealSpeed={100}
loop={true}
/>
</div>
);
}
export default App;

## Component Code

Here's the full code for the EncryptedButton component:

jsx
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
const letters = "abcdefghijklmnopqrstuvwxyz-.,+!?@&%/=";
const loopDelay = 1000;
const initDelay = 100;
const EncryptedButton = ({ text, revealSpeed = 50, loop = false, styles = {} }) => {
const [displayText, setDisplayText] = useState(text);
const [isHovering, setIsHovering] = useState(false);
const [iteration, setIteration] = useState(0);
const intervalRef = useRef(null);
const [buttonState, setButtonState] = useState('base');
const encrypt = (iteration) => {
return text
.split("")
.map((letter, index) => {
if (index < iteration) {
return text[index];
}
return letters[Math.floor(Math.random() letters.length)];
})
.join("");
};
useEffect(() => {
if (isHovering) {
intervalRef.current = setTimeout(() => {
setIteration((prev) => prev + 1);
intervalRef.current = setInterval(() => {
setIteration((prev) => {
if (prev >= text.length) {
if (loop) {
setTimeout(() => setIteration(0), loopDelay);
return prev;
}
clearInterval(intervalRef.current);
return prev;
}
return prev + 1;
});
}, revealSpeed);
}, initDelay);
} else {
clearTimeout(intervalRef.current);
clearInterval(intervalRef.current);
setIteration(0);
setDisplayText(text); // Reset to original text when not hovering
}
return () => {
clearTimeout(intervalRef.current);
clearInterval(intervalRef.current);
};
}, [isHovering, text, revealSpeed, loop]);
useEffect(() => {
if (isHovering) {
setDisplayText(encrypt(iteration));
}
}, [iteration, text, isHovering]);
const buttonStyle = {
...styles.base,
...(buttonState === 'hover' ? styles.hover : {}),
...(buttonState === 'active' ? styles.active : {}),
};
return (
<button
onMouseEnter={() => {
setIsHovering(true);
setButtonState('hover');
}}
onMouseLeave={() => {
setIsHovering(false);
setButtonState('base');
}}
onMouseDown={() => setButtonState('active')}
onMouseUp={() => setButtonState('hover')}
style={buttonStyle}
>
{displayText}
</button>
);
};
EncryptedButton.propTypes = {
text: PropTypes.string.isRequired,
revealSpeed: PropTypes.number,
loop: PropTypes.bool,
styles: PropTypes.shape({
base: PropTypes.object,
hover: PropTypes.object,
active: PropTypes.object,
}),
};
export default EncryptedButton;

## License

This project is open source and available under the [MIT License](LICENSE).
This README file now includes all the necessary information about the EncryptedButton component, including its features, usage instructions, props, styling options, a complete example, and the full component code. This comprehensive guide should help users understand and implement the EncryptedButton component in their React projects.