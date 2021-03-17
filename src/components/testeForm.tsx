import axios from 'axios'


export function TesteForm(){

    const connect = axios.create({

        baseURL: "https://www.followize.com.br/api/v2/"


    })

    
    return(
        
        <div>
            <form method="post" onSubmit={async (event) =>{

                event.preventDefault()
               
                const target = event.target

                const email = (document.querySelector('input[name=email]') as HTMLInputElement)
                const name = (document.querySelector('input[name=name]') as HTMLInputElement)
                const message = (document.querySelector('textarea[name=message]') as HTMLInputElement)


                try {

                    const response = await connect.post('Leads',
                            {
                        
                            "clientKey": "13211cdcfab60f7f10f8630e53c6769b",
                            "teamKey": "e50144ae7db1a9b6dd4e8d3ec94f2a99",
                            "conversionGoal": "Teste Conversion",
                            "name": name.value,
                            "email": email.value, 
                            "message": message.value
                            }



                    )

                    console.log(response)

                }   catch(e) {
                    
                    console.error(e)

                } 

                console.log(name.value)
                console.log(email.value)
                console.log(message.value)

                
                
               
            
            
            
            
        }}>
            
               
                <input type="hidden" name="hubUtmz" id="hubUtmz" value="" />
              

                <p><label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" /></p>

                <p><label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email"/></p>

                <p><label htmlFor="message">Message:</label>
                <textarea name="message" id="message"/></p>

                <input type="submit" name="send" value="Send" />
            </form>

        </div>

    )
}