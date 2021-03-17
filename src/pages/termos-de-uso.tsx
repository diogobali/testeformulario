import { Menu } from '../components/Menu';
import { TermosDeUso } from '../components/TermosDeUso';
import { OverMenu } from '../components/OverMenu';

export default function Home() {
    return (
      <body>
      <div>
        <OverMenu />
        <Menu />
        <div>
        <TermosDeUso />
        </div>
      </div>
      </body>
    )
  }