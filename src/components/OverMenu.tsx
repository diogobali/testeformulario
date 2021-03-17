import styles from '../styles/components/overMenu.module.css'

export function OverMenu(){
    return(
        
        <div className={styles.OverMenu}>
            <div>
            <a href="index"><img src="img/dinheiro.png" /></a>
            </div>
            <div>
                <h1>Atendimento</h1>
                <p>Seg-Sex</p>
                <p>9h às 18h</p>
            </div>
            <div>
                <h1>Central SAC:</h1>
                <p>0800 040 0004</p>
            </div>
        </div>




    )
}