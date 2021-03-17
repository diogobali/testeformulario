import styles from '../styles/components/InfosEmprestimo.module.css';

export function InfosEmprestimo(){
    return(
    <div className={styles.InfosEmprestimo}>
        <div className={styles.titulo}>
        <h1><strong>A TEMCRÉDITO tem o empréstimo que te ajuda:</strong></h1>
        </div>
        <div className={styles.container}>
            
            <div className={styles.containerItems}>
            <div className={styles.divImg}>
                <img src="/img/dinheiro.png" alt="Imagem1" />
                <p>Texto teste</p>
            </div>
            <div className={styles.divImg}>
                <img src="/img/dinheiro.png" alt="Imagem2"/>
                <p><h1>Imagem 1</h1></p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad quidem laboriosam eaque dolores maiores debitis, dolorum, est nihil id ex repudiandae corporis. Dolorum molestiae quas eum perferendis molestias nisi!</p>
            </div>
            <div className={styles.divImg}>
                <img src="/img/dinheiro.png" alt="Imagem3"/>
                <p>Texto teste 2</p>
            </div>
            <div className={styles.divImg}>
                
                 <img src="/img/dinheiro.png " alt="Imagem4"/>
                 <p>Texto teste 3</p>
                
            </div>
            </div>

         </div> 
         <div className={styles.buttonSimular}>
               <a type="button" href="#simulacao"><strong>Simular Empréstimo</strong></a>

            </div>   
        </div>  

    )

}