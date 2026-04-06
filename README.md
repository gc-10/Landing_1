# Base Landing Page

Questo progetto e una base di partenza per creare un sito web in stile landing page.

E pensato per essere:

- semplice da modificare
- leggero
- senza dipendenze
- pronto per essere pubblicato come sito statico

## Cosa include

- pagina singola con sezioni collegate dalla navigazione
- menu desktop e mobile
- scroll fluido verso le sezioni
- link attivo nella navbar durante la navigazione
- form contatti
- area mappa
- footer con contatti e link utili

## Struttura del progetto

```text
landing_1/
|-- index.html
|-- README.md
|-- .htaccess
|-- images/
|-- scripts/
`-- styles/
```

## File principali

- `index.html`: struttura della landing page
- `styles/style.css`: stile principale
- `styles/style-mobile.css`: adattamenti per mobile
- `scripts/main.js`: gestione menu e comportamento base
- `scripts/effectsScrolling.js`: scroll e link attivi
- `scripts/notifyForm.js`: gestione del form

## Come iniziare

1. Apri `index.html` nel browser.
2. Sostituisci testi, immagini e contatti con i tuoi contenuti.
3. Aggiorna i link della navigazione se cambi le sezioni.
4. Controlla il sito anche da mobile.

Non servono installazioni, build o package manager.

## Cosa personalizzare

Prima della pubblicazione conviene aggiornare:

- titolo pagina e meta description
- logo e immagini
- testi delle sezioni
- dati di contatto
- email del form
- link social
- mappa

## Pubblicazione

Essendo un sito statico, puoi pubblicarlo su qualunque hosting web copiando i file del progetto nella cartella del sito.

Il file `.htaccess` puo essere usato su server Apache per regole base come redirect HTTPS e alcune impostazioni di sicurezza.

## Obiettivo del template

Questo repository non vuole essere un sito finito, ma una base semplice e veloce da cui partire per realizzare una landing page personalizzata.