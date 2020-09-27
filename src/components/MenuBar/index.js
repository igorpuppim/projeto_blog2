import React from 'react'
import { HomeAlt as Home } from '@styled-icons/boxicons-regular/HomeAlt'
import { SearchAlt as Search } from '@styled-icons/boxicons-regular/SearchAlt'
import { UpArrowAlt as Arrow } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { LightBulb as Light } from '@styled-icons/entypo/LightBulb'
import { GridSmall as Grid } from '@styled-icons/boxicons-regular/GridSmall'


import * as S from './styled'

const MenuBar = () => (
    <S.MenuBarWrapper>

        <S.MenuBarGroup>

            <S.MenuBarLink to="/" title="Voltar para home">
                <S.MenuBarItem><Home /></S.MenuBarItem>
            </S.MenuBarLink>
            <S.MenuBarLink to="/search/" title="pesquisar">
                <S.MenuBarItem><Search /></S.MenuBarItem>
            </S.MenuBarLink>

        </S.MenuBarGroup>

        <S.MenuBarGroup>
            <S.MenuBarItem title="Mudar o tema">
                <Light />
            </S.MenuBarItem>
            <S.MenuBarItem title="Mudar visualização">
                <Grid />
            </S.MenuBarItem>
            <S.MenuBarItem title="Voltar para o topo">
                <Arrow />
            </S.MenuBarItem>
        </S.MenuBarGroup>

    </S.MenuBarWrapper>
)

export default MenuBar