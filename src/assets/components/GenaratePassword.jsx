
const Password =({ischaracter,isnumber ,issymbol, selectedNumber})=>
{
   const character_set = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const number_set = "1234567890";
   const symbol_set = `!@#$%^&*()_+/-.,[];':"|{\``;
   const character_number_set = "abc1defg2h3ijkl4m5nop6qrs7tuvwxy8zA9B0CDEFGHIJKLMNOPQRSTUVWXYZ";
   const number_symbol_set =`123456789!@#$%^&*()_+/-.,[];':"|{}`;
   const character_symbol_set =`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+/-.,[];':"|{}`;
   const character_number_symbol_set=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+/-.,[];':"|{}`;
   let generated_password="";

    if(ischaracter && !isnumber && !issymbol )
    {
        
        for(let i=0;i<selectedNumber;i++)
        {
            let index = Math.floor(Math.random() * character_set.length);
            generated_password += character_set[index];
         
        }
        console.log(generated_password,"character_set"); 
    }

    if(isnumber && !ischaracter && !issymbol)
    {
        for(let i=0;i<selectedNumber;i++)
        {
        let index = Math.floor(Math.random() * number_set.length);
        generated_password += number_set[index];
       
        }
        console.log(generated_password,"Number_Set");
    }

    if(issymbol && !ischaracter && !isnumber)
    {
        for(let i=0;i<selectedNumber;i++)
        {
        let index = Math.floor(Math.random()* symbol_set.length);
        generated_password += symbol_set[index];
       
        }
        console.log(generated_password,"symbol_set");
    }

    if(ischaracter && isnumber && !issymbol)
    {
        for(let i=0;i<selectedNumber;i++)
        {
        let index = Math.floor(Math.random()* character_number_set.length);
        generated_password += character_number_set[index];
        }
        console.log(generated_password,"character_number"); 
    }
 
    if(ischaracter && issymbol && !isnumber)
    {
        for(let i=0;i<selectedNumber;i++)
        {
        let index = Math.floor(Math.random()* character_symbol_set.length);
        generated_password += character_symbol_set[index];
        
        }
        console.log(generated_password,"charcter_symbol");
    }

    if(issymbol && isnumber && !ischaracter)
    {
        for(let i=0;i<selectedNumber;i++)
        {
        let index = Math.floor(Math.random()* number_symbol_set.length);
        generated_password += number_symbol_set[index];
        
        }
        console.log(generated_password,"symbol_number");
    }

    if(ischaracter && isnumber && issymbol)
    {
        for(let i=0;i<selectedNumber;i++)
        {
        let index = Math.floor(Math.random()* character_number_symbol_set.length);
        generated_password += character_number_symbol_set[index];
    
        }
        console.log(generated_password,"character_number_symbol"); 
    }

    return(
        <>
        <div>
            <h2 style={{color:"white"}}>
                {generated_password}
            </h2>
            {console.log("Props in Password component:", ischaracter, isnumber, issymbol, selectedNumber)}
            {console.log(generated_password)}

            
        </div>
        </>
    )
}

export default Password;