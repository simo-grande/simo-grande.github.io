/* eslint-disable*/
let library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
];
function addBook() {
    let obj = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        libraryID: document.getElementById("lid").value

    }
    library.push(obj);
}


function showTitle() {
    let result = library.map(item => {
        return item.title;
    })
    document.getElementById("textarea").innerHTML = result.join("\n");
}

function showAuthor() {
    let result = library.map(item => {
        return item.author;
    })
    document.getElementById("textarea").innerHTML = result.join("\n");
}

function showId() {
    let result =library.map(item=>{
        return item.libraryID;
    })
    document.getElementById("textarea").innerHTML=result.join("\n");
    }


