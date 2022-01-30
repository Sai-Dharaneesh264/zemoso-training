var res = [];

const onStart = async () => {   
    res = await fetch('./gallery.json').then((response) => {
        return response.json();
    }).then((response) => {
        return response
    })
    console.log("res = ", res);
    getAdminImages();
    const add = document.querySelector(".adder");
    add.addEventListener("click", () => {
        document.querySelector(".form1").style.display = "flex";
        // document.querySelector(".empty").style.display = "block";
        add.style.display = "none";
        document.querySelector('#btn2').style.display = "none";
        document.querySelector('#btn1').style.display = "block"
    })
    document.querySelector(".btn1").addEventListener("click", addImage);
  
    console.log(res);
}

const close = () => {
    document.querySelector(".form1").style.display = "none";
}

const getAdminImages = () => {

    // const imgs = JSON.parse(localStorage.getItem("images"));
    const gallery = document.querySelector(".gallery1");
    // const img = document.createElement("img");
    // const a = gallery.childElementCount;
    // alert(a);
    // add();
    // console.log("length = ", imgs.length);

        for (let i = 0; i < res.length; i++) {

            const card = document.createElement("div");
            card.classList.add("image");
            card.setAttribute("id", "i" + i);
            const image = document.createElement("img");
            const header = document.createElement("h4")
            const desc = document.createElement("p");
            image.src = res[i].url;
            const text = document.createTextNode(res[i].name)
            const des = document.createTextNode(res[i].description);
            header.appendChild(text);
            desc.appendChild(des);
            card.appendChild(image);
            card.appendChild(header);
            card.appendChild(desc);    
            const btn1 = document.createElement("button");
            const text1 = document.createTextNode("Edit");
            btn1.appendChild(text1);
            btn1.setAttribute("id", "e" + i);
            const btn2 = document.createElement("button");
            const text2 = document.createTextNode("Delete");
            btn2.setAttribute("id", "d" + i);
            btn2.appendChild(text2);
            const buttons = document.createElement("div");
            buttons.classList.add("buttons");
            buttons.appendChild(btn1);
            btn1.classList.add('edit-page');
            btn1.setAttribute("onclick", "editImage(" + i + ")")
            // btn1.addEventListener('click', editImage);
            buttons.appendChild(btn2);
            btn2.classList.add("delete");
            btn2.setAttribute('onclick', 'deleteImage(' + i + ')')
            // btn2.addEventListener('click', deleteImage);
            card.appendChild(buttons);
            gallery.appendChild(card);   
            // addEvent(i);
        }

}

const addImage = () => {
        document.getElementById('btn2').style.display = "none";
        document.getElementById('btn1').style.display = "block";
        const name = document.getElementById("name").value;
        const url = document.getElementById("url").value;
        const desc = document.getElementById("desc").value;
        console.log("details = ", name, url, desc);
        const i = {
            "name": name,
            "url": url,
            "description": desc,
            "date": new Date()
        }
        res.push(i);
        console.log("res final = ", res);
        const gallery = document.querySelector(".gallery1");
        gallery.innerHTML = "";
        getAdminImages();
        document.querySelector(".adder").style.display = "flex";
        document.querySelector(".form1").style.display = "none";

}

const editImage = (id) => {
    document.querySelector('#btn2').style.display = "block"
    document.querySelector('#btn1').style.display = "none"
    document.querySelector('.add-image').style.display = "none";
    document.querySelector(".form1").style.display = "flex"
    console.log("name = ", res[id].name);
    document.querySelector("#name").value = res[id].name;
    document.querySelector("#url").value = res[id].url;
    document.querySelector('#desc').value = res[id].description;

    document.querySelector(".btn2").addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const url = document.getElementById("url").value;
        const desc = document.getElementById("desc").value;
        console.log("details = ", name, url, desc);
        const i = {
            "name": name,
            "url": url,
            "description": desc,
            "date": new Date()
        }
        res[id] = i;
        console.log("res final = ", res);
        const gallery = document.querySelector(".gallery1");
        gallery.innerHTML = "";
        document.querySelector(".adder").style.display = "flex";
        document.querySelector(".form1").style.display = "none";
        getAdminImages();
        
    })
}


const deleteImage = (id) => {
    res = res.filter(item => item.name !== res[id].name);
    const gallery = document.querySelector(".gallery1");
    gallery.innerHTML = "";
    getAdminImages();
}