// window.onload = begin();

// function begin() {

//     Checkstorage();
// }


// var newMessage;
// var newDate;
// var Notes = [];
// var allTheNotes = document.getElementById("theNotes")
// var n = 0;





// function PrintVal() {

//     var Now = new Date()

//     var newMessage = document.getElementById("theText").value;

//     var newDate = document.getElementById("theDate").value;

//     var Current = Now.getTime();

//     if (newMessage != '') {

//         n++
//         var newNote = {

//             theText: newMessage,
//             theDate: newDate,
//             id: Current


//         };
//         Notes.push(newNote);

//         // alert("added new note: " + newNote.theText + " " + newNote.theDate);
//         // for (let i = 0; i < Notes.length; i++) {

//         //     console.log(Notes[i].theText + " " + Notes[i].theDate + " " + Notes[i].id);
//         // }



//         allTheNotes.innerHTML +=
//             `
             
//             <div class="note Fader" id=${newNote.id}>
//             <div class="col-sm-4">
//                 <span id=${"del" + n} class="glyphicon glyphicon-trash delete"></span>
//             <p class="notetext">${newNote.theText}</p>
//            <span class="notedate">${newNote.theDate}</span>
//             </div>
//             </div>
            
//              `

//             ;

//         Clear()

//     } else {

//         alert("please enter Task and Date.")

//     }
//     save()

//     $(".delete").click(function () {

//         deleteNote(this);

//     });

// }

// function save() {

//     localStorage.setItem("Note.", JSON.stringify(Notes));
// }


// function Clear() {

//     document.getElementById("theText").value = ""

//     document.getElementById("theDate").value = DateTime

// }

// function Checkstorage() {

//     var getNotes = window.localStorage.getItem("Note.")

//     if (getNotes) {

//         Notes = JSON.parse(localStorage.getItem("Note."))

//         Displayfromstorage()
//     }

// }

// function Displayfromstorage() {

//     for (let i = 0; i < Notes.length; i++) {

//         var newMessage = document.getElementById("theText").value;

//         var newDate = document.getElementById("theDate").value;

//         allTheNotes.innerHTML +=
//             `
            
//             <div class="note Fader" id=${Notes[i].id}>
//             <div class="col-sm-4">
//                 <span id=${"del" + [i]} class="glyphicon glyphicon-trash delete"></span>
//             <p class="notetext">${Notes[i].theText}</p>
//            <span class="notedate">${Notes[i].theDate}</span>
//             </div>
            
//              `;

//     }

//     $(".delete").click(function () {

//         deleteNote(this);

//     });

// }


// function deleteNote(elm) {
//     $(elm).parent().parent().hide(2000);

//     for (let i = 0; i < Notes.length; i++) {

//         var notetodelete = $(elm).parent().parent().attr("id")

//         if (notetodelete == Notes[i].id) {

//             //found the obj to remove
//             Notes.splice(i, 1);

//             save();

//         }
//     }

// }

// let DateTime = new Date().toISOString().substr(0, 10);

// document.querySelector("#theDate").value = DateTime;