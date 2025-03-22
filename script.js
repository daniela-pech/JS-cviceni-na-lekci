/*

// VÝPLATA
document.body.innerHTML +=
  'Pomocí jednoduché aritmetiky spočítejte, kolik si jako programátor vyděláte.';
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Měsíční příjem je: ';
document.body.innerHTML += 7 * 320 * 21;
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Daň z mé výplaty bude: ';
document.body.innerHTML += Math.floor(
  ((((7 * 320 * 21) / 100) * 40) / 100) * 15,
);
document.body.innerHTML += '<br>';
document.body.innerHTML += '<p></p>';

//DÉLKA FILMU
document.body.innerHTML +=
  'Spočítejte, kolik hodin a minut trvá film Pán prstenů. Trvá 223 minut.';
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Délka v hodinách: ';
document.body.innerHTML += Math.floor(223 / 60);
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Délka v minutách: ';
document.body.innerHTML += Math.floor(223 % 60);
document.body.innerHTML += '<br>';
document.body.innerHTML += '<p></p>';

//E-MAIL
document.body.innerHTML +=
  'Vytvořte řetězec obsahující vaši e-mailovou adresu.';
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Daniela' + '.' + 'Pech' + '@mujmail.com';
document.body.innerHTML += '<br>';
document.body.innerHTML += '<p></p>';

//NÁHODNÁ ČÍSLA
document.body.innerHTML += Math.random();
document.body.innerHTML += '<br>';
document.body.innerHTML += Math.round(Math.random());
document.body.innerHTML += '<br>';
document.body.innerHTML += '<p></p>';

//PŘEVOD MĚNY
const wageInEur = 20;
const kurz = 24.55;
const wageInCzk = wageInEur * kurz;
document.body.innerHTML += 'Hodinová sazba v CZK je:';
document.body.innerHTML += '<br>';
document.body.innerHTML += wageInCzk + ' CZK';
document.body.innerHTML += '<br>';
document.body.innerHTML += ' <h1> Mzda v korunách: ' + wageInCzk + ' Kč </h1>';
document.body.innerHTML += '<br>';
document.body.innerHTML += '<p></p>';

//ULTRAMARATON
document.body.innerHTML +=
  'Spočítejte, v kolik hodin skončí ultramaratonský závod.';
document.body.innerHTML += '<br>';
const start = 15;
const delka = 12;
const konec = start + delka;
document.body.innerHTML += 'Běžec doběhne závod ve ' + (konec % 24) + ' ráno';
document.body.innerHTML += '<br>';
document.body.innerHTML += '<p></p>';

*/

/*
//OČKOVÁNÍ
const yourName = prompt('Jaké je Vaše jméno a příjmení?');
const age = Number(prompt('Kolik Vám je let?'));
document.body.innerHTML += '<h2>' + yourName + ', věk: ' + age + '</h2>';
*/
//Výplata jako stránka - Spočítejte, kolik si jako programátor vyděláte.

const hodSazba = Number(prompt('Zadejte vaši hodinovou sazbu v Kč:'));
const hodDenne = Number(prompt('Kolik hodin denně pracuješ?'));
const dnuCelkem = Number(prompt('Kolik dní v měsíci celkem pracuješ?'));
document.body.innerHTML +=
  '<h2> Vaš měsíční hrubá mzda je: ' + hodSazba * hodDenne * dnuCelkem + ' Kč';
