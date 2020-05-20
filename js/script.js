
let response, request

(async () => {
    await fetch("../data/entries.json").then(result => {return result.json()}).then(data => AppendData(data.items))
})();


const AppendData = (data) => {
    let filteredarr = [];
    document.querySelector(".videos").innerHTML = ""
    data.forEach(vid => {
        CreateElement(vid.category, vid["genre-v2"], vid.name, vid["recorded-at"], vid.thumbnail.url)
    });
    var search = document.querySelector(".search input");
    search.addEventListener("keyup", function(){
        var val = search.value
        document.querySelector(".videos").innerHTML = ""
        data.forEach(vid => {
            
            if(vid.name.toLowerCase().includes(val)){
                console.log(vid.name.toLowerCase())
                CreateElement(vid.category, vid["genre-v2"], vid.name, vid["recorded-at"], vid.thumbnail.url)
            }
            
        });
    })
    var genre = document.querySelectorAll(".g");
    genre.forEach(el => {
        el.addEventListener("click", function(){
            document.querySelector(".videos").innerHTML = ""
        filteredarr = []
        data.forEach(item => {
            if(item["genre-v2"] == el.innerHTML.toLowerCase()){
                filteredarr.push(item)
            }
        })
        filteredarr.forEach(vid => {
            CreateElement(vid.category, vid["genre-v2"], vid.name, vid["recorded-at"], vid.thumbnail.url)
        });
        })
    })
    var category = document.querySelectorAll(".dg")
    category.forEach(el => {
    el.addEventListener("click", function(){
        document.querySelector(".videos").innerHTML = ""
        filteredarr = []
        data.forEach(item => {
            if(item.category == el.innerHTML.toLowerCase()){
                filteredarr.push(item)
            }
        })
        
        console.log(filteredarr)
        filteredarr.forEach(vid => {
            CreateElement(vid.category, vid["genre-v2"], vid.name, vid["recorded-at"], vid.thumbnail.url)
        });
    })
    var clear = document.querySelector(".wissen")
    clear.addEventListener("click", function(){
        document.querySelector(".videos").innerHTML = ""
        data.forEach(vid => {
            CreateElement(vid.category, vid["genre-v2"], vid.name, vid["recorded-at"], vid.thumbnail.url)
        });
    })

})


    
};


const CreateElement = (category, genre, name, place, thumbnail) => {
    let video = {
        group: document.createElement("div"),
        head: document.createElement('div'),
        body: document.createElement('div'),
        items: {
            img: document.createElement("img"),
            at: document.createElement("p"),
            cat: document.createElement("p"),
            gen: document.createElement("p")

        },
        assemble() {
            this.items.img.src = thumbnail
            this.items.at.id = "place"
            this.items.at.innerHTML = name
            this.items.cat.className = "category"
            this.items.cat.innerHTML = category
            this.items.gen.className = "genrei"
            this.items.gen.innerHTML = genre
            this.head.className = "videohead"
            this.body.className = "videobody"
            this.group.className = "group"
            this.group.id = name
            this.group.addEventListener("click", function(){
                window.location.href = `http://127.0.0.1:5500/html/detail.html?id=${name}`
            })
            this.head.append(this.items.img)
            this.body.append(this.items.at, this.items.cat,this.items.gen)
            this.group.append(this.head, this.body)
            
        }
    }

    video.assemble();
    
    document.querySelector(".videos").append(video.group)
}



















class Video{
    constructor(category, genre, name, place){
        this.category = category,
        this.genre = genre,
        this.name = name,
        this.place = place
    }
}


