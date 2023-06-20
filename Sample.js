// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Get form values
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var food = document.getElementById("food").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    // Create a new row in the table
    var table = document.getElementById("dataTable");
    var newRow = table.insertRow();
    var fnameCell = newRow.insertCell();
    var lnameCell = newRow.insertCell();
    var foodCell = newRow.insertCell();
    var genderCell = newRow.insertCell();
    var addressCell = newRow.insertCell();
    var pincodeCell = newRow.insertCell();
    var stateCell = newRow.insertCell();
    var countryCell = newRow.insertCell();    
    var actionsCell = newRow.insertCell();

    // Set the cell values
    fnameCell.innerHTML = fname;
    lnameCell.innerHTML = lname;
    foodCell.innerHTML = food;
    genderCell.innerHTML = gender;
    addressCell.innerHTML = address;
    pincodeCell.innerHTML = pincode;
    stateCell.innerHTML = state;
    countryCell.innerHTML = country;
    actionsCell.innerHTML =
        '<button  class="btn-primary btn btnSpacing" onclick="editRow(this)">Edit</button>' +
        
        '<button  class="btn-primary btn btnSpacing" onclick="deleteRow(this)">Delete</button>';

    // Clear the form fields
    
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("food").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";


}

// Function to delete a row from the table
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    var nameVal = row.cells[0].innerHTML;
    if(confirm(`Are you going to delete ${nameVal} record ? `)){
        var table = document.getElementById("dataTable");
        table.deleteRow(row.rowIndex);
    }
    
}

// Function to edit a row in the table
function editRow(button) {

   
    var row = button.parentNode.parentNode;
    var fnamecell = row.cells[0].innerHTML;
    var lnameCell = row.cells[1].innerHTML;
    var foodCell = row.cells[2].innerHTML;
    var genderCell = row.cells[3].innerHTML;
    var addressCell = row.cells[4].innerHTML;
    var pincodeCell = row.cells[5].innerHTML;
    var stateCell = row.cells[6].innerHTML;
    var countryCell = row.cells[7].innerHTML;

    if(confirm(`Are you going to delete ${fname} record ? `)){
    // Set the form fields with the row values
    // document.getElementById("name").value = name;
    // document.getElementById("email").value = email;

    document.getElementById("fname").value = fnamecell;
    document.getElementById("lname").value = lnameCell;
    document.getElementById("food").value = foodCell;
    document.getElementById("gender").value = genderCell;
    document.getElementById("address").value = addressCell;
    document.getElementById("pincode").value = pincodeCell;
    document.getElementById("state").value = stateCell;
    document.getElementById("country").value = countryCell;




    var row = button.parentNode.parentNode;
    var table = document.getElementById("dataTable");
    table.deleteRow(row.rowIndex);
    }
  
}

// Add event listener to the form
var form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);