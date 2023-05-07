import Header from "../../Components/Header"
import Sidebar from "../../Components/Sidebar"
import { AuthContext } from "../../contexts/Auth/AuthContext"
import { ContentPage } from "../../styles/components/ContentPage"
import { PageContainer } from "../../styles/components/PageContainer"
import { Title } from "../../styles/typography"
import { DashboardPainel } from "./style"
import { useContext } from 'react'
import EventsBlock from "../../Components/EventsBlock"
import { ClimateBlock } from "../../Components/ClimateBlock"

const Dashboard = () => {
  const auth = useContext(AuthContext)

 return (
  <PageContainer>
    <Sidebar />
    <ContentPage>
      <Header />
      <DashboardPainel>
        <ClimateBlock />

        <EventsBlock />
      </DashboardPainel>
    </ContentPage>
  </PageContainer>
 ) 
}

export default Dashboard