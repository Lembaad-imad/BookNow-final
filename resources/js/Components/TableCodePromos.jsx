import { Link, router } from "@inertiajs/react";
import TableHeading from "./TableHeading";
import TextInput from "./TextInput";
import SelectInput from "./SelectInput";

export default function TableCodePromos({codepromosevent,toggleModalEdit,setIdCodePromos}){

    const deleteEevent =(e)=>{
        console.log(e)
        if (!window.confirm("Are you sure you want to delete the project?")) {
            return;
          }
          
          router.delete(route("codepromos.destroy", e.id));
    }
    const handleClick = (e) => {
        toggleModalEdit()
        setIdCodePromos(e)
    }
    return (
        <table className="w-full text-sm text-left rt1:text-right text-gray-500 dark:text-gary-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
          <tr className="text-nowrap">
            <TableHeading
              name={"id"}
             
            >
              ID
            </TableHeading>

            <TableHeading
              name={"name"}

            >
              Name
            </TableHeading>
            <TableHeading
              name={"start_date"}

            >
              Start Date
            </TableHeading>
            <TableHeading
              name={"end_date"}

            >
              End Date
            </TableHeading>

            <TableHeading name={"percentage"} >
                Percentage
            </TableHeading>
            <TableHeading name={"actions"} sortable={false}>
                    Actions
                  </TableHeading>

          </tr>
        </thead>

        <tbody>
          {codepromosevent.map((code) => (
          
            <tr
              key={code.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="px-3 py-2">{code.id}</td>
              <th className="px-3 py-2 text-gray-800 text-nowrap hover:underline">
                
                  {code.name}
                
              </th>
            

              <td className="px-3 py-2">{code.start_date}</td>

             <td className="px-3 py-2">{code.end_date}</td>
             <td className="px-3 py-2">{code.percentage} %</td>
              <td className="px-3 py-2">
                <button
                  onClick={()=>handleClick(code.id)}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => deleteEevent(code)}
                  className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
}