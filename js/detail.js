function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

let ID = getUrlVars()["id"]
ID = decodeURI(ID)
let VIDEO;
console.log(ID);

(async () => {
    await fetch("../data/entries.json").then(result => {return result.json()}).then(data => AppendData(data.items))
})();


const AppendData = (data) => {
    data.forEach(vid => {
        CreateElement(vid.category, vid["genre-v2"], vid.name, vid["recorded-at"], vid.thumbnail.url)
    });
    Search(data, ID)
    console.log(VIDEO)
    let video = {
        iframe: document.createElement("div"),
        head: document.createElement('div'),
        body: document.createElement('div'),
        assemble() {
            this.iframe.className = "iframe"
            this.body.className = "description"
            this.body.innerHTML = `<hr>${VIDEO["video-notes"]}`
            VIDEO["link-to-video"].metadata.html.innerHTML=""
            this.iframe.innerHTML = VIDEO["link-to-video"].metadata.html
        }
    }
    video.assemble()
    document.querySelector(".video").append(video.iframe)
    document.querySelector(".video").append(video.body)
};

function Search(arr, ID){
    
    arr.forEach(el => {
        if(el.name == ID){ 
            VIDEO = el
        }
        
    });
}

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
                window.location.href = `html/detail.html?id=${name}`
            })
            this.head.append(this.items.img)
            this.body.append(this.items.at, this.items.cat,this.items.gen)
            this.group.append(this.head, this.body)
            
        }
    }

    video.assemble();
    
    document.querySelector(".videos").append(video.group)
}
