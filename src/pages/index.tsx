
import styles from '../styles/pages/Home.module.css';
import { Menu } from '../components/Menu';
import { ContainerSimulacao } from '../components/ContainerSimulacao'
import { ContainerValorizacao } from '../components/ContainerValorizacao'
import { ContainerPassos } from '../components/ContainerPassos'
import { ContainerParceiros } from '../components/ContainerParceiros'
import { ContainerFooter } from '../components/ContainerFooter'
import { OverMenu } from '../components/OverMenu'
import { ContainerContato } from '../components/ContainerContato'
import { AvisoTop } from '../components/AvisoTop';
import { ContainerCookies } from '../components/ContainerCookies';



export default function Home() {
  return (
    <body>
    <div>
    <AvisoTop />
    <Menu />
    <ContainerSimulacao />
      
     
      <ContainerValorizacao />
      <ContainerPassos />
      <ContainerContato />
      <ContainerParceiros />
      <ContainerFooter />
      <ContainerCookies />

    </div>
    </body>
  )
}
