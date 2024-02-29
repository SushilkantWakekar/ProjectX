import React from 'react';

import './index.css';

const renderBatch = () => {

    return(
        <>
        <div className='sections'>
                <h4>Batch</h4>
        </div>

        {/* Batch input section  */}
        <div className='sub-sec-container'>
            <div className='sub-section'>
                <label htmlFor='batch-name' className='input-label'>Batch Name</label>
                <input type='text' id='batch-name' className='username-input-field' />
            </div>
            <div className='sub-section'>
                <label htmlFor='start-date' className='input-label'>Batch Start Date</label>
                <input type='date' id='start-date' className='username-input-field' />
                
            </div>
            <div className='sub-section'>
                <label htmlFor='end-date' className='input-label'>Batch End Date</label>
                <input type='date' id='end-date' className='username-input-field' />
            </div>
        </div>
        
        </>
    )
 }

 const renderCourse = () => {
    return(
        <>
        <div className='sections'>
                <h4>Course</h4>
        </div>

        {/* Course input section  */}
        <div className='sub-sec-container'>
            <div className='sub-section'>
                <label htmlFor='batch' className='input-label'>Batch</label>
                {/* <input type='text' id='batch' className='username-input-field' /> */}
                <select name='selectedBatch' className='username-input-field select'>
                    <option value="A" selected>Please Select Batch</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </div>
            <div className='sub-section'>
                <label htmlFor='course-name' className='input-label'>Course Name</label>
                <input type='text' id='course-name' className='username-input-field' />
            </div>
            <div className='sub-section'>
                <label htmlFor='meterial' className='input-label'>Material</label>
                <input type='text' id='meterial' className='username-input-field' />
            </div>
            <div className='sub-section'>
                <label htmlFor='description' className='input-label'>Description</label>
                <input type='text' id='description' className='username-input-field' />
            </div>
        </div>
        
        </>
    )
 }

 const renderTrainee = () => {
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
    return(
        <>
        <div className='sections'>
                <h4>Trainee</h4>
        </div>

        {/* Trainee input section  */}
        <div className='sub-sec-container'>
            <div className='sub-section'>
                <label htmlFor='division' className='input-label'>Division </label>
                <select name='selectedBatch' className='username-input-field select'>
                    <option value="A" selected>Please Select Division</option>
                    <option value="A">Nagpur</option>
                    <option value="B">Pune</option>
                    <option value="C">Nashik</option>
                </select>
            </div>
            <div className='sub-section'>
                <label htmlFor='block' className='input-label'>Block</label>
                <select name='selectedBatch' className='username-input-field select'>
                    <option value="A" selected>Please Select Block</option>
                    <option value="A">Gadchiroli</option>
                    <option value="B">Armori</option>
                    <option value="C">Chamorshi</option>
                </select>
            </div>
            <div className='sub-section'>
                <label htmlFor='post' className='input-label'>Post</label>
                <select name='selectedBatch' className='username-input-field select'>
                    <option value="A" selected>Please Select Post</option>
                    <option value="A">Gadchiroli</option>
                    <option value="B">Armori</option>
                    <option value="C">Chamorshi</option>
                </select>
            </div>
            <div className='sub-section'>
                <label htmlFor='grampanchayat' className='input-label'>Grampanchayat</label>
                <select name='selectedBatch' className='username-input-field select'>
                    <option value="A" selected>Please Select Grampanchayat</option>
                    <option value="A">Navegaon</option>
                    <option value="B">Murkhada</option>
                    <option value="C">Yeoli</option>
                </select>
            </div>
            <div className='sub-section'>
                <label htmlFor='gramsabha' className='input-label'>Gramsabha</label>
                <select name='selectedBatch' className='username-input-field select'>
                    <option value="A" selected>Please Select Gramsabha</option>
                    <option value="A">Navegaon</option>
                    <option value="B">Murkhada</option>
                    <option value="C">Yeoli</option>
                </select>
            </div>
            <div className='sub-section'>
                <label htmlFor='batch' className='input-label'>Batch</label>
                <select name='selectedBatch' className='username-input-field select'>
                    <option value="A" selected>Please Select Batch</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </div>
            <div className='sub-section'>
                <label htmlFor='name' className='input-label'>Name</label>
                <input type='text' id='name' className='username-input-field' />
            </div>
            <div className='sub-section'>
                <label htmlFor='designation' className='input-label'>Designation</label>
                <input type='text' id='designation' className='username-input-field' />
            </div>
            <div className='sub-section'>
                <label htmlFor='education' className='input-label'>Education</label>
                <input type='text' id='education' className='username-input-field' />
            </div>
            <div className='sub-section'>
                <label htmlFor='contact' className='input-label'>Contact No</label>
                <input type='text' id='contact' className='username-input-field' />
            </div>
            <div className='sub-section'>
                <label htmlFor='registration-time' className='input-label'>Registration Time</label>
                <input type='text' id='registration-time' className='username-input-field' value={showTime} />
            </div>
        </div>
        
        </>
    )
 }

 const renderTrainer = () => {
    return(
        <>
        <div className='sections'>
                <h4>Trainer</h4>
        </div>

        {/* Trainer input section  */}
        <div className='sub-sec-container'>
            <div className='sub-section'>
                <label htmlFor='division' className='input-label'>Division</label>
                <select name='selectedBatch' className='username-input-field select'>
                    <option value="A" selected>Please Select Division</option>
                    <option value="A">Nagpur</option>
                    <option value="B">Pune</option>
                    <option value="C">Nashik</option>
                </select>
            </div>
            <div className='sub-section'>
                <label htmlFor='block' className='input-label'>Block</label>
                <select name='selectedBatch' className='username-input-field select'>
                    <option value="A" selected>Please Select Block</option>
                    <option value="A">Gadchiroli</option>
                    <option value="B">Armori</option>
                    <option value="C">Chamorshi</option>
                </select>
            </div>
            <div className='sub-section'>
                <label htmlFor='post' className='input-label'>Post</label>
                <select name='selectedBatch' className='username-input-field select'>
                    <option value="A" selected>Please Select Post</option>
                    <option value="A">Gadchiroli</option>
                    <option value="B">Armori</option>
                    <option value="C">Chamorshi</option>
                </select>
            </div>
            
        </div>
        
        </>
    )
 }


function Training() {

 
  return (
    <>
        <div className='card-style'></div>
        <form className='form-container'>
            <div className='input-container'>
            {renderBatch()}
            </div>

            <div className='input-container'>
            {renderCourse()}
            </div>

            <div className='input-container'>
            {renderTrainee()}
            </div>
            
            <div className='input-container'>
            {renderTrainer()}
            </div>
            
            <button className='save-button'>Save</button>
        </form>
        
    </>
  )
}

export default Training