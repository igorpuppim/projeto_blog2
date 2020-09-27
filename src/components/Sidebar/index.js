import React from 'react'
import Profile from '../Profile'
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as S from './styled'

const Sidebar = () => (
    <S.SidebarWrapper>
        <Profile>
            {/* Profile chama o componente com o mesmo nome, assim como todo o html dentro dele */}
        </Profile>
        <SocialLinks />
        <MenuLinks></MenuLinks>
    </S.SidebarWrapper>
)

export default Sidebar