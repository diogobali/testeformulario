import styles from '../styles/components/containerPassos.module.css'

export function ContainerPassos(){
    return(
        <div className={styles.containerPassos}>
        <h1>Passo a passo</h1>
        
        <div className={styles.imgPassos}>
        
        <div className={styles.paragrafo}>
        <img src="./img/bancoitau.png" />
        <p>Banco Itau Consignado</p>
        </div>
        <div className={styles.paragrafo}>
        <img src="./img/bancodaycoval.png" />
        <p>Banco Daycoval</p>
        </div>        
        <div className={styles.paragrafo}>
        <img src="./img/bancobmg.png" />
        <p>Banco BMG</p>
        </div>        
        <div className={styles.paragrafo}>
        <img src="./img/dinamo.png" />
        <p>Dinamo Promotora</p>
        </div>
        </div>




     




    </div>


    )
}