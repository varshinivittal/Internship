import React from 'react';
import {Table} from 'reactstrap';

const MyTable = ({array,Submitted}) => (
	<Table id="t01">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>State</th>
            <th>City</th>
            <th>Zip</th>
            </tr>
        </thead>
        <tbody>
         {array.map((item,index)=>(
         	<tr key={index}>
            <td>{item.FirstName}</td>
            <td>{item.LastName}</td>
            <td>{item.Email}</td>
            <td>{item.Address}</td>
            <td>{item.State}</td>
            <td>{item.City}</td>
            <td>{item.Zip}</td>
          </tr>
           ))}
          </tbody>
          </Table>
	);
export default MyTable;