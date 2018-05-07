// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
      
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burgerName").val().trim()
        
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".burgerList").on("click", function(event) {
      
      
      var id = $(this).data("id");
      alert(id);
      console.log("id for updating"+id);
      // Send the POST request.
      $.ajax({
        type: "PUT",
        url: "/api/burgers/" + id
      }).then(
        function() {
          console.log("updated");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
  });
  