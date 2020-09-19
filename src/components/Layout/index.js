import React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"

import * as S from './styled'
import GlobalStyles from '../../styles/global'



const Layout = ({ children }) => {
  
  return (
    <S.LayoutWrapper>
      <GlobalStyles/>
        <aside>
          <Profile></Profile>
          {/* Profile chama o componente com o mesmo nome, assim como todo o html dentro dele */}
        </aside>
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
