import styles from '../styles/components/Menu.module.css';

export function Menu() {
    return (
        <header className={styles.Menu}>
    
               
            <div className={styles.menuDiv}>
                <div className={styles.imgSection}>
                    <img src="/img/logo.png" />
                </div>

                <nav>
                    <strong>
                        <a href="google.com">Google</a>
                        <a href="globo.com">Google</a>
                        <a href="nike.com">Globo</a>
                        <a href="adidas.com">Sobre nós</a>
                        <a href="cleber">Atendimento</a>
                        <a href="globo.com">Globo</a>
                        <a href="globo.com">Globo</a>  
                 </strong>
                </nav>
        

            </div>
        </header>


    );


}