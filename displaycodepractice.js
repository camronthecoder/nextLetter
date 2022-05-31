let letterSet = [
    {
        letter: 'A'

    },
    {
        letter: 'B'

    },
    {
        letter: 'C'

    },
    {
        letter: 'D'

    },
    {
        letter: 'E'

    },
]  
i=0
currentLetter=letterSet[i].letter

nextLetter=()=>{
    if(i<letterSet.length){
    document.getElementById("messages").innerHTML=currentLetter
    i++
    currentLetter=letterSet[i].letter}
    else{ document.getElementById("messages").innerHTML="all done"}

}