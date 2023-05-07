import { Title } from "../../styles/typography"
import sun from '../../assets/climate/twemoji_sun.svg'
import sunBehindCloud from '../../assets/climate/twemoji_sun-behind-cloud.svg'
import sunBehindRainCloud from '../../assets/climate/twemoji_sun-behind-rain-cloud.svg'
import cloudWithRain from '../../assets/climate/noto_cloud-with-rain.svg'
import cloudWithLightningAndRain from '../../assets/climate/noto_cloud-with-lightning-and-rain.svg'
import { ClimateCardContainer } from "./style"

interface ClimateProps {
  status: string,
  percent: number,
  moisture: number,
  wind: number,
  day: string
  
}

export const ClimateCard = ({status, percent, moisture, wind, day} : ClimateProps) => {

  let icon = ''
  switch (status) {
    case 'Sol Entre Nuvens':
      icon = sunBehindCloud
      break;
    case 'Sol':
      icon = sun
      break;
    case 'Chuvisco Fraco':
      icon = sunBehindRainCloud
      break;
    case 'Tempestade':
      icon = cloudWithLightningAndRain
      break;
    case 'chuva':
      icon = cloudWithRain
      break;

  }

  return (
    <ClimateCardContainer>
      <span>{day}</span>
      <img src={icon} alt="" />
      <Title tag="h5" fontSize="sm" fontWeigth={700}>{ status }</Title>
      <div>
        <span>Chuva: {percent}%</span>
        <span>Umidade: {moisture}%</span>
        <span>Vento: {wind}km/h</span>
      </div>
    </ClimateCardContainer>
  )
}