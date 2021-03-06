import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
    const {
        site: 
        {
            siteMetadata: 
            {
                title, 
                author, 
                position, 
                description
            }
        }
    } = useStaticQuery  
    (
        graphql
        `
            query MySiteMetadata {
                site{
                siteMetadata {
                    author
                    description 
                    position
                    title
                    }
                }
            }
        `
    )

    return(
        <S.ProfileWrapper>
            <S.ProfileLink>
                <Avatar />
                <S.ProfileAuthor>
                    {title}
                    <S.ProfilePosition>
                        {author} | {position}
                    </S.ProfilePosition>
                </S.ProfileAuthor>
                
            </S.ProfileLink>
            <S.ProfileDescription>
                {description}
            </S.ProfileDescription>
        </S.ProfileWrapper>
    )
}

export default Profile