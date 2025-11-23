# Esercizio: Task Manager Pro

## Obiettivo
Creare un'applicazione web completa per la gestione delle attività (task) con funzionalità avanzate di organizzazione, filtri e statistiche.

## Requisiti Funzionali

### 1. Interfaccia Utente
- **Header**: Titolo dell'applicazione con sottotitolo descrittivo
- **Dashboard Statistiche**: Quattro card che mostrano:
  - Numero totale di task
  - Numero di task completati
  - Numero di task in attesa
  - Percentuale di completamento
- **Layout Responsivo**: Due colonne su desktop (sidebar + area principale), singola colonna su mobile

### 2. Gestione Task (Sidebar)

#### Form di Aggiunta Task
Implementare un form con i seguenti campi:
- **Titolo** (obbligatorio): input text per il nome della task
- **Descrizione** (opzionale): textarea per dettagli aggiuntivi
- **Categoria**: select con opzioni (Personale, Lavoro, Studio, Casa, Altro)
- **Data Scadenza** (opzionale): input date (minimo: data odierna)
- **Priorità**: tre pulsanti per selezionare Alta/Media/Bassa (default: Media)

#### Funzionalità del Form
- Validazione del campo titolo (obbligatorio)
- Aggiunta nuova task con pulsante "Aggiungi Task"
- Modifica task esistente (il pulsante diventa "Aggiorna Task")
- Reset del form dopo l'invio
- Selezione visiva della priorità con cambio colori

### 3. Sistema di Filtri (Sidebar)

Implementare due gruppi di filtri:
- **Per Stato**: Tutti / Attivi / Completati
- **Per Priorità**: Tutte / Alta / Media / Bassa

I filtri devono:
- Evidenziare visivamente il filtro attivo
- Aggiornare immediatamente la lista delle task
- Essere combinabili tra loro

### 4. Area Principale - Lista Task

#### Visualizzazione Task
Ogni task deve mostrare:
- Checkbox per segnare come completata
- Titolo (barrato se completata)
- Descrizione (se presente)
- Metadati: categoria, data scadenza, livello priorità
- Pulsanti "Modifica" ed "Elimina"
- Bordo colorato a sinistra in base alla priorità (rosso/arancione/verde)

#### Funzionalità Lista
- **Ricerca**: campo di ricerca per filtrare task per titolo o descrizione
- **Ordinamento**: task ordinate automaticamente per priorità
- **Animazioni**: effetto di slide-in per nuove task, hover con elevazione
- **Stato vuoto**: messaggio personalizzato quando non ci sono task

### 5. Funzionalità delle Task

- **Toggle Completamento**: checkbox per segnare completata/non completata
- **Modifica**: carica i dati della task nel form per la modifica
- **Eliminazione**: conferma prima di eliminare con dialog
- **Stile Visivo**: opacità ridotta e testo barrato per task completate

### 6. Azioni Globali (Barra Azioni)

Tre pulsanti nella parte inferiore:
- **Elimina Completati**: rimuove tutte le task completate (con conferma)
- **Esporta Lista**: scarica le task in formato CSV
- **Reset Tutto**: elimina tutte le task (con conferma)

### 7. Persistenza Dati

- Salvataggio automatico in `localStorage`
- Caricamento dati all'avvio dell'applicazione
- Aggiornamento statistiche in tempo reale

### 8. Funzionalità Avanzate

#### Esportazione CSV
Generare un file CSV con le colonne:
- Titolo, Descrizione, Categoria, Priorità, Data, Stato

#### Aggiornamento Statistiche Dinamico
Calcolare e aggiornare in tempo reale:
- Totale task
- Task completati
- Task in attesa  
- Tasso di completamento (percentuale)

## Requisiti Tecnici

### HTML
- Struttura semantica con classi appropriate
- Form con validazione HTML5
- Elementi accessibili

### CSS
- Design moderno con gradiente di sfondo
- Effetto glassmorphism per le card statistiche
- Sistema di griglia responsivo
- Animazioni e transizioni fluide
- Codice colore per priorità coerente
- Media queries per tablet e mobile

### JavaScript
- Gestione eventi per form, filtri e azioni
- Manipolazione DOM dinamica
- Salvataggio/caricamento da localStorage
- Algoritmi di filtraggio e ordinamento
- Generazione CSV per esportazione
- Gestione stato dell'applicazione

## Struttura Dati Task

Ogni task deve contenere:
```javascript
{
    id: timestamp univoco,
    title: stringa,
    description: stringa,
    category: stringa,
    date: stringa (formato ISO),
    priority: 'high' | 'medium' | 'low',
    completed: boolean,
    createdAt: stringa (formato ISO)
}
```

## Design e UX

- Palette colori: blu scuro per tema principale
- Colori priorità: rosso (alta), arancione (media), verde (bassa)
- Font: Segoe UI o simili
- Icone emoji per decorazione
- Feedback visivo su tutte le interazioni
- Messaggi di conferma per azioni distruttive

## Funzionalità Bonus (Opzionali)

- Drag & drop per riordinare task
- Notifiche per scadenze imminenti
- Temi chiari/scuri
- Sottotask o checklist interne
- Grafici per visualizzare statistiche