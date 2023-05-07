import Header from "../../Components/Header"
import Sidebar from "../../Components/Sidebar"
import { ContentPage } from "../../styles/components/ContentPage"
import { PageContainer } from "../../styles/components/PageContainer"
import { Title } from "../../styles/typography"
import { TaskPanel } from "./styles"

const Tasks = () => {

  return(
    <PageContainer>
      <Sidebar />
      <ContentPage>
        <Header />
        <TaskPanel>
          <Title tag="h1" fontSize="lg" fontWeigth={700}>Tasks</Title>
        </TaskPanel>
      </ContentPage>
    </PageContainer>
  )

}

export default Tasks