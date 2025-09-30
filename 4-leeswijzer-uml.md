## Leeswijzer: Hoe lees je een UML-klassendiagram?

Een UML-klassendiagram is een visuele representatie van objectklassen en hun
onderlinge relaties. Het is bedoeld om de structuur van een informatiemodel te
verduidelijken.

Het IMROI is een UML-klassendiagram dat voldoet aan de eisen voor een *logisch
model* conform het Metamodel voor Informatiemodellering. Dit betekent dat het
een abstracte beschrijving is van de informatie en structuur, zonder technische
implementatiedetails.

Hieronder lees je hoe je een UML-klassendiagram kunt interpreteren.

**Objecttypen**

Elk vak of tabel in het diagram stelt een *objectklasse* of *objecttype* voor.
Een objectklasse beschrijft een groep objecten met gedeelde eigenschappen en
gedrag. Voorbeelden van objecttypen in het IMROI zijn RepressiefObject,
InformatieObject, Veiligheidsvoorziening.

Een *concreet objecttype* stelt een objectklasse voor waarvan daadwerkelijk
objecten kunnen worden gemaakt. Dit zijn de typen die in de praktijk gebruikt
worden, zoals RepressiefObject, Bouwlaag, en Veiligheidsvoorziening.

Een *abstract objecttype* is bedoeld als een algemene beschrijving en wordt
gebruikt als basis voor andere objecttypen. Er worden geen objecten rechtstreeks
van een abstract type gemaakt. Abstracte objecttypen worden aangeduid met
cursieve namen en hebben een indicatie "abstract" in hun beschrijving.
Voorbeelden in het IMROI zijn IMROI-object en InformatieObject.

**Attributen en gegevensgroepen**

Binnen een objectklasse staan attributen en soms gegevensgroepen.

*Attributen* zijn de individuele kenmerken van de objectklasse.

*Gegevensgroepen* zijn clusters van attributen die samen een logische eenheid
vormen.

Het verschil tussen attributen en gegevensgroepen is zichtbaar via het
*stereotype* (bijvoorbeeld \<\<gegevensgroep\>\>).

Elk attribuut heeft een *datatype*, zoals onder meer ‘CharacterString\*\*’\*\*
(tekstwaarde), ‘Integer’ (geheel getal) of verwijzing naar een waardenlijst.

**Waardenlijsten**

Waardenlijsten beperken en standaardiseren de mogelijke inhoud van een
attribuut. In het IMROI worden twee soorten onderscheiden: codelijst en
enumeratie.

*Codelijst* is een waardenlijst waarvan de waarden buiten het informatiemodel
worden beheerd, wat flexibiliteit biedt. Wijzigingen leiden niet tot
aanpassingen van het informatiemodel.

*Enumeratie i*s een vaste waardenlijst die binnen het informatiemodel wordt
beheerd. Wijzigingen vereisen aanpassing van het model.

**Relaties tussen objecttypen**

Relaties in een UML-klassendiagram geven de verbindingen tussen objectklassen
weer. Deze relaties verduidelijken de de structuur en interacties binnen het
model.

*Associaties* zijn relaties tussen objectklassen, die worden weergegeven met
lijnen. Een pijl geeft de richting van de relatie aan (van bron naar doel).
Bijvoorbeeld in de relatie ‘Bouwlaag maaktOnderdeelUitVan Gebouw’ is ‘Bouwlaag’
het bronobject en ‘Gebouw’ het doelobject. In een uitwisseling wordt een
verwijzing naar het doelobject opgenomen bij het bronobject, vaak met de naam
van de relatierol (bijvoorbeeld gerelateerdeBouwlaag).

*Generalisaties* zijn relaties die worden weergegeven met een lijn met een holle
driehoek en duiden op een "is-een"-relatie. Bijvoorbeeld: RepressiefObject is
een IMROI-object en Veiligheidsvoorziening is een InformatieObject. Een
subklasse erft eigenschappen van de superklasse.

**Kardinaliteit en verplichting**

Kardinaliteit (of multipliciteit) geeft aan hoeveel instanties van een
objectklasse, attribuut of gegevensgroep mogelijk of vereist zijn.
Veelvoorkomende kardinaliteiten zijn:

-   1: precies één (verplicht).

-   0..1: nul of één (optioneel).

-   1..\*: één of meer (verplicht met minimaal één).

-   0..\*: nul of meer (optioneel, zonder bovengrens).

-   \*: onbepaald aantal.

Als er geen kardinaliteit bij een attribuut of gegevensgroep vermeld staat,
wordt dit beschouwd als verplicht (1).

**Keuze**

Een UML-klassendiagram kan keuzemogelijkheden bevatten. Dit wordt aangegeven met
een stereotype \<\<Keuze\>\>.

Bij een *keuze-datatype* kan een attribuut een waarde hebben uit een beperkte
set datatypen. Bijvoorbeeld: het attribuut geometrie bij Veiligheidsvoorziening
kan een keuze zijn tussen punt- of lijngeometrie (datatype PuntOfLijn).

Bij een *keuzerelatie* kan er gekozen worden tussen meerdere doelobjecttypen.
Bijvoorbeeld: in het IMROI kan Gebouw een relatie hebben met een BAG Pand of een
BGT OverigBouwwerk.

**Kleurgebruik UML-diagrammen**

Het kleurgebruik onderscheidt IMROI-specifieke objecten van externe objecttypen,
zodat de gebruiker in één oogopslag kan zien welke elementen intern gedefinieerd
zijn en welke uit andere standaarden komen. ![Afbeelding met tekst,
schermopname, scherm, software Door AI gegenereerde inhoud is mogelijk
onjuist.](media/ceeb398fbffb4aab31d49892f7f72dcc.png)

-   Grijs / Wit: Klassen die afkomstig zijn uit externe informatiemodellen,
    zoals NEN3610, IMBAG of IMGeo. Deze worden gebruikt ter referentie en vallen
    buiten het IMROI-domein.

-   Overige kleuren: Objecten binnen het thema *RepressiefObject*, zoals
    *Terrein* en *Gebouw en* informatieobjecten die specifiek binnen het
    IMROI-thema zijn gedefinieerd.

**Samenvatting**

-   Elk vak in het diagram stelt een objectklasse voor, die eigenschappen en
    gedrag beschrijft.

-   Concreet objecttype: praktisch toepasbare objecten; Abstract objecttype:
    algemene beschrijvingen, bedoeld als basis.

-   Attributen hebben een datatype, zoals CharacterString, Integer of een
    waardenlijst (codelijst of enumeratie).

-   Waardenlijsten standaardiseren waarden; codelijsten zijn extern beheerd,
    enumeraties intern.

-   Associaties tonen relaties tussen objectklassen; generalisaties tonen
    "is-een"-relaties.

-   Kardinaliteit geeft aan hoeveel instanties mogelijk of vereist zijn.

-   Keuzes in datatypen of relaties bieden flexibiliteit binnen het model.

-   Kleurgebruik in UML geeft onderscheid tussen eigen IMROI-objecten en
    objecten in externe informatiemodellen.

Door deze richtlijnen te volgen, kan een UML-klassendiagram effectief worden
geïnterpreteerd. Voor meer informatie over gegevensmodelering, zie het
[Metamodel voor Informatie Modelering
(MIM)](https://docs.geostandaarden.nl/mim/mim/).
