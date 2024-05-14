let hak, can;
let tahmin, sayac = 0;
let sayi = Math.floor(Math.random() * 10);
can = Number(prompt('Kaç kerede bileceksiniz?'));
hak = can;
console.log(sayi);
console.log('Başarılar')
while (hak > 0) {
    console.log(`${hak} hakkınız kaldı.`)
    hak--;
    sayac++;
    tahmin = Number(prompt('Bir sayı giriniz:'));

    if (sayi == tahmin) {
        console.log(`Tebrikler ${sayac} defada bildiniz.`);
        console.log(`Puan: ${100-(100/can)*(sayac-1)}`);
        break;
    } else if (sayi > tahmin) {
        console.log('Yukarı');

    } else {
        console.log('Aşağı');
    }
}
if (hak === 0 && sayi !== tahmin) {
    console.log("Hakkınız bitti. Kaybettiniz.");
}