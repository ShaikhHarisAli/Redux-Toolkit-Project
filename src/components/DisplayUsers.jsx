import React from 'react'
import {useSelector , useDispatch} from "react-redux";
import {MdDeleteForever} from 'react-icons/all.js'
import { removeUser } from '../store/slices/UserSlice';
const DisplayUsers = () => {
    const data = useSelector(state => state.user)
    const dispatch = useDispatch()
  console.log(data)
  const deleteSingle = (id)=>{
    dispatch(removeUser(id))
  }
  return (
    <div>
        {
            data.map((user,id)=>{
                return <ul style={{ listStyle: "none", padding: 0, display: "flex" }}><li key={id} style={{ display: "flex", alignItems: "center" ,justifyContent: "space-between"}}><span>{user}</span> <button type="button" onClick={() => deleteSingle(id)} style={{ background: "none", border: "none" }}><MdDeleteForever style={{ color: "red", fontSize: "25px" }} /></button></li></ul>
            })
        }
    </div>
  )
}

export default DisplayUsers
