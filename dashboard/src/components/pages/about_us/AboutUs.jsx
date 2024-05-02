import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { truncate } from '../../util'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


const AboutUs = () => {

  const [about, setAbout] = useState([])
  const [path, setPath] = useState("")
  const [delete2, setDelete2] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3002/get-aboutus')
      .then((res) => {
        console.log(res.data)
        setAbout(res.data.data)
        setPath(res.data.filepath)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [delete2])

  const clickHand = () => {
    navigate('/add_aboutus')
  }

  const DeleteClickHand = (id) => {

    axios.delete(`http://localhost:3002/delete-about/${id}`)
      .then((res) => {
        console.log(res)
        notification.success({ message: "Deleted Successfully" })
        setDelete2(id)

      })
      .catch((err) => {
        console.log(err)
      })
  }

  const EditclickHand = (id) => {
    navigate(`/edit_aboutus/${id}`)
  }
  return (
    <div>
      <h1>About page</h1>

      <div className='flex justify-end mb-3'>
        <button onClick={clickHand} className='flex items-center bg-blue-600 px-4 py-2 rounded text-white' ><span className='text-2xl me-2 font-bold'><IoIosAddCircleOutline /></span> Add About Us</button>
      </div>

      <Table bordered>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            about &&
            about.map((elem, ind) => {
              return (
                <tr>
                  <td>{++ind}</td>
                  <td>{elem.name}</td>
                  <td>{elem.description ? truncate(elem.description, 50) : ""}</td>
                  <td><img style={{ height: '60px' }} src={path + '/' + elem.image} alt="" /></td>
                  
                  <td>
                    <button className='text-3xl text-black-200 hover:text-green-600 ' onClick={() => EditclickHand(elem._id)} ><CiEdit /></button>

                    <button className='btn2 text-3xl ms-2 text-black-200 hover:text-red-600' onClick={() => DeleteClickHand(elem._id)}><MdDelete /></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default AboutUs