import {useState} from 'react';
import React, { Component } from "react";
import styles from '../styles/components/containerAvisoTop.module.css'

/*function toggleAlertBar() {
    const closeButton = document.getElementById('close-button');
    const alertBar = document.getElementById('alert-bar');
    closeButton.onclick = function() {
        alertBar.style.display = 'none';

    }
} */


export function AvisoTop(){

    const [esconderDiv, setEsconderDiv] = useState(true)
    const handleEsconderDiv = () => {
    setEsconderDiv(false);
}

    return(<>
        {esconderDiv && (
        
        <div className={styles.AvisoTop} id="alertBar">
        
        <h1>Atenção! Não trabalhamos com intermediadores e não solicitamos pagamentos antecipados.</h1>
        <span id="close-button" onClick={ () =>
             handleEsconderDiv()

        }>X</span>   
        </div>
        )
        }</>
    )   
    
    
    }
