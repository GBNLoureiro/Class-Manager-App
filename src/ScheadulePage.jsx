import React from 'react';
import navBar from './navBar';
import cardClass from './cardClass';
import BtnAddClass from './btnAddClass';

function ScheadulePage() {
    return (
        <>
        {navBar}
        <section className="scheadule-page">
          <div>
            <input type="month" id="classDatePicker" name="classScheadule" />
          </div>
            {cardClass}
            {cardClass}
            {cardClass}
            {cardClass}
        </section>
        {BtnAddClass}
          </>
      );
}
export default ScheadulePage;