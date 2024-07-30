function addtodisplay(value)
{
    const display=document.getElementById("display");
    const lastChar=display.value.slice(-1);
    if(["+","-","*","/"].includes(lastChar) && ["+","-","*","/"].includes(value))
    {
        return;
    }
    display.value +=value;
} 

