import { MdCalendarMonth, MdCelebration, MdDiversity3, MdInsights, MdMenu, MdMonetizationOn, MdPerson, MdTaskAlt } from "react-icons/md"
import { Title } from "../../styles/typography"
import { SidebarContainer, SidebarHeader, SidebarLinks } from "./style"
import { NavLinks } from "./NavLinks"
import { Link } from "react-router-dom"

const Sidebar = () => {

  return (
    <SidebarContainer >
      <SidebarHeader>
          <Title tag="h2" fontSize="md" fontWeigth={700}>Advisor</Title>
      </SidebarHeader>
      {
        NavLinks.map(el => {
          return (
            <Link to={el.link}>
              <SidebarLinks>
                <el.icon size={30}/>
                <span>{el.title}</span>
              </SidebarLinks>
            </Link>
          )
        })
      }
    </SidebarContainer>
  )
}

export default Sidebar