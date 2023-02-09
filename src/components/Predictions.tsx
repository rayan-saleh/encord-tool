import { useEffect, useState } from "react";
import View from "./View";

export default function Table() {
    const [books, setBooks]: any=useState([]);



    const fetchBooks = async () => {
        try{
        const response = await fetch('http://localhost:3004/images');
        const data = await response.json();
        setBooks(data);
        }
        catch (err)
        {
            console.log(err);
        }

    };

    useEffect(() => {
        fetchBooks();
    }, []);
    

    





    return (
        <>
       
        <div className="p-1.5 w-full inline-block align-middle" >
        <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr >
                        
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                        
                        Title

                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                            Description
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                            Timestamp
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                            Button
                        </th>
                       
                    </tr>
                </thead>

                
                <tbody className="divide-y divide-gray-200">
                {books.map((book: any, index: any) => (

                
                

                    <tr key={index}>
                           
                        <td className="px-6 py-4 text-sm font-medium text-white-800 whitespace-nowrap">
                            {book.book.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-white-800 whitespace-nowrap">
                            {book.book.description}
                        </td>
                        <td className="px-6 py-4 text-sm text-white-800 whitespace-nowrap">
                            {book.book.predictionTime}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap" >
                            <a className="text-red-500 hover:text-red-700" href="#" >
                                <View index={index} />
                            </a>
                        </td>
                    </tr>
                ))}



                
    </tbody>

              </table>

            {/* <button onClick={()=>setBooks([])}>Remove All</button> */}
        </div>
    </div>

    </>

    );

}
