import React from 'react'
import { BsArrowLeftShort } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { Navigate,useNavigate } from 'react-router-dom'


export const Header = ({ page }: any) => {

  const navigate = useNavigate();

  const onNavigateBack = () =>{
    navigate(-1);
  }

  return (
    <header className="header">
      <BsArrowLeftShort onClick={onNavigateBack}/>
      {page == "pokelist" ? (<IoIosMenu />) : <CiHeart />}
    </header>

  )
}
