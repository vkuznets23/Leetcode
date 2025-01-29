function reverseWords(s: string): string {
    //get rid of extra spaces
    const str = s.trim().replace(/\s+/g, ' ');
    
    // convert str to array to reverse wirds and back changing commas to spaces
    const array = str.split(" ").reverse().toString().replace(/,/g, ' ');

    return array;
};
