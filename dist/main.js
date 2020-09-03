const renderer = new Renderer

$("#search-btn").on("click", function () {
    const val = $("#movie-input").val()
    console.log("hey")
    $.get(`/movies/${val}`, (title) => {
        console.log(title)
        renderer.render(title)
    })
})

$(".container").on("click","#img",function(){
    const getRating = $(this).closest("#movie").data().id
    $.ajax({
        method: "GET",
        url: `http://www.omdbapi.com/?apikey=a2e2ca53&i=${getRating}`,
        success: (data) => {
            const rating = data.Ratings
            for(let r of rating){
                $(this).append(`<li id="ratingLi">${r.Value}</li>`)
            }
        }
    })
})