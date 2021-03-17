import styles from '../styles/components/containerFooter.module.css'

export function ContainerFooter(){
    return(
        <div className={styles.containerFooter}>
           <div className={styles.containerFooterContato}>
                <div>
                    <img src="./img/Logo tem crédito1.png" />
                </div>

                <div>
                    <ul>
                        <li><strong>Institucional</strong></li>
                        <li><a href='simulacao'>Simule agora</a></li>
                        <li><a>Ajuda</a></li>
                        <li><a>Sobre nós</a></li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li><strong>Contatos</strong></li>
                        <li>
                            <img src="./img/iconEmail.png" />
                            <a href="mailto:sac@frampromotora.com.br">
                            sac@frampromotora.com.br</a></li>
                        <li>
                            <img src="./img/iconTelefone.png" />
                            <a href="tel:0800-040-0004">
                            0800 040 0004</a></li>
                    </ul>
                </div>  

           </div>
           
           
           <div className={styles.containerFooterDesc}> 
                <div className={styles.containerFooterLinks}>


                </div>
                <p />
                <h1>Tem Crédito</h1>

               <p>A TemCrédito permite que você escolha quais cookies podem ser utilizados durante a sua navegação.</p>
               <p>A TemCrédito utiliza cookies para auxiliar na sua navegação, melhorar sua experiência como usuário, melhorar o conteúdo de nosso site, direcionar conteúdo de marketing a você, fazer análises e relatórios estatísticos sobre o uso do site e conectá-lo com as redes sociais de sua escolha, tudo para te proporcionar a melhor experiência possível. Para saber mais sobre cookies, acesse a nossa</p>
               <p>A TemCrédito não é uma instituição financeira e não realiza operações de crédito diretamente. A TemCrédito é uma plataforma digital que atua como correspondente bancário para facilitar o processo de contratação de empréstimos. Como correspondente bancário, seguimos as diretrizes do Banco Central do Brasil, nos termos da Resolução nº. 3.954, de 24 de fevereiro de 2011. Toda avaliação de crédito será realizada conforme a política de crédito da Instituição Financeira escolhida pelo usuário. Antes da contratação de qualquer serviço através de nossos parceiros, você receberá todas as condições e informações relativas ao produto a ser contrato, de forma completa e transparente. A TemCrédito é correspondente bancário das seguintes instituições: Banco do Brasil S.A. (CNPJ 00.000.000/0001-91), Banco Olé Consignado S.A. (CNPJ 71.371.686/0001-75), Banco do Estado do Rio Grande do Sul S.A. (CNPJ 92.702.067/0001-96) e Banco Cetelem S.A (CNPJ nº 00.558.456/0001-71).</p>
                <p>As taxas de juros, margem consignável e prazo de pagamento praticados nos empréstimos com consignação em pagamento dos Governos Federais, Estaduais e Municipais, Forças armadas e INSS observam as determinações de cada convênio, bem como a política de crédito da instituição financeira a ser utilizada.</p>
                <p>BX Negócios Inteligentes Ltda - ME

                CNPJ 22.530.382/0001-06

                Endereço: CLN 202 Bloco B Loja 25 Subsolo, Asa Norte, Brasília, DF, CEP 70.832-525.</p>
          </div>
        </div>


        

    )
}