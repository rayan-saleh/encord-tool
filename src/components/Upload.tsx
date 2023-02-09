// import { useState } from "react";
// import { useEffect, useRef } from "react";



const Upload = ({handleSubmit}: any) => {
let formData: any = {};
  
const processSubmit = (event: any) => {

  handleSubmit(event);
  
// }
}


  return (
    <>
        <form>
           <input type="file" onChange={processSubmit} value={formData.file}/>
        </form>

    </>
  );
};

export default Upload;