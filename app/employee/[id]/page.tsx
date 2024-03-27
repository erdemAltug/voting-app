import Image from "next/image";

export default function EmployeeDetails({params, search} : {
    params: {id: string},
    search: {search: string}
}) {
  return (

    <div>Employeeee Detail {params.id} </div>

  );
}
