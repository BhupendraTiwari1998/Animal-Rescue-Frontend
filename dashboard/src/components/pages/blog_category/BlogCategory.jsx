import { notification } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const BlogCategory = () => {

  const [blogCat, setBlogCat] = useState([])
  const [delete3, setDelete3] = useState()
  const navivate = useNavigate()


  useEffect(() => {
    axios.get('http://localhost:3002/get-blogcategories')
      .then((res) => {
        console.log(res.data)
        setBlogCat(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [delete3])


  const addOnclick = () => {
    navivate('/add_blog_category')
  }

  const editOnclick = (id) => {
    navivate(`/edit_blog_category/${id}`)
  }

  const deleteOnclick = (id) => {
    axios.delete(`http://localhost:3002/delete-blogcategory/${id}`)
      .then((res) => {
        console.log(res)
        notification.success({ message: "Deleted Successfully" })
        setDelete3(id)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <div>
      <h1>Blog Category Page</h1>

      <div className='flex justify-end mb-3'>
        <button onClick={addOnclick} className='flex items-center bg-blue-600 px-4 py-2 rounded text-white' ><span className='text-2xl me-2 font-bold'><IoIosAddCircleOutline /></span> Add Product</button>
      </div>

      <Table bordered>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Blog Category Name</th>
            <th>Blog Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            blogCat &&
            blogCat.map((elem, ind) => {
              return (
                <tr>
                  <td>{++ind}</td>
                  <td>{elem.blogcategory_name}</td>
                  <td>{elem.blog_description}</td>
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

export default BlogCategory