import React from "react";

function Input({title , setTitle , description , setDescription}) {
  return (
    <div className="layout-column justify-content-center align-items-center">
      <input className="w-100" type="text" placeholder="Enter Title" data-testid="title-input" value={title} onChange={(e) => {setTitle(e.target.value)}} />
      <textarea className="mt-10 w-100" placeholder="Enter Description" data-testid="description-input" value={description} onChange={(e) => {setDescription(e.target.value)}} />
    </div>
  );
}

export default Input;
