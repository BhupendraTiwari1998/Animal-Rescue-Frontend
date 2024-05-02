import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'

const User = () => {

  const [user, setUser] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3002/get-users')
      .then((res) => {
        console.log(res.data)
        setUser(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>

      <Table bordered>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {
            user &&
            user.map((elem, ind) => {
              return (
                <tr>
                  <td>{++ind}</td>
                  <td>{elem.first_name}</td>
                  <td>{elem.last_name}</td>
                  <td>{elem.email}</td>
                  <td>{elem.contact}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

    </div>
  )
}

export default User