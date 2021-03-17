import styles from '../styles/components/Menu.module.css'

export function Menu() {
    return (
        
            <div className={styles.menu}>
        
        <input type="checkbox" className={styles.btMenu} id="bt_Menu" />  
        <label htmlFor="bt_Menu" className={styles.labelMenu}>&#9776;</label>

        <nav className={styles.navMenu}>
            <ul className={styles.ulMenu}>
                <li><a href="/">Sobre</a></li>     
                <li><a href="#ContainerContato">Contato</a></li>
                <li><a href="#containerParceiros">Parceiros</a></li>
                <li><a href="termos-de-uso">Termos de Uso</a></li>
                <li id="simularli"><a href="simulacao">Simulação</a></li>
            </ul>
        </nav>

  
       
        </div>
        


        
    );
}       