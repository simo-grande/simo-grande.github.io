let data = [];
/**Fetch data from the given API */
async function getData() {
    const result = await fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/list")
    data = await result.json()
    displayBooks(data)
}
/**Display the book list data */
function displayBooks(data) {
    let table = document.getElementById("bookList");
    table.innerHTML = '';
    for (i = 0; i < data.length; i++) {
        let row = ` 
                            <td>${i + 1}</td>
                            <td>${data[i].isbn}</td>
                            <td>${data[i].title}</td>
                            <td>${data[i].overdueFee}</td>
                            <td>${data[i].publisher}</td>
                            <td>${data[i].datePublished}</td>
                            <td><a href ="#" data-toggle="tooltip" data-placement="bottom" onclick="editBook(${data[i].bookId},${i})">
                              Edit</a></td>
                            <td><a href ="#" data-toggle="tooltip" data-placement="bottom" onclick="deleteBook(${data[i].bookId},${i})">
                              Delete</a></td>`
        table.innerHTML += row;
    }
}

getData()
/**Add book function for adding a new book */
function addBook() {
    const bookTitle = document.getElementById('title').value;
    const isbn = document.getElementById('isbn').value;
    const fee = document.getElementById('fee').value;
    const publisher = document.getElementById('Publisher').value;
    const datePublished = document.getElementById('date').value;
    if (bookTitle === "" || isbn === "" || fee === "" || publisher === "" || datePublished === "") {
        reject();
    } else {
        fetch("https://elibraryrestapi.herokuapp.com/elibrary/api/book/add", {
            method: "POST",
            headers: {
                'accept': 'application/json,text/plain,*/*',
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                isbn: isbn,
                title: bookTitle,
                overdueFee: fee,
                publisher: publisher,
                datePublished: datePublished
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });
        success()
        refresh()
    }
    /**Message for successful addition of a new Book data */
    function success() {
        document.getElementById("display").innerHTML = `<div class="row">
            <div class="col">
                <div class="alert alert-success" role="alert">
                   Book Successfully Added !
                </div>
            </div>
        </div>`

    }
    /**Denial message for refusal addition of a new Book data */
    function reject() {
        document.getElementById("display").innerHTML = `<div class="row">
            <div class="col">
                <div class="alert alert-danger" role="alert">
                    Fill all the required(*) fields first !
                </div>
            </div>
        </div>`

    }
}
/**Clear function for reset button */
function refresh() {
    document.getElementById("newBook").reset();
}
/**Deletion of a book data from List */
function deleteBook(deleteId, index) {

    let newDisplay = confirm("Are you sure you want to delete the selected record !")
    if (newDisplay) {
        data.splice(index, 1);
        displayBooks(data);
        fetch(`https://elibraryrestapi.herokuapp.com/elibrary/api/book/delete/${deleteId}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(newData => {
                console.log(newData)
            })
        successdel()
    }
}
/**Message for successful Deletion from Book List */
function successdel() {
    document.getElementById("alerto").innerHTML = `<div class="row">
       <div class="col">
            <div class="alert alert-success" role="alert">
               Book Successfully Deleted !
            </div>
            </div>
            </div>
      `
    setTimeout(() => {
        window.location.href = "./books.html";
    }, 1000)
}
/**Message for successful update of a Book record */
function successUpdate() {
    document.getElementById("alerto").innerHTML = `<div class="row">
       <div class="col">
            <div class="alert alert-success" role="alert">
               Book Successfully Updated !
            </div>
            </div>
            </div>
      `
    setTimeout(() => {
        window.location.href = "./books.html";
    }, 1000)
}
/**Update function for editing a book record */
function editBook(deleteId, index) {

    // window.location.href = "./editForm.html";
    let editId = deleteId;
    document.querySelector(".container").innerHTML = editPage;
    document.querySelector("#isbn").value = data[index].isbn;
    document.querySelector("#title").value = data[index].title;
    document.querySelector("#fee").value = data[index].overdueFee;
    document.querySelector("#Publisher").value = data[index].publisher;
    document.querySelector("#date").value = data[index].datePublished;
    document.querySelector("#update").onclick = async function update() {
        const update_url = `https://elibraryrestapi.herokuapp.com/elibrary/api/book/update/${editId}`;

        const result = await fetch(update_url, {
            method: 'PUT',
            body: JSON.stringify({
                isbn: document.querySelector("#isbn").value,
                title: document.querySelector("#title").value,
                overdueFee: document.querySelector("#fee").value,
                publisher: document.querySelector("#Publisher").value,
                datePublished: document.querySelector("#date").value
            }),
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        });
        const restData = await result.json();
        successUpdate()
    }
}
const editPage = `
<div class="container pt-3 my-3 border" id="display">

<h2 style="color:dodgerblue">
    Edit Book Form
</h2>

<span id="alertMessageBox" style="display:none;float:none;margin-left:8em;"
    class="alert alert-dismissible alert-success">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Book sucessfully updated !</strong>
</span>

<h6>
    Note: Form fields marked with asterisk(*) are required.
</h6><br>
<form id="alerto">
    
<fieldset>
        <input id="bookid" type="hidden" name="bookId" value="" />
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                    <label for="usr" style="font-weight: 700;">*Book Title:</label>
                    <input type="text" class="form-control" id="title" value="" required autofocus>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <label for="usr" style="font-weight: 700;">*ISBN:</label>
                <input type="text" class="form-control" id="isbn">
            </div>
            <div class="col">
                <label for="usr" style="font-weight: 700;">*Overdue Fee per day:</label>
                <input type="text" class="form-control" placeholder="0.00" id="fee">
                <small class="form-text text-muted"> Enter a valid decimal amount in dollars and cents: no
                    comma(e.g. 1.99)</small>
            </div>
        </div><br>
        <div class="row">
            <div class="col">
                <label for="usr" style="font-weight: 700;">*Publisher:</label>
                <input type="text" class="form-control" id="Publisher">
            </div>
            <div class="col">
                <label for="usr" style="font-weight: 700;">*Date Published:</label>
                <input type="date" class="form-control" id="date">
            </div>
        </div>
        <br>
        <button type="button" class="btn btn-link" style="float: right;" id="update">Save
            Book</button>&nbsp;&nbsp;
        <input type="reset" class="btn btn-link" style="float: right;" onclick="refresh()" value="Reset">


        </fieldset>
</form>
</div>`



