<!-- Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.-->

MILESTONE 1
Step-1: costruire div container;
Step-2: costruire div container img dove dentro andrà l'elemento img;
Step-3: dare stili agli elementi cosi da avere una base su cui lavorare;

<!-- Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript. -->
MILESTONE 2:
Step-1: creare un array con le immagini al suo interno;
Step-2: prendo element html e la inserisco in delle variabili (slider, up e down);
Step-3: inizializzo una variabile che comprenderà i numeri di click per scorrere le immagini
Step-4: aggiungo gli eventi click sulle row up/down che andranno a togliere/aggiungere la classe show per far apparire le immagini mentre clicchiamo sulle frecce;
Step-5: apro un ciclo for in cui inserirò una stringa che comprenderà l'aggiunta di un elemento con la rispettiva img per 5 volte.


<!-- Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. -->
MILESTONE 3:
Step-1: creo addeventlistener che cambierà l'immagine (al click dell'utente);

BONUS 1:
Steps prev: altrimenti se dai un click da posizione 0, mettiti in ultima posizione;
Steps prev: altrimenti se dai un click da posizione 4 (ultima), mettiti in posizione 0;

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
