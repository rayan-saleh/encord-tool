// INCOMPLETE


import React, { useState, useEffect } from 'react';


export default function View({ index }: any ) {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState<any | null>(null);
  const [predictions, setPredictions] = useState<any | null>(null);

  const fetchImages = async () => {
    const response = await fetch(`http://localhost:3004/images/${index+1}`);
    const data = await response.json();
    const imageJson = data.book.image;
    setImage(imageJson);
    console.log(imageJson);
    
    };


    const grabPredictions = async () => {
      const response = await fetch(`http://localhost:3004/predictions`);
      const predictions = await response.json();
      setPredictions(predictions);

    }

    useEffect(() => {
      grabPredictions();
    }, []);





function Draw() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    let context: any = canvas.getContext('2d');
      context.fillStyle = "rgba(76, 174, 120, 0.43)";
      // context.fillRect(prediction.bbox.x1,prediction.bbox.y1,prediction.bbox.w1,prediction.bbox.h1);

}




  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => { setShowModal(true); fetchImages();}}
      >
        View
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">


              {/*content*/}



              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">

                    <div id="container" style={{display: "inline-block", position: "relative"}} >

             

                    <canvas id="canvas" className="absolute flex justify-center items-center z-10" >
                      <p className="absolute bottom-0 right-0 h-16 w-16">predictions.bbox.label</p>
                        
                      </canvas>

                      <img src={image} alt='' style={{position: "relative", zIndex: 1}}/>
                      </div>
 

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      
                      setShowModal(false)
                    }}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
