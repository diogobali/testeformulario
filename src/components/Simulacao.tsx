import styles from '../styles/components/Simulacao.module.css';
import SimpleMaskMoney from 'simple-mask-money'

export function Simulacao() {   
        
    var valor = 0;

    function showDiv()  {
        var display = document.getElementById("divOutroValor").style.visibility;
        if (display == "hidden")
            document.getElementById("divOutroValor").style.visibility = 'visible';
        else
            document.getElementById("divOutroValor").style.visibility = 'hidden';
    }

    function showParcelas(){
        document.getElementById("parcelasDiv").style.display = 'flex';
        document.getElementById("parcelasDiv2").style.display = 'flex';
        document.getElementById("parcelasDiv3").style.display = 'flex';
        document.getElementById("valoresDiv").style.display = 'none';
        document.getElementById("divOutroValor").style.visibility = 'hidden';   

    }

    function voltarValor(){
        document.getElementById("parcelasDiv").style.display = 'none';
        document.getElementById("parcelasDiv2").style.display = 'none';
        document.getElementById("parcelasDiv3").style.display = 'none';
        document.getElementById("valoresDiv").style.display = 'flex';
    }

    function valor5k(){
        var valor = 5000;
        console.log(valor);
    }

    function valor10k(){
        var valor = 10000;
        console.log(valor);
    }

    function valor20k(){
        var valor = 20000;
        console.log(valor);
    }

    function valor30k(){
        var valor = 30000;
        console.log(valor);
    }

    function valor50k(){
        var valor = 50000;
        console.log(valor);
    }

    function valorX(){

        var valor = document.getElementById("outrovalor").value;
        console.log(valor);
        showParcelas();
    }

    function showCpfDiv(){

        document.getElementById("cpfDiv").style.display = 'flex'; 
        document.getElementById("cpfDiv2").style.display = 'flex'; 
        document.getElementById("parcelasDiv").style.display = 'none';
        document.getElementById("parcelasDiv2").style.display = 'none';
        document.getElementById("parcelasDiv3").style.display = 'none';

    }
    

    return(


        

        
        <div className={styles.Simulacao} id="simulacao">
            
            <script src="https://github.com/codermarcos/simple-mask-money/releases/download/<RELEASE_VERSION_HERE>/simple-mask-money.js"></script>  
            <div className={styles.container}>
                <div className={styles.leftContainer}>
                    <div className={styles.subtitulo}>
                    <p>
                        <h2>Empréstimo pessoal <strong>Online.</strong></h2>
                    </p>
                    <p>
                        <h3><strong>De quanto você precisa?</strong></h3>
                    </p>
                    </div>  
                    <div id="valoresDiv" className={styles.buttonContainer}>
                        <div className={styles.buttonContainer2}>
                        
                        <button 
                            type="button" 
                            onClick={() => {
                                valor5k()
                                showParcelas()
                            
                            }}>
                                R$ 5.000
                            </button>
                        <button 
                            type="button" 
                            onClick={() => {
                                valor10k()
                                showParcelas()
                            
                            
                            }}>
                                R$ 10.000
                            </button>
                        <button type="button" 
                        onClick={() => {
                            valor20k()
                            showParcelas()
                            }}>R$ 20.000</button>


                        </div>
                        <div className={styles.buttonContainer2}>              
                            <button 
                                type="button" 
                                onClick={() => {
                                    valor30k()
                                    showParcelas()
                                }}>
                                    R$ 30.000
                            </button>
                            <button 
                                type="button" 
                                onClick={() => {
                                   valor50k()
                                   showParcelas()     
                                }}>
                                    R$ 50.000
                            </button>
                            <button 
                                type="button" 
                                onClick={showDiv}
                            >
                                OUTRO VALOR
                            </button>
                        </div>
                    </div>

                    <div id="parcelasDiv2" className={styles.parcelasContainer} >
                        <div  id="parcelasDiv"className={styles.parcelasContainer2 }>
                        
                        <button 
                        type="button"
                        onClick={showCpfDiv}
                        
                        >84x
                        </button>
                        <button type="button">72x</button>
                        <button type="button">60x</button>


                        </div>
                        <div id="parcelasDiv3" className={styles.parcelasContainer2}>              
                            <button type="button">48x</button>
                            <button type="button">36x</button>
                            <button type="button" onClick={voltarValor}>Voltar</button>
                            
                        </div>
                    </div>

                    <div id="cpfDiv" className={styles.parcelasContainer} >
                        <div id ="cpfDiv2" className={styles.parcelasContainer2 }>
                 
                                <label>Informe seu CPF:</label>
                                <input type="numeric" id="cpf" placeholder="000.000.000-00"></input>
                                
                        </div>
                        <div className={styles.buttonFinalizar}>
                        <button type="button" className={styles.buttonFinalizar}>SEGUINTE</button>
                        </div>

                    </div>

                    <div className={styles.outroValorDiv} id="divOutroValor">
                    <label>Qual o valor?</label>
                        <div className={styles.divCifrao}>
                        
                            <strong>R$</strong></div>

                        <input type="numeric" id="outrovalor" placeholder="10.000,00" onChange={(event)=>{
                                
                                const Target = event.target
                                const args = {
                                    afterFormat(e) { console.log('afterFormat', e); },
                                    allowNegative: false,
                                    beforeFormat(e) { console.log('beforeFormat', e); },
                                    negativeSignAfter: false,
                                    prefix: '',
                                    suffix: '',
                                    fixed: true,
                                    fractionDigits: 2,
                                    decimalSeparator: ',',
                                    thousandsSeparator: '.',
                                    cursor: 'move'
                                  }
                                  const input = SimpleMaskMoney.setMask(event.target, args);
                                  input.formatToNumber();
                            
                            }}
                            
                        >
                            
                        </input>
                        
                        <button type="submit" onClick={valorX}className={styles.buttonContinuar}> Continuar </button>
                         
                    </div>
                    <div className={styles.formularioFinal}>
                            <form>
                                
                                <label>Nome Completo: *</label><input></input>
                                <p>
                                <label>Telefone *</label><input></input>
                                </p>

                            </form>

                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <img src="/img/dinheiro.png" />
                </div>
            </div>
        </div>  
       
       
       
       
       
       
       
        
        
    )
}