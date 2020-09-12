import React from "react"
import PropTypes from "prop-types"
import Profile from "./Profile"

const Layout = ({ children }) => {
  
  return (
    <>
    <aside>
      <Profile></Profile>
      {/* Profile chama o componente com o mesmo nome, assim como todo o html dentro dele */}
    </aside>
    <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
