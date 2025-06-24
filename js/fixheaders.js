const dl = document.querySelector('dl');

console.log(respecConfig);
// Maak de nieuwe elementen aan
const items = [
    { term: 'Deze versie:', url: 'https://docs.geostandaarden.nl/imroi/cv-im-imroi-20240521' },
    { term: 'Vorige versie:', url: 'https://docs.geostandaarden.nl/imroi/cv-im-imroi-20240430' }, // Vul hier de juiste link in
    { term: 'Laatst gepubliceerde versie:', url: 'https://docs.geostandaarden.nl/imroi/' }
];

// We gaan van achter naar voren toevoegen, zodat de eerste bovenaan komt
for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i];

    // Maak <dt>
    const dt = document.createElement('dt');
    dt.textContent = item.term;

    // Maak <dd>
    const dd = document.createElement('dd');
    const a = document.createElement('a');
    a.href = item.url;
    a.textContent = item.url;

    // Eventueel klasse toevoegen als het de 'Deze versie' is
    if (item.term === 'Deze versie:') {
        dd.className = 'status';
        a.className = 'u-url status';
    }

