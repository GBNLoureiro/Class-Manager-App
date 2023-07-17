import React from 'react';
import AddIcon from './assets/Add-Icon.png';

function BtnAddClass() {
    return (
        <>
            <a href='?2'><div className='btn-add-class'>
                    <img src={AddIcon} />
                </div></a>
        </>
    )
}

export default BtnAddClass();