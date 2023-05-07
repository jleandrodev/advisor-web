import Header from "../../Components/Header"
import Sidebar from "../../Components/Sidebar"
import { ContentPage } from "../../styles/components/ContentPage"
import { PageContainer } from "../../styles/components/PageContainer"
import { Title } from "../../styles/typography"
import { EventPanel } from "./styles"

const Events = () => {

  return(
    <PageContainer>
      <Sidebar />
      <ContentPage>
        <Header />
        <EventPanel>
          <Title tag="h1" fontSize="lg" fontWeigth={700}>Events</Title>
        </EventPanel>
      </ContentPage>
    </PageContainer>
  )

}

export default Events