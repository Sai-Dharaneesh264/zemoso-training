const start = () => {
    console.log("start");
    const button = document.querySelector("button");
    button.addEventListener('click', evaluate);
    // document.querySelector("p").children[1].innerHTML = "chandu";
}


const evaluate = async () => {
    console.log("entered the evaluate function");
    const name = document.querySelector("input").value;
    console.log(name);
    const p = document.querySelector("p")
    await fetch("./input.json").then((res) => {
        return res.json();
    }).then((res) => {
       for (let i = 0; i < res.length; i++) {
           if (name === res[i].name) {
               p.innerHTML = res[i].email;
               return;
           }
       }
       p.innerHTML = "User Not Found";
    })

}