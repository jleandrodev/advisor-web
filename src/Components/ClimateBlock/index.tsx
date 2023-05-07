import { ClimateCard } from "./ClimateCard"
import { ClimateContainer } from "./style"

export const ClimateBlock = () => {
  return (
    <ClimateContainer>
      <ClimateCard status="Sol Entre Nuvens" percent={4} moisture={65} wind={10} day="Seg" />
      <ClimateCard status="Tempestade" percent={98} moisture={85} wind={17} day="Ter" />
      <ClimateCard status="Chuvisco Fraco" percent={4} moisture={55} wind={12} day="Qua" />
      <ClimateCard status="Sol" percent={2} moisture={45} wind={30} day="Qui" />
      <ClimateCard status="chuva" percent={65} moisture={68} wind={18} day="Sex" />
      <ClimateCard status="chuva" percent={95} moisture={72} wind={15} day="Sab" />
      <ClimateCard status="Chuvisco Fraco" percent={90} moisture={75} wind={20} day="Dom" />
    </ClimateContainer>
  )
}