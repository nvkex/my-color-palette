/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Modal from '../Modal';


export default function NewPalette() {

  const auth = useSelector(state => state.authReducer);
  const { token, user } = auth;
  if (!token || !user) {
    return <Redirect to="/login" />
  }

  const [colors, setColors] = useState([]);
  const [modalData, setModalData] = useState({ display: false });

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

  /**
   * Verify and submit for new palette creation
   * @param {Object} e - passed by default
   * 
   * Handling server responses:
   * res.data.success is true -> Palette created
   * res.data.success is false -> Error occured
   */
  const handleCreatePalette = (e) => {
    e.preventDefault();



    const title = document.querySelector('#title').value;
    const isPrivate = document.querySelector('#privateCheck').checked;
    const author = {
      id: user._id,
      name: user.name
    }


    if (!title) {
      setModalData({ display: true, head: "Error!", desc: "Title is required!", color: "danger" });
      return;
    }

    if (colors.length >= 20 || colors.length === 0) {
      setModalData({ display: true, head: "Error!", desc: "Please add max 20 and min 1 color.", color: "danger" })
      return;
    }


    // show spinner
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'block';

    // Data to be send to server
    const data = {
      title,
      author,
      colors,
      token,
      private: isPrivate
    }

    // Submit data
    if (colors.length <= 20 && title && user && token) {

      axios.post('https://my-color-palette.herokuapp.com/user/new-palette', data)
        .then(res => {
          spinner.style.display = 'none';
          // Creation successfull when res.data.success is true
          if (res.data.success)
            setModalData({ display: true, head: "Success!", desc: "Palette Saved.", color: "success" });
          else
            setModalData({ display: true, head: "Failed!", desc: "An error occured, palette wasn't saved.", color: "danger" });

        })
        .catch(err => {
          console.log(err);
          spinner.style.display = 'none';
        })
    }

  }



  return (
    <div>
      <Modal data={modalData} setDisplay={setModalData} />
      <div className="new-palette-container shadow-lg">
        <h1 className=" text-center text-dark">Create new palette</h1>

        <div className="form-container">
          <form>
            <input type="text" placeholder="Title" id="title" required />
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
            <label className="text-danger">*Max 20 colors are allowed per palette.</label>
            <label></label>
            <label></label>

            <label class="private-box">Private
              <input id="privateCheck" type="checkbox"/>
              <span class="checkmark"></span>
            </label>
            <label></label>
            <label></label>

            <div className="action-btns">
              <button id="createBtn" onClick={(e) => handleCreatePalette(e)}>Create</button>
              <button id="cancelBtn" onClick={(e) => handleClearColors(e)}>Clear</button>
            </div>

            <div className="spinner text-muted">
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
              <p>Saving...</p>
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
    </div>
  );
}
