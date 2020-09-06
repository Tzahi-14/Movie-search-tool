class Renderer {
    constructor() {

    }
    render(data1) {
        $(".container").empty()
        const source = $("#movies-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({ data1 })
        $(".container").append(newHtml)
    }
}

