import React from 'react'

export const CreatePostModal = () => {
  return (
    <>
        <div className='shadow-bg'><img src="assets/close.png" alt="" /></div>
          <div className='modal'>
        <header>Create a New Post</header>
       <section>
        <h3>Drag Photos and Videos here</h3> 
        <label htmlFor="upload">Select from computer</label> 
        <input type="file" name="upload" id="upload" hidden/>   
        </section>   
    </div>
    </>
  
  )
}
