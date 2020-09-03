class Renderer{
    constructor(){

    }
    render (data){
        $(".container").empty()
        const source = $("#movies-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({ data })
        $(".container").append(newHtml)
    }
}

