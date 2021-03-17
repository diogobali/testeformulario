import styles from '../styles/components/containerSimulacao.module.css'


export function ContainerSimulacao(){
    return (
        <div className={styles.containerSimulacao}>
        <div className={styles.containerSimulacaoText}>
        <h1>PRATICIDADE E SEGURANÇA. AQUI <strong>TEM CRÉDITO</strong></h1>
        </div>
        <div className={styles.containerSimulacaoBt}>
            <a href="simulacao"><button className={styles.bt_Simulacao} type="button" >Simular empréstimo</button></a>
        </div>
    
        </div>
    )
}
