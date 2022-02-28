import React from 'react'

export const Upload = ({handleUpload}) => {
  return (
    <> <h3>Drag Photos and Videos here</h3> 
    <label htmlFor="upload">Select from computer</label> 
    <input  type="file" name="upload" id="upload" hidden onChange={handleUpload}/>   </>
  )
}
