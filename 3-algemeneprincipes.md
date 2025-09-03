# Algemene principes

## Bronhouders

Binnen het kader van het Informatiemodel Repressieve Objectinformatie (IMROI)
fungeren veiligheidsregio's als bronhouders voor de gegevens binnen hun eigen
gebied. Een bronhouder is de organisatie of entiteit die verantwoordelijk is
voor het beheren en leveren van specifieke gegevens.

Het repressieve object vormt het kernobject binnen het IMROI. Alle andere
objecten in het IMROI hebben een relatie met een repressief object. Een
belangrijk kenmerk van een repressief object is dat de verantwoordelijkheid voor
het verzamelen van informatie over dat object bij één veiligheidsregio ligt.

Vanwege de mogelijkheid van inzet van eenheden over de regiogrens heen, is het
echter noodzakelijk om informatie over objecten te delen met andere
veiligheidsregio's. Hoewel de verantwoordelijkheid voor het verzamelen van
informatie primair bij één veiligheidsregio ligt, kan er een behoefte zijn om
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

## Landelijke voorziening

De landelijke voorziening DATA4OOV, beheerd door het Nationaal Instituut
Publieke Veiligheid (NIPV), is verantwoordelijk voor de opslag en verdere
distributie van de IMROI-objecten naar de andere veiligheidsregio's. Dit zorgt
ervoor dat de gegevens op een gestandaardiseerde en consistente manier worden
uitgewisseld tussen de verschillende veiligheidsregio's.

De landelijke voorziening speelt een cruciale rol in het beschikbaar maken van
informatie over de objecten binnen de veiligheidsketen, waardoor deze informatie
landelijk toegankelijk is en kan worden gebruikt voor verschillende
toepassingen.

De Veiligheidsregio conformeert zich aan het IMROI als het om data deling met
het NIPV gaat. In samenwerking met de eigen softwareleverancier zorgt de
Veiligheidsregio ervoor dat de gegevens volgens de vastgestelde
uitwisselstandaard beschikbaar worden gesteld aan de landelijke voorziening van
het NIPV.

## Coordinaat-referentiesysteem

Het toegepaste coördinaatsysteem voor het IMROI is dat van het stelsel van de
Rijksdriehoeksmeting (RD-stelsel). De coördinaatgetallen zijn daarbij op
millimeternauwkeurigheid met als eenheid meters. Het coördinaatgetal heeft
maximaal drie cijfers achter de komma. Zo nodig wordt daarvoor afgerond, zodanig
dat als het vierde cijfer achter de komma de waarde 1 t/m 4 bedraagt, het derde
cijfer achter de komma niet wijzigt en als het vierde cijfer achter de komma de
waarde 5 t/m 9 bedraagt, het derde cijfer achter de komma met één wordt
verhoogd, met mogelijk ook implicaties voor de voorliggende cijfers, waarbij
dezelfde regel geldt.

Het RD-stelsel voldoet aan de eisen van de Europese richtlijn INSPIRE. Deze
stelt dat binnen de Europese continentale aardschol, waartoe ook Nederland en
het Nederlandse deel van de Noordzee behoort, geldt dat coördinaten herleidbaar
moeten zijn tot het European Terrestrial Reference System 1989 (ETRS89) voor de
horizontale component.

## Geometrietypen

Tot het IMROI behoren de volgende objecten met de volgende geometrietypen.

| Objecttype             | Geometrietype        |
|------------------------|----------------------|
| Repressief­Object      | Punt                 |
| Terrein                | Multivlak            |
| Gebouw                 | Vlak of Multivlak    |
| Bouwlaag               | Multivlak            |
| Ruimte                 | Multivlak            |
| *InformatieObject*     | *Geen*               |
| Opstelplaats           | Punt                 |
| Bereikbaarheid         | Lijn                 |
| Toegang                | Punt                 |
| VindplaatsSleutel      | Punt of Lijn         |
| ImpactZone             | Punt of Lijn of Vlak |
| Opslagvoorziening      | Punt                 |
| Referentiepunt         | Punt                 |
| Veiligheidsvoorziening | Punt of Lijn         |
| Beheersmaatregel       | Punt of Lijn         |

## Identificatie en registratiegegevens

Voor elk object in het IMROI wordt een unieke aanduiding (identificatie) en de
registratiegegevens vastgelegd. Het IMROI volgt de principes en modelering van
het NEN 3610:2022.

![Afbeelding met tekst, schermopname, Lettertype, nummer Automatisch
gegenereerde beschrijving](media/a4cc27adfaa9f114b3bae19f39c8925a.png)

Elk IMROI-object is een specialisatie van het abstract objecttype NEN3610-object
IdentificeerbaarObject. Hiermee overerft elk IMROI-object vanuit NEN3610 de
attributen domein en identificatie, en de associatie-relatie naar het object
Registratiegegevens waarin de gegevens over de tijdlijn geldigheid (materiële
historie) en tijdlijn registratie (formele historie) zijn opgenomen.

### Identificatie en versie

Uitgangspunt is dat objecten uniek identificeerbaar zijn binnen registraties en
over registraties heen. Om dit te bereiken wordt aan elk object een uniek
identificatienummer toegekend, dat uit twee delen bestaat: een domein en een
identificatiecode. Zolang het object bestaat, mag dit ID niet veranderen.

Het IMROI hanteert voor het eerste deel, het domein, NL.IMROI. Het eerste deel
is daarbij landcode, gevolgd door een punt. Het tweede deel is de code voor het
sectormodel.

Het tweede deel, de identificatiecode, moet het object binnen het IMROI uniek
identificeren. Hiervoor dient gebruik gemaakt te worden van een UUID. Dit is een
getal van 32 cijfers (plus eventueel vier streepjes), opgedeeld in een
opeenvolging van hexadecimale noteringen (0-9 en a-f).

Op deze wijze ziet een IMROI er dan als volgt uit.

| Attribuut     | Attribuutwaarde                      |
|---------------|--------------------------------------|
| Domein        | NL.IMROI                             |
| Identificatie | 7451f26f-c1e7-4e5e-8ddf-73fa0e190512 |

De identificatie van een IMROI-object wordt bepaald bij het ontstaan van het
object en blijft behouden gedurende de hele levensloop van het object.

De identificatie van een IMROI-object wordt vastgelegd conform het NEN3610
IdentificeerbaarObject, waarvoor de volgende regels gelden:

1.  Een Identificeerbaar Object heeft een unieke identificatie binnen het domein
    van NEN 3610.

2.  De identificatie van het object is voor de identificatie van een object in
    de registratie, en niet van het fenomeen zelf.

3.  De identificatie van het object is voor externe referentie van het object.

4.  De NEN 3610 identificatie wordt gepubliceerd door de bronhouder
    (gegevensbeheerder) van het object en mag gebruikt worden voor externe
    identificatie van het object. Binnen een registratie mag een interne
    object-identificatie voorkomen die anders luidt en die bedoeld is voor
    unieke identificatie.

5.  Tijdens de hele levensloop van een object in de registratie blijft de
    identificatie van het object gelijk.

6.  Objecten kunnen in hun levensloop van eigenschappen veranderen maar de
    identificatie van het object moet gelijk blijven.

### Versie

Als een attribuutwaarde verandert dan leidt dat tot een nieuwe versie. In het
IMROI wordt aan een object een nieuw (oplopend) nummer toegekend voor een nieuwe
versie van het objectkrijgt in de registratiegegevens van het object.

Versie is geen onderdeel van de unieke identificatie van het object. Indien er
verschillende versies van een object bestaan hebben die dezelfde domein en
identificatie. Versies van een IMROI-object geven de ontwikkeling van een
IMROI-object in zijn levensloop weer.

Wijzigen van de eindregistratie leidt niet tot een nieuwe versie van een object.

### Levensduur en historie

De levensduur en historie van een object worden bijgehouden in de
registratiegegevens van het IMROI-object. De historie van een object in de
werkelijkheid wordt weergegeven in twee tijdlijnen: de tijdlijn geldigheid en de
tijdlijn registratie. De tijdstippen van het ontstaan en vervallen van een
object worden vastgelegd in de levensduur.

Tijdstippen worden vastgelegd in het formaat van
[ISO8601](https://www.iso.org/iso-8601-date-and-time-format.html), dus
jjjj-mm-ddThh:ii:ss, waarin j jaar, m maand, d dag, h uur, i minuut, s seconde.

#### Tijdlijn geldigheid

De tijdlijn geldigheid vertelt ons hoe lang een IMROI-object geldig is door te
laten zien wanneer de eigenschappen ervan veranderen in de echte wereld. Bij
elke nieuwe versie van een IMROI-object worden registratiegegevens toegevoegd.
Deze gegevens bevatten twee attributen: 'beginGeldigheid' en 'eindGeldigheid',
die aangeven voor welke periode deze versie van het IMROI-object geldig is.

De tijdstippen voor beginGeldigheid en eindGeldigheid worden bij een
IMROI-object vastgelegd met een nauwkeurigheid tot op de dag, bijvoorbeeld
2024-04-26.

#### Tijdlijn registratie

De tijdlijn registratie laat zien wanneer de gegevens van een IMROI-object
veranderen in de registratie. Met andere woorden, het vertelt ons wanneer iets
wordt geregistreerd. Bij elke nieuwe versie van een IMROI-object worden
registratiegegevens toegevoegd. Deze gegevens bevatten twee attributen:
'tijdstipRegistratie' en 'eindRegistratie', die aangeven voor welke
registratieperiode deze versie van het IMROI-object geldig is. Over het algemeen
loopt de tijdlijn registratie achter op de tijdlijn geldigheid.

De tijdstippen voor tijdstipRegistratie en eindRegistratie worden bij een
IMROI-object vastgelegd met een nauwkeurigheid tot op de seconde, bijvoorbeeld
2024-04-26T12:34:56.

#### Levensduur

De levensduur van een object in de echte wereld begint wanneer het voor het
eerst verschijnt en eindigt wanneer het verdwijnt. De registratie van de
levensduur vertelt ons voor welke periode het IMROI-object de echte wereld
vertegenwoordigt.

Bij het ontstaan en vervallen van een IMROI-object worden registratiegegevens
voor de levensduur toegevoegd. Deze gegevens bevatten twee attributen:
'objectBegintijd' en 'objectEindtijd', die aangeven voor welke periode deze
versie van het IMROI-object geldig is.

De tijdstippen voor objectBegintijd en objectEindtijd worden bij een
IMROI-object vastgelegd met een nauwkeurigheid tot op de dag, bijvoorbeeld
2024-04-26.

## RepressiefObject en informatieobjecten

Een RepressiefObject is van het type Gebouw, Natuur, Water, Evenement of Infra.
In het IMROI worden vanuit het RepressiefObject of Bouwlaag relaties gelegd met
informatieobjecten. Niet elk informatieobject is van toepassing voor elk type
RepressiefObject of Bouwlaag. Om de dataconsistentie te waarborgen, worden de
volgende regels toegepast:

-   BHVOrganisatie wordt optioneel als gegevensgroep vastgelegd bij een
    Repressief Object van het type Gebouw, Evenement of Infra, of bij Bouwlaag.

-   Veiligheidsvoorzieningen met een bouwkundig karakter komen als
    Informatieobject voor bij een Repressief Object van het type Gebouw, of bij
    Bouwlaag.

-   Referentiepunt als informatieobject komt alleen voor bij Repressief Object
    van het type Natuur.

-   Beheersmaatregel als informatieobject komt alleen voor bij Repressief Object
    van het type Natuur of Water.

-   Impactzone met het karakter van risicocontouren komt als informatieobject
    alleen voor bij het RepressiefObject van het type Natuur, Water of Infra.

De onderstaande tabel geeft aan welke gegevengoepen of informatieobjecten mogen
worden gekoppeld aan welk type RepressiefObject of Bouwlaag.

| *InformatieObject \| TypeRepressiefObject* | *Gebouw* | *Natuur* | *Water* | *Evenement* | *Infra* | *Bouwlaag* |
|--------------------------------------------|----------|----------|---------|-------------|---------|------------|
| Aanwezigen                                 | ×        | ×        | ×       | ×           | ×       | ×          |
| BHVOrganisatie                             | ×        |          |         | ×           | ×       | ×          |
| Contactpersoon                             | ×        | ×        | ×       | ×           | ×       | ×          |
| Opstelplaats                               | ×        | ×        | ×       | ×           | ×       | ×          |
| Bereikbaarheid                             | ×        | ×        | ×       | ×           | ×       | ×          |
| Toegang                                    | ×        | ×        | ×       | ×           | ×       | ×          |
| VindplaatsSleutel                          | ×        | ×        | ×       | ×           | ×       | ×          |
| ImpactZone                                 | ×        | ×        | ×       | ×           | ×       | ×          |
| Opslagvoorziening                          | ×        | ×        | ×       | ×           | ×       | ×          |
| Referentiepunt                             |          | ×        |         |             |         |            |
| Veiligheidsvoorziening                     | ×        | ×        | ×       | ×           | ×       | ×          |
| Beheersmaatregel                           |          |          | ×       |             |         |            |
