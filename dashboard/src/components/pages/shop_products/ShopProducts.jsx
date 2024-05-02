import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { truncate } from '../../util'
import { notification } from 'antd'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const ShopProduct = () => {

  const [blog, setBlog] = useState([])
  const [path, setPath] = useState('')
  const [delete5, setDelete5] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3002/get-shopproduct')
      .then((res) => {
        console.log(res.data)
        setBlog(res.data.data)
        setPath(res.data.filepath)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [delete5])

  const AddonClick = () => {
    navigate('/add_shop_product')
  }

  const editocClick = (id) => {
    navigate(`/edit_shop_product/${id}`)
  }

  const deleteocClick = (id) => {
    axios.delete(`http://localhost:3002/delete-shopproduct/${id}`)
      .then((res) => {
        console.log(res)
        notification.success({ message: "Delete Successfully" })
        setDelete5(id)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <h1>Shop Product Page</h1>

      <div className='flex justify-end mb-3'>
        <button onClick={AddonClick} className='flex items-center bg-blue-600 px-4 py-2 rounded text-white' ><span className='text-2xl me-2 font-bold'><IoIosAddCircleOutline /></span> Add Product</button>
      </div>

      <Table bordered>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>Shop Cart</th>
            <th>Shop Name</th>
            <th>Short Desc</th>
            <th>Shop Description</th>
            <th>Price</th>
            <th>Shop Category</th>
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
                  <td>{elem.shop_cart}</td>
                  <td>{elem.shop_name}</td>
                  <td>{elem.short_desc ? truncate(elem.short_desc,18):''}</td>
                  <td>{elem.shop_description ? truncate(elem.shop_description, 20) : ''}</td>
                  <td>{elem.price}</td>
                  <td>{elem.shop_categories.shopcategories_name}</td>
                  <td><img src={path + '/' + elem.image} style={{ height: '50px' }} alt="" /></td>
                  
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

export default ShopProduct