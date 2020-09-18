import React, { useEffect, useState } from 'react';


export default function NewPalette() {

  const [colors, setColors] = useState([]);


  const handleAddColor = (e) => {
    e.preventDefault();
    const colorHex = document.querySelector('#colorHex');

    if(colorHex.value && colors.length !== 20){
      setColors([...colors, colorHex.value]);
      colorHex.value = "";
    }
  }

  const handleDelColor = (e) => {
    e.preventDefault();
  }

  const handleClearColors = (e) => {
    e.preventDefault();
  }


  useEffect(() => {


    return () => { };
  },
    [])

  return (
    <div className="new-palette-container shadow-lg">
      <h1 className=" text-center text-dark">Create new palette</h1>

      <div className="form-container">
        <form>
          <input type="text" placeholder="Title" id="title" />
          <label></label>
          <label></label>
          <span>
            <input type="text" placeholder="Color hex" id="colorHex" />
            <button id="#addColor" onClick={(e) => handleAddColor(e)}>Add</button>
          </span>

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
                    <button id="delColor" onClick={(e) => handleDelColor(e)}>x</button>
                  </div>
                ))
            }


          </div>

        </div>
      </div>


    </div>
  );
}
