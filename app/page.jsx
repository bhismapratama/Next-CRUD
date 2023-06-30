import AddStudent from './student/addStudent';
import DeleteStudent from './student/deleteStudent'
import UpdateStudentList from './student/editStudent';
export const metadata = {
  title: "Student List"
}

// YOU CAN CHANGE VARIABLE DATA AS DESIRED
// DON'T FORGET TO READ (README.md)

async function getStudent() {
  // GET API LINK
  const res = await fetch('(GET YOUR API LINK)',
    { cache: "no-store" });
  const data = res.json()
  return data;
}

export default async function Student() {
  const students = await getStudent()

  return (
    <div className="flex flex-col p-10">
      <div className="py-10 px-10">
        <div className="py-2">
          <AddStudent />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Student name</th>
              <th>NIM</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((items, index) => {
              return (
                <tr key={items.id}>
                  <td>{index + 1}</td>
                  <td>{items.name}</td>
                  <td>{items.nim}</td>
                  <td className='flex items-center gap-2'>
                    <UpdateStudentList {...items} />
                    <DeleteStudent {...items} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
