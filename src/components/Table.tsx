import React from 'react'
import Dialogue from './Dialogue';



export default function Table({books, deleteBook}: any) {

    
return books.map((book: any, index: any) => (


            <tr key={index}>

                <td className="px-6 py-4 text-sm font-medium text-white-800 whitespace-nowrap">
                    {book.name}
                </td>
                <td className="px-6 py-4 text-sm text-white-800 whitespace-nowrap">
                    {book.size}
                </td>
                <td className="px-6 py-4 text-sm text-white-800 whitespace-nowrap">
                    {book.time}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap text-center	"onClick={()=>deleteBook(index)}>
                    <a className="text-red-500 hover:text-red-700" href="#">
                        Delete
                    </a>
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap" >
                    <a className="text-red-500 hover:text-red-700" href="#">
                        <Dialogue book={book}/>
                    </a>
                </td>
            </tr>



    ) ) }