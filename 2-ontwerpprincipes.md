# Ontwerpprincipes

## Repressief object

Het repressief object is het centrale object binnen het Informatiemodel
Repressieve Object Informatie (IMROI). Alle andere objecten in IMROI hebben een
relatie met een repressief object.

Een repressief object kan verschillende vormen aannemen, zoals een gebouw,
infrastructuur, evenemententerrein, natuurgebied of water. Op de kaart wordt het
repressief object weergegeven als een punt. Het repressief object bevindt zich
op een terrein en kan uit meerdere gebouwen bestaan, en kan ook
informatieobjecten bevatten. Een gebouw bestaat op zijn beurt uit verschillende
onderdelen, zoals bouwlagen en dakconstructies.

Informatieobjecten bevatten gedetailleerde informatie over het repressief
object, zoals sleutellocaties, toegang tot terreinen, opslagvoorzieningen voor
gevaarlijke stoffen en veiligheidsvoorzieningen. Deze informatieobjecten hebben
vaak hun eigen geometrie.

![Afbeelding met tekst, schermopname, diagram, Plan Automatisch gegenereerde
beschrijving](media/a0a266b07bd0b90ab3db2dbc90fe876b.png)Een kenmerk van een
repressief object is dat de verantwoordelijkheid voor het verzamelen van
informatie over dat object bij één veiligheidsregio ligt. Echter, vanwege de
mogelijkheid van inzet van eenheden over de regiogrens heen in een andere regio,
is het noodzakelijk om informatie over objecten te delen met andere
veiligheidsregio's.

Dit betekent dat hoewel de verantwoordelijkheid voor het verzamelen van
informatie primair bij één veiligheidsregio ligt, er een behoefte kan zijn om
relevante informatie over het repressieve object te delen met andere
veiligheidsregio's. Op die manier kunnen de betrokken veiligheidsregio's
efficiënt samenwerken en gecoördineerde acties ondernemen bij incidenten of
calamiteiten die zich voordoen op of rondom het repressieve object, zelfs als
deze zich buiten het territoriale gebied van één veiligheidsregio bevinden.

Het delen van informatie tussen veiligheidsregio's kan cruciaal zijn voor een
effectieve en gecoördineerde respons, met name in situaties waarbij
grensoverschrijdende samenwerking nodig is. Het zorgt ervoor dat alle relevante
actoren op de hoogte zijn van de situatie en de benodigde informatie hebben om
passende maatregelen te nemen.

## Modellering

### NEN3610

Het Informatiemodel Repressieve Object Informatie (IMROI) is gemodelleerd op
basis van het [Basismodel
Geo-informatie](https://www.geonovum.nl/geo-standaarden/nen-3610-basismodel-voor-informatiemodellen/basismodel-geo-informatie-nen3610),
beter bekend als NEN3610. Deze standaard biedt een referentiekader voor het
modelleren en uitwisselen van geografische informatie in Nederland. Het IMROI is
gebaseerd op versie 2022 van de NEN3610-standaard.

Door het IMROI te baseren op de NEN 3610:2022 standaard wordt gezorgd voor een
uniforme en gestructureerde manier van vastleggen, organiseren en uitwisselen
van gegevens over repressieve objecten en hun omgeving. Dit vergemakkelijkt niet
alleen de samenwerking tussen verschillende veiligheidsregio's, maar zorgt er
ook voor dat de informatie eenduidig en consistent is, wat essentieel is voor
een effectieve en efficiënte respons in geval van incidenten of calamiteiten.

Het gebruik van de NEN3610 standaard als basis voor het IMROI zorgt ervoor dat
het model voldoet aan de nationale en internationale normen voor geo-informatie,
en biedt tevens een solide basis voor toekomstige ontwikkelingen en
uitbreidingen van het informatiemodel.

Onderstaande afbeelding toont de semantische relaties tussen NEN3610 en
IMROI-objecten.

![Afbeelding met tekst, diagram, Plan, Technische tekening Automatisch
gegenereerde beschrijving](media/df94958d8bc12429e7c0d96b42a13b13.png)

### Metamodel

Het Informatiemodel Repressieve Object Informatie (IMROI) is gemodelleerd op
basis van het [Metamodel voor Informatiemodelering
(MIM)](https://www.geonovum.nl/geo-standaarden/metamodel-informatiemodellering-mim)
versie 1.1. Dit informatiemodel wordt uitgedrukt in UML op het niveau van het
logisch model. Het MIM biedt een gestandaardiseerde aanpak voor het modelleren
van informatiemodellen, waardoor een consistente en eenduidige manier van
informatie-uitwisseling wordt bevorderd.

IMROI is ontwikkeld als een logisch model binnen het MIM-framework, waardoor het
aansluit op de bestaande informatiestructuren en -standaarden. Door gebruik te
maken van het MIM-framework wordt de interoperabiliteit met andere
informatiemodellen en -systemen bevorderd, wat de samenwerking en
informatie-uitwisseling tussen verschillende organisaties en disciplines in de
sector veiligheidsregio's verbetert. IMROI voorziet in de behoefte aan
gestandaardiseerde en eenduidige informatie over repressieve objecten en hun
omgeving, wat essentieel is voor een effectieve uitvoering van de
publiekrechtelijke taken van de veiligheidsregio's.

### ISO 19107 Geographic information

De standaard [Geographic information - Spatial
Schema](https://www.iso.org/standard/66175.html) definieert het ruimtelijk
schema: het informatiemodel van geometrieën. In ISO 19107 zijn de
geometrietypen, hun eigenschappen en hun onderlinge relaties opgenomen. De
geometrietypen uit deze standaard, zoals GM_Point, GM_Curve, en GM_Surface
worden gebruikt om de geometrietypen in geo-informatiemodellen te specificeren.

In het IMROI worden de geometrietypen uit ISO19107:2019 toegepast.

De geometrie wordt in het informatiemodel met hun ISO 19107 naam, zoals
GM_Surface, aangeduid.

| Geometrietype | ISO aanduiding  |
|---------------|-----------------|
| Vlak          | GM_Surface      |
| Lijn          | GM_Curve        |
| Punt          | GM_Point        |
| Multivlak     | GM_MultiSurface |
| Multilijn     | GM_MultiCurve   |
| Multipunt     | GM_MultiPoint   |

## Samenhang met andere registraties

Voor de implementatie van het IMROI worden gegevens uit verschillende
registraties uitgebreid of samengevoegd. Om deze reden is het IMROI zodanig
gemodelleerd dat het externe koppelingen heeft met objecten in andere
informatiemodellen die onder deze registraties vallen. Dit zorgt ervoor dat de
objecten in het IMROI een relatie hebben met objecten in andere registraties.

### Basisregistratie Adressen en Gebouwen (BAG)

De Basisregistratie Adressen en Gebouwen (BAG) is de bron van gegevens over
panden en adresseerbare objecten in Nederland. Deze registratie biedt
gedetailleerde informatie over de fysieke eigenschappen en locaties van
gebouwen, waaronder hun adresgegevens, geometrie en functionele status.

Voor meer informatie over het informatiemodel BAG, zie: [Gegevenscatalogus
Basisregistratie Adressen en Gebouwen (IMBAG) \|
Geonovum](https://www.geonovum.nl/geo-standaarden/informatiemodellen-nen3610-familie/gegevenscatalogus-basisregistratie-adressen-en)

Binnen het Informatiemodel Repressieve Object Informatie (IMROI) worden de
gegevens over panden uit de BAG hergebruikt voor de registratie van repressieve
objecten die panden betreffen.

### Basisregistratie Grootschalige Topografie (BGT)

De Basisregistratie Grootschalige Topografie (BGT) is een topografisch
objectenbestand dat voor heel Nederland uniform is wat betreft inhoud en
kwaliteit. Dat betekent dat het bestand gebiedsdekkend is en voldoet aan
beschreven kwaliteitsaspecten voor volledigheid, actualiteit en nauwkeurigheid.
De BGT is bedoeld voor gebruik op een schaal van 1:500 tot 1:5.000. Het gaat
over topografische objecten, zoals gebouwen, wegen, spoorwegen, waterlopen,
parken en bossen.

Voor meer informatie over het informatiemodel BGT, zie:
<https://www.geonovum.nl/geo-standaarden/bgt-imgeo>

Gegevens over wegen, water, terreinen, gebouwen, kunstwerken, en functionele
gebieden uit de BGT worden binnen IMROI hergebruikt voor repressieve objecten
met betrekking tot waterongevallen, evenementen en natuur.

## Dekking

IMROI is een informatiemodel dat zich richt op repressieve objecten en
terreinen, variërend van panden tot evenemententerreinen, water en natuur. Deze
eerste versie van IMROI legt de focus op het vastleggen van gegevens over
panden, evenementen, water- en natuurgebieden.

Indien in de toekomst blijkt dat er behoefte is aan verdere uitbreidingen van
IMROI, kunnen deze worden opgenomen binnen de bestaande systematiek. Dit biedt
de flexibiliteit om het informatiemodel aan te passen en uit te breiden naar
nieuwe toepassingsgebieden, zodat het blijft voldoen aan de veranderende
behoeften van de veiligheidsregio's.
