import React from 'react'
import Profile from '../Profile'

import * as S from './styled'

const Sidebar = () => (
    <S.SidebarWrapper>
        <Profile>
            {/* Profile chama o componente com o mesmo nome, assim como todo o html dentro dele */}
        </Profile>
    </S.SidebarWrapper>
)

export default Sidebar