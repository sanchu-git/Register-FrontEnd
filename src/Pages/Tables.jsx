import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function Tables() {
  return (
<p>
      <div className='text-center mt-3'>
        <h1>Student Details</h1>
        <Table responsive="sm" className='container'>
          <thead>
            <tr>
              <th>#</th>
              <th>Fisrt Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Dob</th>
              <th>Gender</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Link to={'/'}><button  className='btn btn-info'>Back</button></Link>

</p>
  );
}

export default Tables;