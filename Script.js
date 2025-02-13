function MenuShow() {
    let MenuAPR = document.querySelector(".MenuAP");
    let MenuIcon = document.querySelector(".MenuIcon");

    if (MenuAPR.classList.contains("open")) {
        MenuAPR.classList.remove("open");
        MenuIcon.src = "./Icon-Menu.svg";
        setTimeout(() => {
            MenuAPR.style.display = "none";
        }, 500);
    } else {
        MenuAPR.style.display = "block";
        setTimeout(() => {
            MenuAPR.classList.add("open");
        },10);
        MenuIcon.src = "./Menu-Icon-x.svg";
    }
}



let MySeach = document.querySelector(".PesquisaCont")
let inputBox = MySeach.querySelector("input")
let Redirect = MySeach.querySelector("a")
let List = MySeach.querySelector("list")
let IconSeach = document.querySelector(".IconSeach")
let link 

inputBox.onkeyup = (e)=>{
    let UseData = e.target.value; 
    let ArrayList = []; 

    if(e.key ==="Enter"){
       if(UseData) {
        window.open(href= `https://www.google.com/search?q=${UseData}`, "_blank")
       }
    }

    if(UseData){
        IconSeach.onclick = ()=>{
            link = `https://www.google.com/search?q=${UseData}`
            Redirect.setAttribute("href", link)
            Redirect.click()
        }

        ArrayList = sugestoes.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(UseData.toLocaleLowerCase())
        })

        ArrayList= ArrayList.map((data)=>{
            return data = `<li>${data}</li>`
        })

        MySeach.classList.add("active")
        }
       
}
