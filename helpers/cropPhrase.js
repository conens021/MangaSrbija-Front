const cropPhrase = (phrase,from,to) =>{
    if(phrase.length <= to)
       return phrase
    let newPhrase = `${phrase.slice(from,to)}...`
    return newPhrase
}

export {cropPhrase}

