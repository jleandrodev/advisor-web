import Header from "../../Components/Header"
import Sidebar from "../../Components/Sidebar"
import { ContentPage } from "../../styles/components/ContentPage"
import { PageContainer } from "../../styles/components/PageContainer"
import { Title } from "../../styles/typography"
import { TeamPanel } from "./styles"

const Team = () => {

  return(
    <PageContainer>
      <Sidebar />
      <ContentPage>
        <Header />
        <TeamPanel>
          <Title tag="h1" fontSize="lg" fontWeigth={700}>Team</Title>
        </TeamPanel>
      </ContentPage>
    </PageContainer>
  )

}

export default Team