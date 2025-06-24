document.getElementsByTagName('body')[0].onload = function () {	

	if (typeof respecConfig == 'undefined' || respecConfig.specStatus == 'WV' || respecConfig.specStatus == 'wv') {
		if (document.respec) {		
			document.respec.ready.then(function () {				
			 addUrlsToDl();
			});
		}
		else {	   
			addUrlsToDl();		
		}
	}
}; 

function addUrlsToDl() {
	// Selecteer de eerste <dl> in het document
	const dl = document.querySelector('dl');

	console.log(respecConfig);

	// Maak de nieuwe elementen aan
	const items = [];
	
	const specType = `${respecConfig.specType}`.toLowerCase();
	
	if (respecConfig.specStatus !== 'wv' &&  respecConfig.specStatus !== 'WV' ) {
		const rawPublishDate = respecConfig.publishISODate.toLocaleString().split('T')[0]		
							?? respecConfig.dashDate
							?? new Date().toISOString().split('T')[0];

		const publishDate = rawPublishDate.replace(/-/g, '');
		const specStatus = `${respecConfig.specStatus}`.toLowerCase();

		const docName = `${specStatus}-${specType}-${respecConfig.shortName}-${publishDate}`;

		items.push({ term: 'Deze versie:', url: `https://docs.geostandaarden.nl/${respecConfig.pubDomain}/${docName}` });
	}
	else {
		items.push({ term: 'Deze versie:', url: `${respecConfig.thisVersion}` });
	}

	if (respecConfig.previousPublishDate && respecConfig.previousMaturity) {
		const previousMaturity = `${respecConfig.previousMaturity}`.toLowerCase();		
		const previousPublishDate = new Date(respecConfig.previousPublishDate).toISOString().toLocaleString().split('T')[0].replace(/-/g, '');
		const previousDocName = `${previousMaturity}-${specType}-${respecConfig.shortName}-${previousPublishDate}`;

		items.push({ term: 'Vorige versie:', url: `https://docs.geostandaarden.nl/${respecConfig.pubDomain}/${previousDocName}` });
	}
	
	items.push( { term: 'Laatst gepubliceerde versie ', url: `https://docs.geostandaarden.nl/${respecConfig.pubDomain}/`});
	
	

	
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

		dd.appendChild(a);	
		

		// Prepend in omgekeerde volgorde
		dl.insertBefore(dd, dl.firstChild);
		dl.insertBefore(dt, dl.firstChild);
	}

}
