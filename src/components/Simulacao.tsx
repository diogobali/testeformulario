import styles from '../styles/components/simulacao.module.css';
import React, { useState } from "react";


export function Simulacao(){
    
    const [selected, SetSelected] = useState("");

    const [etapa1, setEtapa1] = useState(true);
    const [etapa2, setEtapa2] = useState(false);
    const handleEsconderDiv = () => {
        setEtapa1(false);
        setEtapa2(true);
    }
    
    return(

        
        <div className={styles.Simulacao}>
            <div>
            
                <h1>SIMULAÇÃO DE <strong>EMPRÉSTIMO</strong></h1>
            </div>
            
            <div className={styles.sectionSimulacao}>
            {etapa1 == true && (
                <>
            <div>
                <div className={styles.selectSimulacao}>
             
             <label>Por onde você recebe seu beneficio?</label>
             <select required onChange={(e) => SetSelected(e.target.value)}>
                <option value="">
                    Selecione uma opção
                </option>
                <option value="INSS">
                    INSS
                </option>
                <option value="SIAPE">
                    Servidor Federal - SIAPE
                </option>
                <option value="OUTROS">Outros
                </option>
             </select>
             </div>
            
            {selected !== "" && 
            
            <div id="dadosSimulacao" className={styles.dadosSimulacao}>
             <form>
                <div className={styles.divColuna}>
                    <div className={styles.teste}>
                        <div>
                            <p><label>Nome:</label></p>
                            <input required type="text" placeholder="Nome Completo: *" />
                        </div>    
                        <div>
                            <p><label>E-mail:</label></p>
                            <input required type="text" placeholder="E-mail: *" />
                        </div>
                    </div>
                    <div className={styles.teste}>
                        <div>
                            <p><label>Número de celular:</label></p>
                            <input required type="text" placeholder="( ) 00000-0000" />
                        </div>
                        <div>
                            <p><label>Valor Desejado:</label></p>
                            <input required type="text" placeholder="R$ 10.000,00"/>
                        </div> 
                    </div>
                    {selected == "OUTROS" && (  
                        <div className={styles.teste}>
                        <div>
                        <p><label>Orgão Pagador:</label></p>
                        <input required type="text" placeholder="Orgão Pagador *" />
                        </div>
                        </div> 
                    )}

                    
                    <div className={styles.divCheckBox}>
                        <input required type="checkbox" checked />
                        <div>
                            DECLARO QUE ESTOU DE ACORDO COM OS TERMOS DE USO. <a href="termos-de-uso">LEIA OS TERMOS.</a>
                        </div>
                    </div>
                        <button type="submit" onClick={ () =>
                            handleEsconderDiv()
                            
                        
                        }>SIMULAR EMPRÉSTIMO</button>


                    <div className={styles.steps}>
                        <span className={styles.step} />
                        <span className={styles.step} />
                        <span className={styles.step} />
                        <span className={styles.step} />
                    </div>
                   

                     </div>     
                
                     
                </form> 
                </div>
                
               

            }</div>
            </>)}
            </div>
            {etapa2 && (
                    <h1>AGORA VAI</h1>

                     )}
            </div>
                    
    )
}