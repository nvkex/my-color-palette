/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { listDefaultPalettes } from '../actions/defPaletteActions';
import { getAllPalettes } from '../actions/PaletteActions';
import Modal from './Modal';


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
 * Displays the color combination by palette ID.
 * @param {Object} props - default object passed by react
 */
export default function SinglePalette(props) {
  const defaultPalettes = useSelector(state => state.defaultPalettes);
  const { userPalettes } = useSelector(state => state.paletteReducer);
  const { token, user } = useSelector(state => state.authReducer);
  const [modalData, setModalData] = useState({ display: false });

  const { defaultPalettesList } = defaultPalettes;

  const dispatch = useDispatch();

  if (!defaultPalettesList)
    dispatch(listDefaultPalettes());

  const palleteID = props.match.params.id;
  var currentPalette = [];

  if (defaultPalettesList)
    currentPalette = [...defaultPalettesList.filter(palette => palette.id == palleteID)]

  if (currentPalette.length === 0) {
    // If user is not logged in, redirect to login page
    if (!token || !user) {
      return <Redirect to="/login" />
    }

    if (!userPalettes) {
      dispatch(getAllPalettes(token, user._id));
    }
    else {
      currentPalette = [...userPalettes.data.filter(palette => palette.slug == palleteID)]
    }
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
        setModalData({ display: true, head: "🗸", desc: "Copied to clipboard!", color: "success" });
      })
      .catch(() => {
        alert('Error');
      })
  }

  return (
    <div>
      <Modal data={modalData} setDisplay={setModalData} />
      <div className="full-palette">
        {
          currentPalette.length !== 0 ? currentPalette[0].colors.map(color => (
            <div className="color-box" style={{ backgroundColor: color }} key={color}>
              <button className="copy-btn" onClick={(e) => handleCopy(e)}>Copy</button>
            </div>
          )) : null
        }
      </div>
    </div>
  );
}
