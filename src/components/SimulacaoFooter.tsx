import styles from '../styles/components/simulacaoFooter.module.css'

export function SimulacaoFooter(){
    return(
        <div className={styles.SimulacaoFooter}>
           <div className={styles.containerFooter}>
            <div>
            <img src="img/dinheiro.png" />
            </div>
            <div>
                <p>OPÇÃO MAIS RÁPIDA, SEM BUROCRACIA</p>
                <strong>E COM AS MENORES TAXAS</strong>
            </div>
            <div>
                
                <p>Duvidas? Ligue,</p>
                <strong>0800 040 0004</strong>


            </div>

            </div>



        </div>

    )
}