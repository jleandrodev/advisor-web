import Header from "../../Components/Header"
import Sidebar from "../../Components/Sidebar"
import { ContentPage } from "../../styles/components/ContentPage"
import { PageContainer } from "../../styles/components/PageContainer"
import { Title } from "../../styles/typography"
import { BalancePanel } from "./styles"

const Balance = () => {

  return(
    <PageContainer>
      <Sidebar />
      <ContentPage>
        <Header />
        <BalancePanel>
          <Title tag="h1" fontSize="lg" fontWeigth={700}>Balance</Title>
        </BalancePanel>
      </ContentPage>
    </PageContainer>
  )

}

export default Balance