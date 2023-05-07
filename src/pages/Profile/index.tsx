import Header from "../../Components/Header"
import Sidebar from "../../Components/Sidebar"
import { ContentPage } from "../../styles/components/ContentPage"
import { PageContainer } from "../../styles/components/PageContainer"
import { Title } from "../../styles/typography"
import { ProfilePanel } from "./styles"

const Profile = () => {

  return(
    <PageContainer>
      <Sidebar />
      <ContentPage>
        <Header />
        <ProfilePanel>
          <Title tag="h1" fontSize="lg" fontWeigth={700}>Profile</Title>
        </ProfilePanel>
      </ContentPage>
    </PageContainer>
  )

}

export default Profile