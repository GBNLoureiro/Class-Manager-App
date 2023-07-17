import React from 'react';
import Delete from './assets/Delete-Icon.png';
import Done from './assets/Done-Icon.png';

function CardClass() {
    return (
        <>
            <div className='card-class'>
                <div id='dateCardClass' className='date-card-class'>
                    <p id='day'>02</p>
                    <p id='month'>02</p>
                </div>
                <div id='classScheadule' className='scheadule-card-class'>
                    <p id='hourCardClass' className='hour-card-class'>15:30</p>
                    <p id='nameCardClass' className='name-card-class'>Trx - Advanced</p>
                </div>
                <div className='btn-card-class'>
                    <a id='deleteClass' href='#'><img src={Delete} /></a>
                    <a id='doneClass' href='#'><img src={Done} /></a>
                </div>
            </div>
        </>
    );
}

export default CardClass();