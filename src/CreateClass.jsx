import React from 'react';
import './App.css';
import navBar from './navBarBack';
import DoneIcon from './assets/Done-Icon.png';
import BtnCreateClass from './btnCreateClass';

function CreateClass() {
    return (
        <>
        {navBar}
        <section className="scheadule-page">
          <div>
            <label hidden for="classNameInput">Class name:</label><br />
              <input type="text" id="classNameInput" name="classNameInput" placeholder='Class Name' />
          </div>
          <div className='class-main-data'>
            <div>
              <label hidden for="classDate">Class date:</label><br />
              <input type="date" name='classDate' id='classDate' /><br />
              <label hidden for="classTime">Time scheadule:</label><br />
              <input type="time" name="classTime" id="classTime" /><br />
            </div>
            <div>
              <label hidden for="classPhoto">Select a photo:</label><br />
              <input type="file" id="classPhoto" name="classPhoto" />
            </div>
          </div>
          <div>
            <label hidden for="classAddress">Time scheadule:</label><br />
            <input type="text" name="classAddress" id="classAddress" placeholder='Where is your class?' />
          </div>
          <div className='class-summary'>
            <p>Class Summary:</p><br />
            <textarea>Type here some important information!</textarea>
          </div>
          <div className='class-checklist' >
            <p>Checklist</p>
            <div className='checklist'>
              <input type="text" name="" id="checklist1" /><br />
              <input type="text" name="" id="checklist2" /><br />
              <input type="text" name="" id="checklist3" />
            </div>
          </div>
          
        </section>
        {BtnCreateClass}
          </>
      );
}

export default CreateClass;