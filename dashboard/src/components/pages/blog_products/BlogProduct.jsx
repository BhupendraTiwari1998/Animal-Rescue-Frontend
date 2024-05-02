import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { truncate } from '../../util'
import { notification } from 'antd'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const BlogProduct = () => {

  const [blog, setBlog] = useState([])
  const [path, setPath] = useState('')
  const [delete4, setDelete4] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3002/get-blogproduct')
      .then((res) => {
        console.log(res.data)
        setBlog(res.data.data)
        setPath(res.data.filepath)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [delete4])

  const AddonClick = () => {
    navigate('/add_blog_product')
  }

  const editocClick = (id) => {
    navigate(`/edit_blog_product/${id}`)
  }

  const deleteocClick = (id) => {
    axios.delete(`http://localhost:3002/delete-blogproduct/${id}`)
      .then((res) => {
        console.log(res)
        notification.success({ message: "Delete Successfully" })
        setDelete4(id)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <h1>Blog Product Page</h1>

      {/* <Button style={{margin:'30px 0'}} onClick={AddonClick}>Add Blog Product</Button> */}
      <div className='flex justify-end mb-3'>
        <button onClick={AddonClick} className='flex items-center bg-blue-600 px-4 py-2 rounded text-white' ><span className='text-2xl me-2 font-bold'><IoIosAddCircleOutline /></span> Add Product</button>
      </div>

      <Table bordered>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Product Name</th>
            <th>Short Description</th>
            <th>Blog Description</th>
            <th>Master</th>
            <th>Category</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            blog &&
            blog.map((elem, ind) => {
              return (
                <tr>
                  <td>{++ind}</td>
                  <td>{elem.blogproduct_name}</td>
                  <td>{elem.blogshort_description ? truncate(elem.blogshort_description, 18) : ''}</td>
                  <td>{elem.blogdescription ? truncate(elem.blogdescription, 18) : ''}</td>
                  <td>{elem.master}</td>
                  <td>{elem.blog_categories.blogcategory_name}</td>
                  <td><img src={path + '/' + elem.image} style={{ height: '40px',width:'90%' }} alt="" /></td>
                  
                  <td>
                    <button className='text-3xl text-black-200 hover:text-green-600 ' onClick={() => editocClick(elem._id)} ><CiEdit /></button>
                    <button className='btn2 text-3xl ms-2 text-black-200 hover:text-red-600' onClick={() => deleteocClick(elem._id)}><MdDelete /></button>
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

export default BlogProduct