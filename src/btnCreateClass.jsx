import React from 'react';
import DoneIcon from './assets/Done-Icon.png';

function BtnCreateClass() {
    return (
            <>
                <a href='?1'>
                    <div className='btn-edit-class'>
                        <img className='btn-done-icon' src={DoneIcon} />
                        <p className='pdone'>Done!!</p>
                    </div>
                </a>
            </>
    );
}
export default BtnCreateClass();