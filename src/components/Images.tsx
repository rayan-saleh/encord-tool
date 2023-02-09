import { useState, useEffect, useRef } from 'react';
import Table from './Table';
import Upload from './Upload';



export default function Home() {
  const [books, setBooks]: any=useState([]);
  const firstUpdate = useRef(true);

  useEffect(() => {

    if (firstUpdate.current) {
        firstUpdate.current = false;
        const data = window.localStorage.getItem('books');
            if ( data != undefined || data != null ) {
                setBooks(JSON.parse(data));

            }
        return;
    }

  }, []);



  

  // form submit event
  const handleSubmit=(event:any)=>{
    event.preventDefault();
    const file = event.target.files[0];
    const reader: any = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        // setImage(reader.result);

        let book={
            image: reader.result,
            name: event.target.files[0].name,
            size : event.target.files[0].size,
            time : new Date().toLocaleString(),
    
        }

        setBooks([...books, book]);

    };

  }

  // delete book from LS
  const deleteBook=(index: any)=>{
    const filteredBooks=books.filter((element: any, indexx: any)=>{
      return element.index !== index
    })
    setBooks(filteredBooks);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books', JSON.stringify(books));
  },[books])


  return (
    <>
      Upload Image
      <Upload handleSubmit = {handleSubmit}/>
   
        
    <div className="p-1.5 w-full inline-block align-middle my-10	" >
        <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr >
                        
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                            Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                            Size
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase text-center	 "
                        >
                            Time uploaded
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                            Delete
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                            Submit
                        </th>
                    </tr>
                </thead>

                
                <tbody className="divide-y divide-gray-200">

                  <Table books={books} deleteBook={deleteBook}/>
                
                </tbody>

              </table>

            
        </div>
        <button onClick={()=>setBooks([])}>Remove All</button>
    </div>
    

    </>
    )
}
