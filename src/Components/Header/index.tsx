import { MdLogout, MdNotifications, MdSearch } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../../assets/avatar.jpg'
import { StyledIconLink } from '../../styles/buttons'
import { HeaderForm, StyledHeader } from './style'

const Header = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.setItem('authToken', '')
    navigate('/login')
  }
  return (
    <StyledHeader>
      <HeaderForm>
        <StyledIconLink type='submit'>
          <MdSearch size={30}/>
        </StyledIconLink>
        <input type='text' name='search' id='search' placeholder='Buscar...' />
      </HeaderForm>
      <div className='userMenu'>
      <StyledIconLink onClick={logout} title='Logout'>
        <MdLogout size={30}/>
      </StyledIconLink>
        <StyledIconLink title='Notifications'>
          <MdNotifications size={30}/>
        </StyledIconLink>
        <img src={avatar} alt="" />
      </div>
    </StyledHeader>
  )
}

export default Header