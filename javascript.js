setInterval(() => {
    var today = moment();
    $("#1a").text(today.format("[Welcome! Today is] MMM Do, YYYY hh:mm:ss"));
    
}, 1000);


var projectFormEl = $("#project-form");

function handleFormSubmit(event) {
    event.preventDefault();
  
    // select form element by its `name` attribute and get its value
    var projectFormEl = $('input[name="project-name"]').val();
    var projectFormEl = $('input[type="project-type"]').val();
    var projectFormEl = $('input[wage="hr-wage"]').val();
    var projectFormEl = $('input[due="due-date"]').val();
  
    // if there's nothing in the form entered, don't print to the page
    if (!projectFormEl) {
      console.log('No item filled out in form!');
      return;
    }
  
    // print to the page
    projectFormEl.append('<li>' + projectFormEl + '</li>');
  
    // clear the form input element
    $('input[name="project-form"]').val('');
  }
  
  // Create a submit event listener on the form element
  projectFormEl.on('submit', handleFormSubmit);

