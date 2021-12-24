// Veri tipleri 2 ye ayrılır. ilkel ve ilkel olmayan veri tipleri.

//Methotlar

let string = "javascript";
console.log(string.length); //içeriğindeki karakter sayısını konsola yazdırır.
console.log(string[8]);// köşeli parantez içine yazılan indexi yazdırır.
console.log(string[string.length-1]); // son karakteri bulmak için kullanılır.
console.log(string.toLowerCase()); // girilen değeri küçültmek için kullanılır.
console.log(string.toUpperCase()); // girilen değeri büyütmek için kullanılır.
console.log(string.substring(3)); // girilen değerden sonraki değerleri yazdırır.
                                  // 2 değer girilirse (0,4) değerler arasını ekrana yazdırır.
console.log(string.split()); // Her karakteri birbirinden ayırır. ("") koyarsak tek tek ayırır
console.log(string.trim()); // Gereksiz olan boşlukları kaldırır.
console.log(string.includes()); // içeriğinde varsa methodu parantez içine yazılanı arar.
console.log(string.charAt()); // index numarasına göre karakterini verir.
console.log(string.charAt()); // index numarasına göre karakterini verir.
//console.log(string.concat(sonrası))

let isim = "merhaba";

let ilkKarakter = isim.charAt(0).toUpperCase();

console.log(ilkKarakter);

let sonrası = isim.substring(1);
console.log(sonrası);

let büyükMerhaba = ilkKarakter + sonrası

console.log(büyükMerhaba)

// Number dan stringe çevirme

let a = "5";
let b = 6;
console.log(a+b) //56 yazar toplamaz

console.log(Number(a)+b) //11 yazar toplar Number ile stringi sayıya çeviriyoruz.
console.log(parseFloat(a)+b) // stringi ondalıklı sayıya çevirir.
console.log(parseInt(a)+b) // stringi tam sayıya çevirir.
console.log( +a +b) // sadece başına artı koymak stringi sayıya çevirir.

// Stringten number a çevirme
console.log(a + String(b));  // Number da stringe çevirir.
console.log(a + b.toString());  // Number ı stringe çevirir.
console.log(a + ""+b); // Number ı stringe çevirir.


//Math objeleri

let piNumber = Math.PI
console.log(piNumber)
console.log(Math.round( piNumber)); //Değeri en yakına yuvarlar.
console.log(Math.floor(piNumber)) // Değeri aşağıya yuvarlar.
console.log(Math.ceil(piNumber)) // Değeri yukarı yuvarlar.

let randomNumber = Math.random();
console.log(randomNumber) // 0 la 1 arasında rastgele sayı üretir.
console.log(Math.floor(randomNumber*100)) // 0 la 99 arasında rastgele sayı üretir.
console.log(Math.floor(randomNumber*100)+1) // 1 la 100 arasında rastgele sayı üretir.
console.log(Math.sqrt(randomNumber)) // sayının karekökünü alır.
console.log(Math.pow(3,2)) // sayının üssünü alır parantez içindeki şekilde yazılır.
console.log(Math.max(10,-1,400,2)) // içeriğinde bulunan değerin en yükseğini yazdırır.
console.log(Math.min(10,-1,400,2)) // içeriğinde bulunan değerin en düşüğünü yazdırır.


// 1.OPERATÖRLER..
// 1.1 Mantıksal Operatörler
let x = 10;
let y = 5;
let z = 20;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x%y); // Bölümünden kalanı veriyor.

console.log(++x); // sayıyı 1 arttırır.
console.log(--y); // sayıyı 1 azaltır.

//1.2 Atama Operatörleri

z += x;// z ile x 'i toplar kendisine atar  z=z+x
z -= x;// z ile x'i çıkartır kendisine atar z= z-x
z *= x;// z ile x'i çarpar kendisine atar  z= z*x
z /= x;// z ile x'i böler kendisine atar z=z/x
console.log(z) // z ile x i toplar kendisine atar

//1.3 Karşılaştırma Operatörü

let xx = 19;
let yy = 11;

console.log(xx==yy) // eşit mi yada eşitse anlamındadır. true 
console.log(xx===yy) // tipi ve değeri eşit mi diye karşılaştırma yapar. false
console.log(xx !== yy)  // eşit değil mi sorusudur.. eşidi false sa eşit değil mi true dur
console.log(xx > yy)  // büyüktür
console.log(xx < yy)  // küçüktür.
console.log(xx >= yy)  // büyük eşit
console.log(xx <= yy)  // küçük eşit

console.log(true && true)     //  ve operatörü 2 koşulda true ysa true
console.log(true && false)      //  ve operatörü  2 koşuldan birisi false sa false  true olabilmesi için hepsinin true olması gerekir.
console.log(false && false)     //  ve operatörü  2 koşulda yanlışsa sonuç false 

console.log((xx<12)|| (yy===10)) // bir tanesi true ysa sonuç true dur.

console.log(xx && yy)


//------------örnek------------//
function hesapla() {
    let a =parseInt(10);
    let b =parseInt(2);
    if(a!==0 && b!==0){
        let c=a/b;
        console.log("Sonuc :", c)
    }else{
        console.log("sıfır girdiniz")
    }    
}
hesapla()

// Ternary Operatörü.. Javascript'te karşılaştırma operatörü sonucuna göre değişkene değer atamak için kullanılır

let isBig = xx >18 ? true : false;  //  (?) koşul sağlanıyorsa ik değer (:) sağlanmıyorsa diğer değer atanır.
console.log(isBig)
let isBigger = xx>18 ? "evet büyük": "hayır küçük";
console.log(isBigger);

let newd = null;
xx>18 ? newd=20 : newd=30;
console.log(newd)

// örnek

let usd = 13;
let tl =2;
let euro = 15;
let nn= tl>10 ? usd=15 : usd=25;
console.log(nn)

























