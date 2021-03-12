var btnBasket = document.getElementById('basket-btn');
var goodsListSection = document.getElementById('goods-list-section');

const goods = [
          { title: 'Shirt', price: 150, button: 'Добавить'},
          { title: 'Socks', price: 50, button: 'Добавить'},
          { title: 'Jacket', price: 350, button: 'Добавить'},
          { title: 'Shoes', price: 250, button: 'Добавить'},
        ];
//
//const sum = 0;

const $goodsList = document.querySelector('.goods-list');

// Добавил аттрибут id для кнопки, чтобы по нему можно было определить к какому элементу массива относится
const renderGoodsItem = ({title, price, button}, id) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><button id=btn-${id} class="button-add" onclick=addItem>${button}</button></div>`;
    };

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
    // Добавил аргумент index, который передает позицию в массиве
    (item, index) => renderGoodsItem(item, index)
        ).join('');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();

 // Выбираем все кнопки добавить по классу .button-add
let buttons = document.querySelectorAll('.button-add');
// Добавляем обработчик события по нажатию на кнопку.
buttons.forEach(btn => btn.addEventListener('click', (event) => {
    // Из аттрибута id='btn-1' получаем номер id
    let id = event.target.id.slice(4);
    // Получаем цену из массива и выводим в консоль.
    let goodPrice = goods[id].price;
    console.log(goodPrice);
}));


function addItem(obj){

    var catalog = goods[obj.target.id.split("_")[1]];
    var catalog = document.getElementsByClassName("catalog")[0];

    sum += catalog.price;
    document.getElementsByClassName("sum")[0].textContent = "Sum: " + sum;
}



//Создаем класс корзина Cart
//class Cart {
//    constructor () {
//      this.goods = [];
//    }
//
//
//    addCartItem(GoodsItem) {
//        this.goods.push(CartPriceall);
//    }
//
//    //Метод для вывода итоговой суммы корзины
//    CartPriceall() {
//        let totalPrice = document.getElementById('Cart-Price-all');
//        let sum = 0;
//        this.goods.forEach (good => {
//            sum += good.price
//        });
//        totalPrice.innerText = `Итого  ${sum} рублей`;
//    }
//
//    render() {
//        let listHtml = '';
//        let goodsList = document.getElementById('Cart-Price-all');
//
//        this.goods.forEach (good => {
//            const goodItem = new GoodsItem (good.title, good.price);
//            listHtml += GoodsItem.render();
//        });
//        goodsList.innerHTML = listHtml;
//    }
//}
//
//var renderCart = () => {
//    const list =  new GoodsList ();
//    const cart = new Cart();
//
//    list.fetchGoods();
//    cart.addCartItem(list.goods[0]);
//    cart.addCartItem(list.goods[1]);
//    cart.addCartItem(list.goods[2]);
//    cart.render();
//
//    cart.totalCartPrice();
//    goodsListSection.style.display = 'block';
//};
//
//btnBasket.addEventListener('click', renderCart);
//window.addEventListener('click', function (addItem) {console.log(evt)});
//
