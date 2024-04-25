# Algemene principes

## IMROI-Objecten

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

## Identificatie en registratiegegevens

![Afbeelding met tekst, schermopname, Lettertype, nummer Automatisch
gegenereerde beschrijving](media/a4cc27adfaa9f114b3bae19f39c8925a.png)

Voor elk object in het IMROI wordt een unieke aanduiding (identificatie) en de
registratiegegevens vastgelegd. Het IMROI volgt de principes en modelering van
het NEN 3610:2022.

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

Domein NL.IMROI

Identificatie 7451f26f-c1e7-4e5e-8ddf-73fa0e190512

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

De lever

De historie van het object wordt vastgelegd in de Registratiegegevens.

Tijdlijn geldigheid

De tijdlijn geldigheid beschrijft de geldigheidsperiode van een IMROI-object
door het benoemen van de tijdstippen van veranderingen van eigenschappen, de
toestand, van een object in de werkelijkheid. Implementatie van de tijdlijn
geldigheid gebruikt door bij ieder versie een IMROI-object registratiegegevens
opte nemen met twee attributen, beginGeldigheid en eindGeldigheid, die aangeven
op welke periode deze versie van het IMROI-object betrekking hebben.

Tijdlijn registratie

De tijdlijn registratie beschrijft de tijdstippen van verandereingen van
gegevens van een IMROI-object in de registratie. Dus de tijdstippen dat iets
wordt geregistreerd. Dit houd in dat tijdstippen van aanpassing van attributen
of attribuutwaarden in een registratie worden vastgelegd.

Implementatie van tijdlijn regitratie gebeurt door in iedere versie van een
IMRO-object registratiegegevens op te nemen met twee attributen,
tijdstipregistratie en eindRegistratie die aangeven op welk registratieperiode
deze versie van het IMROI-object betrekking heeft. Doorgaans loop de tijdlijn
registratie achter op de tijdlijn geldigheid.

Levensduur

De levensduur van een object in de werkelijkheid is een afgeleid ggegeven en
begint bij het eerste voorkomen van dat object, en eindigt wanneer het object
verdwijnt. De registratie avn elvernsduur is daarmee de priodle in de
werklijkheid waarin het IMROI-opbject de werkelijkheid respresenteerd.

Historie

## Uitwisseling
