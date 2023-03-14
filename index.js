const Music = [{id:1,
    Name:"Atho antha Paravai",
    song:"./Songs/Adho antha paravai.mp3",
    img:"./images/MGR.avif"
},
{
    id:2,
    Name:"Naan Asasithal",
    song:"./Songs/Pattum Nanne.mp3",
    img:"./images/Sivaji.jpg"
},
{
    id:3,
    Name:"Senorita",
    song:"./Songs/Senorita.mp3",
    img:"./images/senorita.jpeg"
},
{
    id:4,
    Name:"Love me",
    song:"./Songs/Love me.mp3",
    img:"./images/Love me.jpeg"
},
{
    id:5,
    Name:"Chilla Chilla",
    song:"./Songs/Chilla.mp3",
    img:"./images/Chilla.jpeg"
},
{
    id:6,
    Name:"Usumallarese",
    song:"./Songs/Usumal.mp3",
    img:"./images/usumal.jpg"
},
{
    id:7,
    Name:"Ranjithame",
    song:"Songs/RAnjithame.mp3",
    img:"./images/Ranjithame.jpeg"
},
{
    id:8,
    Name:"Ooru voram",
    song:"./Songs/Ooru voram.mp3",
    img:"./images/paruthu veeran.jpg"
},
{
    id:9,
    Name:"Ghili kokorako",
    song:"./Songs/Ghili.mp3",
    img:"./images/Ghili.jpg"
},
{
    id:10,
    Name:"Pala palakura pagalani",
    song:"./Songs/Palapalakura.mp3",
    img:"../images/palapakura.jpeg"
},
{   
    id:11,
    Name:"Open gangam style",
    song:"./Songs/Gangam style.mp3",
    img:"./images/gangam style.png"
},
{
    id:12,
    Name:"Thapellam Thapeillai",
    song:"./Songs/Naan.mp3",
    img:"./images/Naan.jpg"
},
{
    id:13,
    Name:"Kadhal Yannai",
    song:"./Songs/Anniyan.mp3",
    img:"./images/Anniyan.jpg"
},
{
    id:14,
    Name:"Bimbiliki Pilapi",
    song:"./Songs/Sk.mp3",
    img:"./images/Sk.avif"
},
{
    id:15,
    Name:"Why this Kolaveri",
    song:"./Songs/3.mp3",
    img:"./images/Whu_this_kolaveri_di.jpeg"
}
]

count=0

//targeting elements
const container = document.querySelector(".container")
const NameOfSong = document.querySelector(".name")
const Song = document.querySelector("audio")
const forward = document.querySelector(".fa-forward-step")
const previous = document.querySelector(".fa-backward-step")
const img = document.querySelector(".image")
const shuffle = document.querySelector(".fa-shuffle")
const musicPlayer = document.querySelector(".player")
const start = document.querySelector(".start")
const home = document.querySelector(".fa-house")
// console.log(shuffle)

musicPlayer.addEventListener("click",(e)=>{
    container.style.display ="block"
    musicPlayer.style.display="none"
    start.style.display="none"
})
window.addEventListener("click",()=>{
    playNext()
})

NameOfSong.innerText = Music[0].Name;
Song.src = Music[0].song;
img.src = Music[0].img

forward.addEventListener("click",(e)=>{
    count++;
    if(count == Music.length){
        count = 0
    }
    next(count)
})
function next(count){
   NameOfSong.innerText = Music[count].Name;
   Song.src = Music[count].song;
   img.src= Music[count].img
}
previous.addEventListener("click",()=>{
    count --

    if(count == -1){
        count = Music.length-1
    }
    NameOfSong.innerText = Music[count].Name;
    Song.src = Music[count].song;
    img.src=Music[count].img;
})


shuffle.addEventListener("click",()=>{
    let random = Math.floor(Math.random()*Music.length)
    NameOfSong.innerText = Music[random].Name;
    Song.src = Music[random].song;
    img.src= Music[random].img
})

function playNext(){
    setInterval(()=>{
        if(Song.currentTime == Song.duration){
            count++;
            next(count)
        }
    },1000)
}

home.addEventListener("click",()=>{
    Song.pause()
    container.style.display ="none"
    musicPlayer.style.display="block"
    start.style.display="block"
})