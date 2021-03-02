import { Simulacao } from "../components/Simulacao";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { Menu } from "../components/Menu";
import styles from '../styles/pages/Home.module.css';
import { InfosEmprestimo } from "../components/InfosEmprestimo";
import { Apresentacao } from "../components/Apresentacao";
import { InfosEmprestimo2 } from "../components/InfosEmprestimo2";

export default function Home() {
  return (
    <body>
    <div>
      <Menu />
      <Simulacao />
      <InfosEmprestimo />
      <Apresentacao />
      <InfosEmprestimo2 />
    </div>
    </body>
  )
}
