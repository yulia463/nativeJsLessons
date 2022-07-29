const sentense = "Hello my friends!"

export function splitIntoWords(sentense: string) {
    const words =  sentense.split(" ")
       return words.filter(w => w !== ""  && w !== "-")
        .map(w => w
            .replace("!" ,"")
            .replace("." ,"")
            .replace("," ,""))
};

export function sum(a: number , b: number){
    return a + b;
}

export function mult(a: number , b: number){
    return a * b;
}

export default splitIntoWords;

