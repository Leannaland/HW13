$(function() {
    $(".change-yummy").on("click", function(event) {
      var id = $(this).data("id");
      var newyummy = $(this).data("newyummy");
  
      var newyummyState = {
        yummy: newyummy
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newyummyState
      }).then(
        function() {
          console.log("changed yummy to", newyummy);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#ca").val().trim(),
        yummy: $("[name=yummy]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burgers");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burgers").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burgers", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  