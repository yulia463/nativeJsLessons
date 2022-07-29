import splitIntoWords, {mult, sum} from "./01";

test("sum should be correct" , () =>{
    // data
   const a = 1;
   const b = 2;
   const c = 3;

   // action
     const result1 = sum(a,b);
     const result2 = sum(c,b);

     // expert result
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test("multiply should be correct" , () =>{
    // data
    const a = 1;
    const b = 2;
    const c = 3;

    // action
    const result1 = mult(a,b);
    const result2 = mult(c,b);

    // expert result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test("splitting into words should be correct" , () => {
    const sent1 ="hello my friend"
    const sent2 ="JS - the best   programming language."

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe("JS");
    expect(result2[1]).toBe("the");
    expect(result2[2]).toBe("best");
    expect(result2[3]).toBe("programming");
    expect(result2[4]).toBe("language");
})