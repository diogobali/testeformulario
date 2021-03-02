import styles from '../styles/components/Apresentacao.module.css';

export function Apresentacao() {
    return(
        <div className={styles.Apresentacao}>
            <div className={styles.container}>
                 <h1>A &nbsp;<strong>TEMCRÉDITO</strong></h1>
                 <h2>Mudando o mercado de crédito consignado desde 2021.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi esse aut ipsum fugit quibusdam est. Laboriosam ipsum fuga officia perferendis sed distinctio, qui libero molestias similique culpa saepe ipsa doloremque.</p>
            </div>
        </div>   
    )
}