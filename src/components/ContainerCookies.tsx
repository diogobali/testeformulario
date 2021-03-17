import {useState} from 'react';
import React, { Component } from "react";
import styles from '../styles/components/containerCookies.module.css'

export function ContainerCookies(){
    
    
    const [esconderDiv, setEsconderDiv] = useState(true)
    const handleEsconderDiv = () => {
    setEsconderDiv(false);
}
    
    
    return(
        <div>
            {esconderDiv && (
            
            <div className={styles.containerCookies}>
                <p>
                    Para garantir a melhor experiência na 
                    <strong> TemCrédito! </strong>
                    este site coleta informações e hábitos de navegação através de cookies. Saiba mais em nossa
                    <p><a href='termos-de-uso'>Política de Privacidade</a></p>
                </p>
            <div>
                <button onClick={() =>
                    handleEsconderDiv()
                
                }>Aceito</button>
            </div>
            
            </div>






)
}   
        </div>



    )

}