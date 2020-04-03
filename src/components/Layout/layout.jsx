import React from 'react'
import { Link } from "gatsby";

const Layout = (props) => {
  return (
    <div>
        <Sidebar />
        {props.children}
        <Footer / >
    </div>
  )
}

export default Layout
