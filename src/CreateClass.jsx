import React from 'react';
import './App.css';
import navBar from './navBarBack';

function CreateClass() {
    return (
        <>
        {navBar}
        <section className="scheadule-page">
          <div>
            <input type="month" id="classDatePicker" name="classScheadule" />
          </div>
        </section>
          </>
      );
}
export default CreateClass;