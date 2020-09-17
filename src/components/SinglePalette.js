/* eslint-disable eqeqeq */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listDefaultPalettes } from '../actions/defPaletteActions';


/**
 * Converts a number to HEX
 * @param {Number} c - Number to be converted to hex code
 */
function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}


/**
 * convert RBG color to HEX color
 * @param {Number} r - Number corresponding to Red
 * @param {Number} g - Number corresponding to Green
 * @param {Number} b - Number corresponding to Blue
 */
const rgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


/**
 * Handle click on 'copy' to copy the hex value of color
 * @param {Object} e - target DOM element
 */
const handleCopy = (e) => {
  const rgb = e.nativeEvent.target.parentElement.style.backgroundColor;
  const rgbArr = rgb.substring(4, rgb.length - 1).split(',')
  const hex = rgbToHex(
    Number(rgbArr[0].trim()),
    Number(rgbArr[1].trim()),
    Number(rgbArr[2].trim())
  );

  // Copy HEX code to clipboard
  navigator.clipboard.writeText(hex)
    .then(() => {
      alert('Copied');
    })
    .catch(() => {
      alert('Error');
    })
}

/**
 * Displays the color combination by palette ID.
 * @param {Object} props - default object passed by react
 */
export default function SinglePalette(props) {
  const defaultPalettes = useSelector(state => state.defaultPalettes);

  const { defaultPalettesList } = defaultPalettes;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!defaultPalettesList)
      dispatch(listDefaultPalettes());
    return () => {
    }
  }, 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  const palleteID = props.match.params.id;
  var currentPalette = [];

  if (defaultPalettesList)
    currentPalette = [...defaultPalettesList.filter(palette => palette.id == palleteID)]

  return (
    <div>
      <div className="full-palette">
        {
          currentPalette.length !== 0 ? currentPalette[0].colors.map(color => (
            <div className="color-box" style={{ backgroundColor: color }} key={color}><button className="copy-btn" onClick={(e) => handleCopy(e)}>Copy</button></div>
          )) : null
        }
      </div>
    </div>
  );
}
