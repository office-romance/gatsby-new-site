import React from 'react'
import { Link } from "gatsby";

const Layout = (props) => {
  return (
    <div>
        {props.children}
        <Footer / >
    </div>
  )
}

export default Layout
