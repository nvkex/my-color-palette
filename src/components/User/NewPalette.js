import React from 'react';

export default function NewPalette() {
  return (
    <div className="new-palette-container shadow-lg">
      <h1 className=" text-center text-dark">Create new palette</h1>

      <div className="form-container">
        <form>
          <input type="text" placeholder="Title" id="title" />
          <label></label>
          <span>
            <input type="text" placeholder="Color hex" id="colorHex" />
            <button>Add</button>
          </span>

        </form>

        <div className="color-preview-section">
          Test
        </div>
      </div>

      <div className="action-btns">
        <button id="createBtn">Create</button>
        <button id="cancelBtn">Cancel</button>
      </div>


    </div>
  );
}
