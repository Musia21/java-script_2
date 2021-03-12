const goods = [
          { title: 'Shirt', price: 150, button: 'Добавить'},
          { title: 'Socks', price: 50, button: 'Добавить'},
          { title: 'Jacket', price: 350, button: 'Добавить'},
          { title: 'Shoes', price: 250, button: 'Добавить'},
        ];



const $goodsList = document.querySelector('.goods-list');
const $cartPriceall = document.querySelector('.CartPriceall');

const renderGoodsItem = ({title, price, button},id) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><button id=btn-${id} class="button-add" onclick=addItem>${button}</button></div>`;
    };

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
    (item,index) => renderGoodsItem(item,index)
        ).join('');
    
    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();
let buttons = document.querySelectorAll('.button-add');
buttons.forEach(btn => btn.addEventListener('click', (event) => {
    let id = event.target.id.slice(4);
    let goodPrice = goods[id].price;
console.log(goodPrice);
}));

function addItem(obj){

    var catalog = goods[obj.target.id.split("_")[1]];
    var catalog = document.getElementsByClassName("catalog")[0];

    sum += catalog.price;
    document.getElementsByClassName("sum")[0].textContent = "Sum: " + sum;
}
 let x = [];
