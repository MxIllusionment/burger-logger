/* Click event for all Devour buttons to update burger */
$(".devour-btn").click(function (e) {
  e.preventDefault();

  const id = $(this).attr("data-id");

  $.ajax(
    {
      url: `/api/burgers/${id}`,
      method: "PUT",
      data: { devoured: 1 }
    })
    .then(response => location.reload());
});

/* Click event for submitting a new burger */
$(".submit-btn").click((e) => {
  e.preventDefault();

  const name = $("#burger-name").val().trim();

  $.ajax(
    {
      url: "/api/burgers",
      method: "POST",
      data: { burger_name: name }
    })
    .then(response => location.reload());
});
