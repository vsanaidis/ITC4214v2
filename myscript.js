$(document).ready(function(){
    $('#carousel').carousel();
    $('#taskbtn').click(function(e){
        e.preventDefault();
        Addtable();
    });
    document.getElementById('toggler1').addEventListener('click', function() {
        showSidebar();
    });
    
    document.getElementById('detoggler').addEventListener('click', function() {
        hideSidebar();
    });
    $('#sortbyname').on('click', function() {
        sortTableByName();
    });
    function showSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }   
    function hideSidebar(){
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }

//my function that sorts the rows by the alphabetical order of the tasks the user inputs
    function sortTableByName() {
        var table = $('#table');
        var rows = table.find('tr').get();
        rows.shift(); 
        rows.sort(function(a, b) {
            var nameA = $(a).find('td:eq(0)').text().toUpperCase();
            var nameB = $(b).find('td:eq(0)').text().toUpperCase();
            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
        $.each(rows, function(index, row) {
            table.append(row);
        });
    }
    $('#sortbydate').on('click', function() {
        sortTableByDate();
    });
    //  my function that sorts the rows by the date the user inputs
    function sortTableByDate() {
        var table = $('#table');
        var rows = table.find('tr').get();
        rows.shift(); // Remove the header's  row from sort
        rows.sort(function(a, b) {
            var dateA = new Date($(a).find('td:eq(1)').text());
            var dateB = new Date($(b).find('td:eq(1)').text());
            return dateA - dateB;
        });
        $.each(rows, function(index, row) {
            table.append(row);
        });
    }

    const buttonContainer = document.getElementById('button_container');
    const checkbox = document.getElementById('check');;

   //adds the rows to the table as intented by the exercise
    function Addtable(){    
        var task = $('input[type="text"]').val();
        var dueto = $('input[type="date"]').val();
        var color = $('input[type="color"]').val();
        var deletebtn = $('<button class="btn btn-danger btn-sm me-2" id="deletebtn">Delete</button>');
        var tickbtn = $('<button class="btn btn-icon"><i class="bi bi-bookmark-check"></i><input type="checkbox" class="form-check-input d-none"></button>');
        // Check if all input fields are filled
        if(task && dueto && color){
            var newRow = $('<tr></tr>');//creates the new row
            newRow.append('<td>' + task + '</td>');//appends the elements to the row
            newRow.append('<td>' + dueto + '</td>');
            newRow.append('<td class="bi bi-exclamation-octagon-fill" style="color:' + color + ';">' + '</td>');

            var actionrow= $('<td></td>');//adds the action row with the delete and tick buttons
            actionrow.append(deletebtn);
            actionrow.append(tickbtn);
            newRow.append(actionrow);

            $('#table').append(newRow);

            $('input[type="text"]').val('');//clears the inputs so that the user can enter new inputs
            $('input[type="date"]').val('');
            $('input[type="color"]').val('');

            deletebtn.click(function() {//the function of delete button AKA it removes the row closest to it 
                $(this).closest('tr').remove();
            });
            tickbtn.click(function() {//check box function of the tick button
                var checkbox = $(this).find('input[type="checkbox"]');
                checkbox.prop('checked', !checkbox.prop('checked')).trigger('change');
            });
            
            tickbtn.find('input[type="checkbox"]').change(function() {// and here adds the green background and changes the icon
                if ($(this).is(':checked')) {
                    $(this).closest('td').css('background-color', '#248f24');
                    $(this).siblings('i').addClass('bi bi-bookmark-check-fill').removeClass('bi bi-bookmark-check'); // Change icon on check
                } else {
                    $(this).closest('td').css('background-color', '');
                    $(this).siblings('i').addClass('bi bi-bookmark-check').removeClass('bi bi-bookmark-check-fill'); // Revert icon on uncheck
                }
              
            });
            
           
           
        } else {
            // alerts the user to enter input data
        
            alert('Please fill in all fields before adding a task.');
        }

    }
   
    
});
