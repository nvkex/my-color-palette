import React, { useState } from 'react';

export default function NewPalette() {

  const [colors, setColors] = useState(["#2e4235"]);

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
            <button>Add</button>
          </span>

          <label></label>
          <label></label>

          <div className="action-btns">
            <button id="createBtn">Create</button>
            <button id="cancelBtn">Cancel</button>
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
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>

            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>
            <div className="color-code-container">
              <span className="color-code">#2e4235</span> &nbsp;
              <button id="delColor">x</button>
            </div>

          </div>

        </div>
      </div>


    </div>
  );
}
