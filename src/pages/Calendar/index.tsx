import Header from "../../Components/Header"
import Sidebar from "../../Components/Sidebar"
import { ContentPage } from "../../styles/components/ContentPage"
import { PageContainer } from "../../styles/components/PageContainer"
import { Title } from "../../styles/typography"
import { CalendarPanel } from "./styles"

const Calendar = () => {

  return(
    <PageContainer>
      <Sidebar />
      <ContentPage>
        <Header />
        <CalendarPanel>
          <Title tag="h1" fontSize="lg" fontWeigth={700}>Calendar</Title>
        </CalendarPanel>
      </ContentPage>
    </PageContainer>
  )

}

export default Calendar