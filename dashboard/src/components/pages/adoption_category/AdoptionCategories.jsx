import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { notification } from 'antd'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const AdoptionCategories = () => {

  const [adoptionCate, setAdoptionCate] = useState([])
  const navigate = useNavigate()
  const [delete1, setDelete1] = useState()

  useEffect(() => {
    axios.get('http://localhost:3002/get-categories')
      .then((res) => {
        console.log(res.data.data)
        setAdoptionCate(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [delete1])

  const onclickHand = () => {
    navigate('/add_category')
  }

  const onclickDelete = (id) => {

    // console.log("Delete", id)
    axios.delete(`http://localhost:3002/delete-category/${id}`)
      .then((res) => {
        console.log(res)
        notification.success({ message: "Deleted Successfully" })
        setDelete1(id)
      })
      .catch((err) => {
        console.log(err)
      })

  }

  const onclickEdit = (id) => {
    // console.log("mohit",id)
    navigate(`/edit_category/${id}`)
  }

  return (
    <div>
      <h1>Adoption Categories page </h1>

      <div className='flex justify-end mb-3'>
        <button onClick={onclickHand} className='flex items-center bg-blue-600 px-4 py-2 rounded text-white' ><span className='text-2xl me-2 font-bold'><IoIosAddCircleOutline /></span> Add Product</button>
      </div>

      <Table bordered>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            adoptionCate &&
            adoptionCate.map((elem, ind) => {
              return (
                <tr>
                  <td>{++ind}</td>
                  <td>{elem.category_name}</td>
                  <td>{elem.description}</td>
                 
                  <td>
                    <button className='text-3xl text-black-200 hover:text-green-600 ' onClick={() => onclickEdit(elem._id)} ><CiEdit /></button>

                    <button className='btn2 text-3xl ms-2 text-black-200 hover:text-red-600' onClick={() => onclickDelete(elem._id)}><MdDelete /></button>
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

export default AdoptionCategories