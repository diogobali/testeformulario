import styles from '../styles/components/containerValorizacao.module.css'

export function ContainerValorizacao(){
    return(
        <div>
            <div className={styles.containerValorizacao}>
            <div className={styles.container}>
            <div className={styles.rightContainer}>
            <div>
                <h1><strong>TemCrédito! A plataforma inteligente.</strong></h1>
                
                <p>Com a menor taxa de juros do mercado, oferecemos </p>
                <p>aos nossos clientes fácilidade, segurança e rapidez </p>
                <p>na contratação de empréstimos</p>
                
            </div>
            <div>
                <a href="simulacao">Simular Empréstimo</a>
            </div>
            </div>
            </div>


            </div>




        </div>
    )
}