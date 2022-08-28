import React from 'react'
import {Link} from 'react-router-dom'
import {appRoutes} from '../appRoutes'
import { UserType } from '../types'
import UserIcon from '../usericon.png'

type Props = {
    user: UserType;
}

function Card({user}: Props) {
  return (
    <div className="users--card" key={user.id}>
    <img alt="userIcon" src={UserIcon} />
    <p>{user.name}</p>
    <p>{user.email}</p>
    <Link to={`${appRoutes.users}${user.id}`}>
      <button>Go to the user's profile.</button>
    </Link>
  </div>
  )
}

export default Card