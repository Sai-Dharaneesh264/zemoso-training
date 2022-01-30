
const start = () => {
    getItems();
    getTables();
}

const searchTables = (e) => {
    console.log("input id = " + e.target.value);
    const table = JSON.parse(localStorage.getItem("tables"));
    const tables = document.getElementById("tables");
    while (tables.firstChild) {
        tables.removeChild(tables.lastChild);
    }
    if (e.target.value.length === 0) {
        getTables();
    }
    for (let i = 0; i < table.length; i++) {
        if (e.target.value === table[i].name) {
            console.log("key = " + table[i].name);
            const button = document.createElement("button");
            button.setAttribute("ondragover", "dragover(event)");
            button.classList.add('tab');
            const id = "T" + (i + 1);
            console.log("id1 = " + id);
            button.setAttribute("id", table[i].name)
            console.log("second stage");
            button.setAttribute("ondrop", "drop(event)");
            console.log("second stage");
            button.setAttribute("onclick", "payment(" + i + ")")
            const h4 = document.createElement("h4");
            h4.classList.add("number");
            h4.innerText = table[i].name
            const p = document.createElement("p");
            p.classList.add('details');
            p.innerText = "Rs " + table[i].price + " | Total Items: " + table[i].orders.length;
            button.appendChild(h4);
            button.appendChild(p);
            tables.appendChild(button);
            console.log(button);
        }
    }

}
const getTables = () => {
  
    const table = JSON.parse(localStorage.getItem("tables"));

    for (let i = 0; i < table.length; i++) {
        console.log("key = " + table[i].name);
        const button = document.createElement("button");
        button.setAttribute("ondragover", "dragover(event)");
        button.classList.add('tab');
        const id = "T" + (i + 1);
        console.log("id1 = " + id);
        button.setAttribute("id", table[i].name)
        console.log("second stage");
        button.setAttribute("ondrop", "drop(event)");
        console.log("second stage");
        button.setAttribute('ondragleave', "dragleave(event)")
        button.setAttribute("onclick", "payment(" + i + ")")
        const h4 = document.createElement("h4");
        h4.classList.add("number");
        h4.innerText = table[i].name
        const p = document.createElement("p");
        p.classList.add('details');
        p.innerText = "Rs " + table[i].price + " | Total Items: " + table[i].orders.length;
        button.appendChild(h4);
        button.appendChild(p);
        const tables = document.getElementById("tables");
        tables.appendChild(button);
        console.log(button);
    }
}

const searchItems = (e) => {
    const data = JSON.parse(localStorage.getItem("items"));
    const items = document.getElementById("items");
    while (items.firstChild) {
        items.removeChild(items.lastChild);
    }
    const value = e.target.value.toLowerCase();
    if (value.length === 0) {
        getItems();
    }
    for (let i = 0; i < data.length; i++) {
        const name = data[i].name.toLowerCase();
        const course = data[i].course.toLowerCase();
        if (value == name || value == course) {
            const button = document.createElement("button");
            button.setAttribute("draggable", "true");
            button.classList.add('item');
            button.setAttribute("id", "item" + (i + 1))
            button.setAttribute("ondragstart", "dragstart(event)");
            const h3 = document.createElement("h3");
            h3.innerText = data[i].name;
            const p = document.createElement("p");
            const span1 = document.createElement("span");
            span1.innerText = "Rs ";
            p.appendChild(span1);
            const span2 = document.createElement("span");
            span2.innerText = data[i].price;
            p.appendChild(span2);
            button.appendChild(h3);
            button.appendChild(p);
            items.appendChild(button);
        }
    }
}



const getItems = () => {
    const data = JSON.parse(localStorage.getItem("items"));
    for (let i = 0; i < data.length; i++) {
        const button = document.createElement("button");
        button.setAttribute("draggable", "true");
        button.classList.add('item');
        button.setAttribute("id", "item" + (i + 1))
        button.setAttribute("ondragstart", "dragstart(event)");
        const h3 = document.createElement("h3");
        h3.innerText = data[i].name;
        const p = document.createElement("p");
        const span1 = document.createElement("span");
        span1.innerText = "Rs ";
        p.appendChild(span1);
        const span2 = document.createElement("span");
        span2.innerText = data[i].price;
        p.appendChild(span2);
        button.appendChild(h3);
        button.appendChild(p);
        const items = document.getElementById("items");
        items.appendChild(button);
    }
}

const dragstart = (e) => {
    const draggableElement = document.querySelector("#" + e.target.id);
    e.dataTransfer.setData("text/plain", draggableElement.id);
}

const dragleave = (e) => {
    console.log(e.target.id);
    const element = document.getElementById(e.target.id);
    element.style.border = "none";
    element.style.borderBottom = "3px solid red";
}

const dragover = (e) => {
    e.preventDefault();
    e.target.classList.add("dropZone--over");
    console.log(e.target.id);
    const element = document.getElementById(e.target.id);
    element.style.border = "1px solid black";
}

const drop = (e) => {
    e.preventDefault();

    console.log("id10 = " + e.target.id);
    const element = document.getElementById(e.target.id)
        element.style.border = "none"
        element.style.borderBottom = "1px solid black";
    const output = e.dataTransfer.getData("text/plain")
    const dropElement = document.getElementById(output);
    const t = dropElement.children;
    const name = t[0].textContent;
    const price = Number(t[1].lastChild.innerText);
    console.log(name, price);
    const tables = JSON.parse(localStorage.getItem("tables"));
    console.log("solution = " + e.target.id);
    let i;
    for (i = 0; i < tables.length; i++) {
        if (e.target.id === tables[i].name) {
            break;
        }
    }
    console.log("name = " + name);
    tables[i].orders.push({"item": name, "price": price, "quantity": 0})
    localStorage.setItem("tables", JSON.stringify(tables));
    payment(i);
}

const payment = (id) => {

    console.log("result = " + id);
    document.querySelector(".container").style.opacity = "0.2";
    const bill = document.querySelector(".bill");
    bill.style.display = "block";
    bill.style.zIndex = "1000";
    const tables = JSON.parse(localStorage.getItem("tables"));
    const text = tables[id].name + " | Order Details"; 
    document.getElementById("table-title").innerText = text;
    const item = tables[id].orders;
    console.log("items in top " + tables[id].orders);
    console.log(item);
    if (item.length === 0) {
    }
    const itemlist = document.querySelector(".item-list");
    while(itemlist.firstChild) {
        itemlist.removeChild(itemlist.lastChild);
    }
    let ans = 0;
    for (let i = 0; i < item.length; i++) {
        const item1 = document.createElement('div');
        item1.classList.add('item1');
        const p1 = document.createElement('p');
        p1.innerText = i + 1;
        const p2 = document.createElement('p');
        console.log("item name = " + item[i].item);
        p2.innerText = item[i].item;
        const p3 = document.createElement('p');
        p3.innerText = item[i].price;
        console.log("price = " + item[i].price);
        const input = document.createElement('input');
        input.setAttribute("type", "number");
        input.setAttribute("step", "1");
        input.classList.add("quantity");
        input.setAttribute("id", "i" + i)
        console.log("quantity = " + item[i].quantity);
        input.value = item[i].quantity;
        const button = document.createElement("button");
        button.innerText = "Delete";
        button.classList.add('delete');
        button.setAttribute("id", "d" + (i));
        ans += item[i].quantity * item[i].price;
        console.log("ans first = " + ans);
        item1.appendChild(p1);
        item1.appendChild(p2);
        item1.appendChild(p3);
        item1.appendChild(input);
        item1.appendChild(button);
        console.log(item1);
        itemlist.appendChild(item1);
    }
    const total = document.querySelector(".total").children[0].children[1];
    tables[id].price = ans;
    total.innerText = ans;
    localStorage.setItem('tables', JSON.stringify(tables));

    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
        document.querySelector(".bill").style.display = "none";
        document.querySelector(".container").style.opacity = "1";
        const tabs = JSON.parse(localStorage.getItem('tables'));       
        const docs = document.getElementById("Table - " + (id + 1)).children[1];
        docs.innerHTML = "Rs " + tabs[id].price + " | Total Items = " + tabs[id].orders.length;
    })
    document.querySelectorAll(".delete").forEach(
        item => {
            item.addEventListener("click", event => {
                const index = event.target.id[1] - '0';
                console.log(typeof index);
                const tabl1 = JSON.parse(localStorage.getItem('tables'));
                console.log("orders = " + tabl1[id].orders[index]);
                console.log("item = " + tabl1[id].orders);
                tabl1[id].orders.splice(tabl1[id].orders[index], 1);
                console.log("one and only name " + tabl1[id].name);
                console.log('tabl1[id].price = ' + tabl1[id].price);
                const delButton = document.querySelectorAll('.tab');
                localStorage.setItem('tables', JSON.stringify(tabl1));
                payment(id);
            })
        }
    )
    document.querySelectorAll('.quantity').forEach(
        e => {
            e.addEventListener('change', event => {
                const index = event.target.id[1] - '0';
                const tabl2 = JSON.parse(localStorage.getItem('tables'));
                tabl2[id].orders[index].quantity = event.target.value;
                localStorage.setItem('tables', JSON.stringify(tabl2));
                payment(id);
            })
        }
    )

    const item42 = document.querySelector(".generate");
    item42.addEventListener('click', (event) => {
        const tas = JSON.parse(localStorage.getItem('tables'))
       
        document.querySelector(".bill").style.display = "none";
        console.log('before billgen')
        const billgen = document.querySelector('.billgen');
        billgen.children[0].children[1].innerText = tas[id].price;
        billgen.style.display = "block";
        console.log('after billgen');
        setTimeout(() => {
            document.querySelector(".billgen").style.display = "none";
             console.log("second one");
        document.querySelector(".container").style.opacity = "1";
        tas[id].price = 0;
        tas[id].count = 0;
        tas[id].orders = [];
        const docs = document.getElementById("Table - " + (id + 1)).children[1];
        docs.innerHTML = "Rs " + tas[id].price + " | Total Items = " + tas[id].orders.length;
        localStorage.setItem('tables', JSON.stringify(tas));
        console.log('last one');
        }, 2000)
    })
}