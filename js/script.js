new Vue({
    el: '#app',
    data: {
        title: 'ToDoList',
        todo: [
            {
                text: 'Fai la spesa',
                done: true
            },
            {
                text: 'Acquista libri',
                done: true
            },
            {
                text: 'Manicure',
                done: false
            },
            {
                text: 'Aperitivo in centro',
                done: false
            },
        ],
        newToDo: {
            text: '',     // newTodo text si popola tramite input utente
            done: false
        }
    },
    methods: {
        addItem: function () {
            if (this.newToDo.text !== '') {     // if evita di stampare in lista un elemento vuoto -> stampa solo se il text in input è diverso da ''
                this.todo.push(this.newToDo)    // l'add item è un elemento che al this.todo -> pusha l'oggetto newToDo (text vuoto '' + done: false)
                this.newToDo = {text:'', done: false}     // resetto la stringa input dopo aver pushato il newToDo e la riporto allo stato iniziale dichiarato nell'oggetto 'newToDo'
            }
        },
        removeItem: function (index) {
            this.todo.splice(index,1)     // the splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place -> 1 indica che rimuove 1 solo elemento in quel dato index -> 
        },
        doneOnClick: function (index) {
            if (this.todo[index].done) {
                this.todo[index].done = false;
            } else {
                this.todo[index].done = true;
            }
            // al click su span : se il done del corrente index su todo è true -> passa a false | altrimenti, se è false -> passa a true
            // alternativa più breve -> this.todo[index].done = ! this.todo[index].done // è il contrario di sé stesso
        }, 
    }
}); 



// Descrizione:
// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all’interno di una lista, un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)