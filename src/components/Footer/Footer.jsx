import React from 'react'
import { useUserContext } from '../../context/userContext'
import {SocialLinks} from '../index'

function Footer() {
    const {USER, NAVIGATION_LINKS, SOCIAL_LINKS} = useUserContext()
  return (
    <div>{SOCIAL_LINKS.map((item)=>(
      <li><SocialLinks label={item.label} href={item.href}/></li>
    ))}</div>
  )
}

export default Footer