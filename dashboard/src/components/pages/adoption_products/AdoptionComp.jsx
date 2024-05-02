import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { truncate } from '../../util';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";


const AdoptionComp = () => {

  const [adoption1, setAdoption1] = useState([])
  const [path, setPath] = useState("")
  const [delete2, setDelete2] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3002/get-adoptions')
      .then((res) => {
        // console.log(res)
        setAdoption1(res.data.data)
        setPath(res.data.filepath)
      })
      .then((err) => {
        console.log(err)
      })
  }, [delete2])

  const addClickHand = () => {
    navigate('/add_adoption')
  }

  const editOnclick = (id) => {
    navigate(`/edit_adoption/${id}`)
  }

  const deleteOnclick = (id) => {
    // console.log("deleteID",id)
    axios.delete(`http://localhost:3002/delete-pets/${id}`)
      .then((res) => {
        // console.log(res)
        notification.success({ message: "Deleted Successfully" })
        setDelete2(id)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Adoption Products Page</h1>

      <div className='flex justify-end mb-3'>
        <button onClick={addClickHand} className='flex items-center bg-blue-600 px-4 py-2 rounded text-white' ><span className='text-2xl me-2 font-bold'><IoIosAddCircleOutline /></span> Add Product</button>
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>Name</th>
            <th>Breed</th>
            <th>Description</th>
            <th>Category</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            adoption1 &&
            adoption1.map((elem, ind) => {
              return (
                <tr>
                  <td>{++ind}</td>
                  <td>{elem.name}</td>
                  <td>{elem.breed}</td>
                  <td>{elem.description ? truncate(elem.description, 40) : ''}</td>
                  <td>{elem.category.category_name}</td>
                  <td><img src={path + '/' + elem.image} style={{ height: '40px', width: '90%', objectFit: 'cover' }} alt="" /></td>
                  <td>
                    <button className='text-3xl text-black-200 hover:text-green-600 ' onClick={() => editOnclick(elem._id)} ><CiEdit /></button>
                    <button className='btn2 text-3xl ms-2 text-black-200 hover:text-red-600' onClick={() => deleteOnclick(elem._id)}><MdDelete /></button>
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

export default AdoptionComp