let url = 'https://docs.google.com/spreadsheets/d/1GMNuwlvphHk7c2MqOnTouFIuiI3Rtv4o9altTDMmfwQ/gviz/tq?';
const lkjs = document.querySelector('.lkjs');
const query = encodeURIComponent('Select B,C,D,E');
console.log(query);
url = url + '&tq=' + query;

fetch(url)
.then(res => res.text())
.then(rep => {
    const data = JSON.parse(rep.substr(47).slice(0,-2));
    const container = document.createElement('div');
    container.setAttribute('class', 'row marbo');
    data.table.rows.forEach((main)=>{
    lkjs.append(container);
    console.log(main.c[0]);
    const imgna = main.c[0];
    console.log(main.c[1]);
    const titlena = main.c[1];
    console.log(main.c[2]);
    const descna = main.c[2];
    console.log(main.c[3]);
    const linkna = main.c[3];
    const fullLink = imgna.v;
    const fullTit = titlena.v;
    const fullDes = descna.v;
    const fullHref = linkna.v;
    console.log(fullLink);
    const column = document.createElement('div');
    const card = document.createElement('div');
    const link = document.createElement('a');
    const elem = document.createElement('img');
    const huah = document.createElement('h2');
    const desc = document.createElement('p');
    const bbtn = document.createElement('button');
    const hreff = document.createElement('a');
    column.setAttribute('class', 'column2');
    card.setAttribute('class', 'card');
    link.setAttribute('href', fullLink);
    // link.setAttribute('target', '_blank');
    link.setAttribute('title', 'CusMeDroid');
    link.setAttribute('style', 'display: block;');
    elem.setAttribute('src', fullLink);
    elem.setAttribute('title', fullTit);
    elem.setAttribute('alt', fullTit);
    elem.setAttribute('class', 'card-img');
    huah.innerHTML = fullTit;
    huah.setAttribute('class', 'black Audiowide padd-8');
    desc.innerHTML = fullDes;
    desc.setAttribute('class', 'padd-8 Trirong');
    bbtn.setAttribute('class', 'Trirong green radius-20 blog-btn');
    hreff.setAttribute('href', fullHref);
    // hreff.setAttribute('target', '_blank');
    hreff.setAttribute('title', 'Streaming Now '+fullTit);
    hreff.innerHTML = 'Play';
    hreff.setAttribute('class', 'padd-4 Trirong white size-16');

    container.appendChild(column);
    column.appendChild(card);
    card.appendChild(link);
    link.appendChild(elem);
    card.appendChild(huah);
    card.appendChild(desc);
    bbtn.appendChild(hreff);
    card.appendChild(bbtn);
  })
  console.log(data);
})