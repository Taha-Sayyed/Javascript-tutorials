// String length
const str1="Taha Sayyed"
const lengthOfStr=str1.length
console.log(lengthOfStr);


//String toUpperCase() & toLowerCase()
const str2="taHa saYyed"
console.log(str2.toUpperCase());
console.log(str2.toLowerCase());

//String indexOf()
//If you want to find the first occurrence of a substring in a string then you can use the indexOf() method
const str3="taha sayyed Ashraf"
console.log(str3.indexOf("A"));

//String lastIndexOf()
//If you want to find the last occurrence of a substring in a string then you can use the lastIndexOf() method
const str4="taha sayyed taha"
console.log(str4.lastIndexOf("taha"));

//String slice()
//If you want to extract a part of a string, then you can use the slice() method. This will return the extracted part in a new string.
const str5="TahaSayyedAshraf"
console.log(str5.slice(0,4));
console.log(str5.slice(4,));
console.log(str5.slice(-6,16));

//String substring()
//The substring() method is similar to the slice() method, but the difference is that if you give it negative parameters (less than 0) then they will be treated as 0.
const str6= "This is a string.";
const slicedStr = str6.substring(-3, 5);
console.log(slicedStr); // Output: This

//String substr()
//The substr() method is similar to the slice() method, but the difference is that the end parameter is the length of the characters to be extracted.
const str7="Taha Sayyed"
console.log(str7.substr(3,4));

//String charAt()
//If you want to get a character at a specified index in a string, then you can use the charAt() method.
const str8 = "This is a string.";
const character = str8.charAt(13);
console.log(character); // Output: i

//String concat()
//If you want to concatenate two or more strings, then you can use the concat() method.
const str9="Taha"
const str10="Sayyed"
console.log(str9.concat(str10));
console.log(str9.concat(" ",str10));

//String trim()
//You can remove whitespace from both ends of a string using the trim() method.
const str11="  Taha Sayyed   "
console.log(str11.trim());
console.log(str11.trimStart());
console.log(str11.trimEnd());

//String replace()
//If you want to replace a specified substring with another string, then you can use the replace() method.
const str12="Java is good then JS"
console.log(str12.replace("JS","C++"));

//String split()
//You can convert a string into an array using the split() method.
const str13="Java is good then JS"
const arr=str13.split(" ");
console.log(arr);
console.log(typeof arr);










