import styles from '../styles/components/containerContato.module.css'

    export function ContainerContato(){
    return(
        <div className={styles.ContainerContato} id="ContainerContato">
        <div className={styles.leftContainer}>
        
        </div>
        <div className={styles.rightContainer}>
        <h1>Como podemos lhe ajudar?</h1>

        <h3>Sabemos que o processo de pegar um empréstimo gera dúvidas, por isso estamos aqui para te ajudar. 
            <p>Se precisar, entre em contato.</p></h3>
        <div className={styles.ContainerContatoImg}>
        <span><img src='img/iconEmail.png' />
        <strong>sac@temcredito.com.br | 0800 040 0004</strong>
        <img src='img/iconTelefone.png' /></span>
        </div>
        </div>
        </div>
    
        )
}