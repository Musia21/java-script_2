  class Api {
    constructor() {
      this.url = 'goods.json';
    }

    fetch(error, success) {
      let xhr;
    
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) { 
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

    xhr.onreadystatechange = function () {
        if (xhr.readyState ===4){
            if(xhr.status ===200) {
                success(xhr.responseText);
            }else if(xhr.status >400){
                error('все пропало');
            }
        }
    }
    
    xhr.open('GET', this.url, true);
      xhr.send();
    }


    fromJSON(data)
        return new Promise((resolve) =>{
    resolve(JSON.parse(data));
    })
    
    fetchPromise(){
        return new Promise((resolve, reject) => {
            this.fetch(reject, resolve);
        });
    }

class GoodsItem {
    constructor({title, price, button},id) {
        this.title = title;
        this.price = price;
    }
    getHtml() {
        return `<div class="goods-item"><h3>${title}</h3><p>${price}</p><button id=btn-${id} class="button-add" onclick=addItem>${button}</button></div>`;
    };
    
}

class Header {
    constructor(){
        this.$container = document.querySelector('header')
        this.$button = this.$container.querySelector('.cart-button');
        this.$search = this.$container.querySelector('#search');
    }
    setSearchHandler(callback) {
        this.$search.addElementListener('input',callback);
    }
    setButtonHandler(callback) {
        this.$button.addElementListener('click',callback);
    }
}


    class GoodsList {
    constructor() {
        this.api = new Api();
        this.$goodsList = document.querySelector('goods-list');
        this.goods = [];
        this.filtereGoods = [];
        
        //this.api.fetch(this.onFetchError.bind(this),this.onFetchSuccess.bind(this));

        this.header.setSearchHandler((evt) => [
            this.$search(evt.target.value);
        ])

        const fetch = this.api.fetchPromise();

        fetch.then((data) => {this.Fetch.onFetchSuccess(data) })
        .catch((err) => {this.onFetchError(err) });

        console.log(fetch);
   
        search(str) {
            if(str === '') {
                this.filtereGoods = this.goods;
            }
            const regexp = new RegExp(str,'gi');
            this.filtereGoods = this.goods.filter((good) => regexp.test(good.title));
            this.render();
        }

    //this.api.fetchPromise()
    //    .then((response) => this.api.fromJSON(response))
    //    .then((data) => { this.onFetchSuccess(data) })
     //   .catch(err) => { this.onFetchError(err) }
    //}

    onFetchSuccess(data) {
        this.goods = data.map(({title, price}) => new GoodsItem(title, price));
        this.filtereGoods = this.goods;
        this.render();
    }

    onFetchError() {
        this.$goodsList.insertAdjacentHTML(`beforeend`, `<h3>${err}</h3>`);
    }
    
    render() {
        this.$goodsList.textContent = '';
        this.filtereGoods.forEach((good) => {
            this.$goodsList.insertAdjacentHTML('beforeend', good.getHtml());
        })
    }
}

function openCart() {
    console.log('cart');
}

const header = new Header ();

header.setButtonHandler(openCart);

const goodsList = new GoodsList();
//const $goodsList = document.querySelector('.goods-list');
//const $cartPriceall = document.querySelector('.CartPriceall');

//const renderGoodsList = (list = goods) => {
//    let goodsList = list.map(
//    (item,index) => renderGoodsItem(item,index)
//        ).join('');

//renderGoodsList();
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
