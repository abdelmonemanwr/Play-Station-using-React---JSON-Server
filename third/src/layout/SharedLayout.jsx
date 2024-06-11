import React from 'react'
import {MyNavbar} from '../components/MyNavbar'
import {MyFooter} from '../components/MyFooter'
import { Outlet } from 'react-router-dom'
export function SharedLayout() {
  return (
    <div>
        <MyNavbar/>
        <Outlet/>
        <MyFooter/>

    </div>
  )
}
