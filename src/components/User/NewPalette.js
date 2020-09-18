import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';


export default function NewPalette() {

  const auth = useSelector(state => state.authReducer);
  const {token, user} = auth;
  if (!token || !user) {
    return <Redirect to="/login" />
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [colors, setColors] = useState([]);

  /**
   * Add the color in input box to the state and therefore to the palette.
   * @param {Object} e - passed by default
   */
  const handleAddColor = (e) => {
    e.preventDefault();
    const colorHex = document.querySelector('#colorHex');

    if (colorHex.value && colors.length !== 20) {
      setColors([...colors, colorHex.value]);
      colorHex.value = "";
    }
  }

  /**
   * Delete the color from state and therefore from palette.
   * @param {Object} e - passed by default
   * @param {String} color - hex code of color to be deleted from palette
   */
  const handleDelColor = (e, color) => {
    e.preventDefault();

    // eslint-disable-next-line eqeqeq
    setColors([...colors.filter(c => c != color)])
  }

  /**
   * Delete all colors from state and therefore from palette.
   * Basically set the state to an empty array.
   * @param {Object} e - passed by default
   */
  const handleClearColors = (e) => {
    e.preventDefault();

    setColors([]);
  }

  /**
   * Show preview of the color code being typed in the input box
   */
  const handleColorPreview = () => {
    const newColor = document.querySelector('#colorHex').value;
    document.querySelector('.new-color-preview').style.backgroundColor = newColor;
  }



  return (
    <div className="new-palette-container shadow-lg">
      <h1 className=" text-center text-dark">Create new palette</h1>

      <div className="form-container">
        <form>
          <input type="text" placeholder="Title" id="title" />
          <label></label>
          <label></label>
          <span>
            <input type="text" placeholder="Color hex" id="colorHex" onChange={handleColorPreview} />
            <button id="#addColor" onClick={(e) => handleAddColor(e)}>Add</button>
          </span>

          <label></label>
          <label></label>

          <div className="new-color-preview text-center"></div>

          <label></label>
          <label></label>

          <div className="action-btns">
            <button id="createBtn">Create</button>
            <button id="cancelBtn" onClick={(e) => handleClearColors(e)}>Clear</button>
          </div>

        </form>

        <div className="color-preview-section">

          <div className="pallete-card border" >
            <div className="pallete-sm">
              {
                colors.length === 0 ?
                  (<p className="text-muted">Empty</p>)
                  :
                  colors.map((color, index) => (
                    <div key={index} className="pallete-sm-item" style={{ backgroundColor: color }} ></div>
                  ))
              }
            </div>
          </div>

          <div className="color-code-list">

            {
              colors.length === 0 ?
                null
                :
                colors.map((color, index) => (
                  <div className="color-code-container" key={index}>
                    <span className="color-code">{color}</span> &nbsp;
                    <button id="delColor" onClick={(e) => handleDelColor(e, color)}>x</button>
                  </div>
                ))
            }

          </div>

        </div>
      </div>


    </div>
  );
}
