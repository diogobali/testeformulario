import { Menu } from '../components/Menu';
import { OverMenu } from '../components/OverMenu';
import { Simulacao } from '../components/Simulacao';
import { SimulacaoFooter } from '../components/SimulacaoFooter';

import { TesteForm } from '../components/testeForm';



export default function Home() {
    return (
      <body>
      <div>
        <OverMenu />
        <Menu />
        <div>
        <Simulacao />
        <SimulacaoFooter />
        <TesteForm />
        </div>
        

      </div>
      </body>
    )
  }