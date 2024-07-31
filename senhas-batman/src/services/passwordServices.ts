export default function generatePass(){
    let password: string =''
    let characters: string ='AAAa@#123456789abcdefghijklmnoABDKFLGOSLP!'
    let passWordLength = 8
    for ( let index  = 0; index< passWordLength; index++){
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }
    return password
}