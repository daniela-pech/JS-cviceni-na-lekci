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

//E-MAIL
document.body.innerHTML +=
  'Vytvořte řetězec obsahující vaši e-mailovou adresu.';
document.body.innerHTML += '<br>';
document.body.innerHTML += 'Daniela' + '.' + 'Pech' + '@mujmail.com';
