const renderer = new Renderer()

$("#search-btn").on("click", function () {
    const val = $("#movie-input").val()
    console.log("hey")
    $.get(`/movies/${val}`, (title) => {
        console.log(title)
        renderer.render(title)
        // console.log(renderer.render(title))
    })
})

$(".container").on("click","#img",function(){
    const getRating = $(this).closest("#movie").data().id
    $.ajax({
        method: "GET",
        url: `http://www.omdbapi.com/?apikey=a2e2ca53&i=${getRating}`,
        success: (data2) => {
            const rating = data2.Ratings
            if(getRating){
                $(this).parent().find('.rating').empty()
                for(let r of rating){
                    $(this).parent().find('.rating').append(`<li id="rat">${r.Value}</li>`)
                }
            }
        }
    })
})