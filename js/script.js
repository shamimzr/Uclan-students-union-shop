

// menu-button
// function for toggle class "nwe class" in "mobileList" element
// run in = elemet with id : menuButton onclick="clickbtn()"
function clickbtn(){
  const mobileList = document.getElementById("mobileList");
  mobileList.classList.toggle('newClass');
}



// nes sq
const CART = {
  KEY: 'fdgsjl;kjadf',
  contents: [],
  init(){

      //  initialize the contents
      // check localStorage 
      let _contents = localStorage.getItem(CART.KEY);
      if(_contents){
          CART.contents = JSON.parse(_contents);
      }else{
          // test product - cart
          CART.contents = [
            // {
            //     id: "1",
            //     name: "UCLan Hoodie",
            //     color: "Purple",
            //     info: "cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks",
            //     price: " Only £39.99",
            //     qty:1,
            //     image: "images/items/hoodies/hoodie (1).jpg",
            //     FIELD6: "['UCLan Hoodie','Purple','cotton authentic character and practicality are combined in this comfy  warm and luxury hoodie for students that goes with everything to create casual looks',' Only £39.99','images/items/hoodies/hoodie (1).jpg']"
            //   },
          ];
          CART.sync();
      }
  },
  async sync(){
      let _cart = JSON.stringify(CART.contents);
      await localStorage.setItem(CART.KEY, _cart);
  },
  find(id){
      //find an item in the cart by it's id
      let match = CART.contents.filter(item=>{
          if(item.id == id)
              return true;
      });
      if(match && match[0])
          return match[0];
  },
  add(id){
      //add a new item to the cart
      //check that it is not in the cart already
      if(CART.find(id)){
          CART.increase(id, 1);
      }else{
          let arr = PRODUCTS.filter(product=>{
              if(product.id == id){
                  return true;
              }
          });
          if(arr && arr[0]){
              let obj = {
                  id: arr[0].id,
                  name: arr[0].name,
                  color: arr[0].color,
                  info: arr[0].info,
                  image: arr[0].image,
                  qty: 1,
                  itemPrice: arr[0].price
              };
              CART.contents.push(obj);
              //update localStorage
              CART.sync();
          }else{
              //product id does not exist in products data
              console.error('Invalid Product');
          }
      }
  },
  empty(){
      //empty whole cart
      CART.contents = [];
      //update localStorage
      CART.sync()
  },
  sort(field='name'){
      //sort by field - name, price
      //return a sorted shallow copy of the CART.contents array
      let sorted = CART.contents.sort( (a, b)=>{
          if(a[field] > b[field]){
              return 1;
          }else if(a[field] < a[field]){
              return -1;
          }else{
              return 0;
          }
      });
      return sorted;
      //NO impact on localStorage
  },
  logContents(prefix){
      console.log(prefix, CART.contents)
  }
};



// cart products array
let PRODUCTS = [];

document.addEventListener('DOMContentLoaded', ()=>{
    //when the page is ready
    getProducts( showProducts, errorMessage );
    //get the cart items from localStorage
    CART.init();
    //cart page
    showCart();
});
document.addEventListener('DOMContentLoaded', ()=>{
    //item page
    showItem();
});

function showCart(){
  let cartSection = document.getElementById('cConteainer');
  cartSection.innerHTML = "";
  let Sort = CART.sort('qty');
  Sort.forEach( item =>{
      //
   let cartItemContainer = document.createElement('div');
    let cartItem = document.createElement('div');
    cartItemContainer.appendChild(cartItem)
    let cartItemImage = document.createElement('img');
    cartItemImage.src = item.image;
    cartItemImage.alt = item.name;
    cartItem.appendChild(cartItemImage);
    let cartItemName = document.createElement('h4');
    cartItemName.textContent = item.name;
    cartItem.appendChild(cartItemName);
    let cartItemInfo = document.createElement('div');
    cartItemContainer.appendChild(cartItemInfo);
    let cartItemProduct = document.createElement('h3');
    cartItemProduct.textContent = item.info;
    cartItemInfo.appendChild(cartItemProduct);
    let cartItemPrice = document.createElement('h4');
    cartItemPrice.textContent = item.itemPrice;
    cartItemInfo.appendChild(cartItemPrice);



    // cart item styles
    cartItemContainer.className = "cart-item-container";
    cartItem.className = "cart-item";
    cartItemImage.className = "cart-item-image";
    cartItemName.className = "cart-item-name"
    cartItemInfo.className = "cart-item-info"
    cartItemProduct.className = "cart-item-product"
    cartItemPrice.className = "cart-item-price"

    // append
    cartSection.appendChild(cartItemContainer)
  })
}

function getProducts(success, failure){
// import products
  const URL = "https://shamimzr.github.io/Uclan-students-union-shop/newitems.json";
  fetch(URL, {
      method: 'GET',
      mode: 'cors'
  })
  .then(response=>response.json())
  .then(showProducts)
  .catch(err=>{
      errorMessage(err.message);
  });
}

function showProducts( products ){
  PRODUCTS = products;
  // nn start
  let productsContainer = document.getElementById("product-container");
  productsContainer.innerHTML = "";
  // nn end

  products.forEach(product=>{

    let Product               = document.createElement('div');
    Product.setAttribute('id', product.name)
    let ProductImageContainer = document.createElement('div');
    Product.appendChild(ProductImageContainer);
    let ProductImage          = document.createElement('img');
    ProductImage.alt = product.name;
    ProductImage.src = product.image;
    ProductImageContainer.appendChild(ProductImage);
    let ProductInfoContaine   = document.createElement('div');
    Product.appendChild(ProductInfoContaine);
    let ProductName           = document.createElement('h4');
    ProductName.textContent = product.name + ' ' + product.color;
    ProductInfoContaine.appendChild(ProductName);
    let ProductInfo           = document.createElement('h5');
    ProductInfo.textContent = product.info;
    ProductInfoContaine.appendChild(ProductInfo);
    let productReadmore       = document.createElement('h5');
    let AproductReadmore      = document.createElement('a');
    AproductReadmore.textContent = "read More";
    AproductReadmore.href= "./item.html";
    // set id of product to readmore attribute
    AproductReadmore.setAttribute('data-id', product.id);
    // set name of product to readmore attribute
    AproductReadmore.setAttribute('data-name', product.name);
    // set color of product to readmore attribute
    AproductReadmore.setAttribute('data-color', product.color);
    // set info of product to readmore attribute
    AproductReadmore.setAttribute('data-info', product.info);
    // set price of product to readmore attribute
    AproductReadmore.setAttribute('data-price', product.price);
    // set image of product to readmore attribute
    AproductReadmore.setAttribute('data-image', product.image);
    AproductReadmore.addEventListener('click', readMore);
    productReadmore.appendChild(AproductReadmore);
    ProductInfoContaine.appendChild(productReadmore);
    let productPrice          = document.createElement('h5');
    productPrice.textContent = product.price;
    ProductInfoContaine.appendChild(productPrice);
    let productBuyButton      = document.createElement('button');
    productBuyButton.textContent = "Buy";
    // set id of product to button attribute
    productBuyButton.setAttribute('data-id', product.id);
    productBuyButton.addEventListener('click', addItem);
    ProductInfoContaine.appendChild(productBuyButton);

    // add class to the elements
    Product.className = "product";
    ProductImageContainer.className = "product-image-container";
    ProductImage.className = "product-image";
    ProductInfoContaine.className = "product-info-container";
    ProductName.className = "product-name";
    ProductInfo.className = "product-info";
    productReadmore.className = "product-readmore";
    AproductReadmore.className = "product-readmore";
    productPrice.className = "product-price";
    productBuyButton.className = "product-buy-button";

        // add product to productsContainer
        productsContainer.appendChild(Product)
  })
}


function showItem(){

    let getItem = sessionStorage.getItem('product');
    let Item = JSON.parse(getItem);

    let itemSection = document.getElementById("itemSection");
    itemSection.innerHTML = "";

    let mainItem = document.createElement("div");
    let itemImageContainer = document.createElement("div");
    mainItem.appendChild(itemImageContainer);
    let itemImage = document.createElement("img");
    itemImage.alt = Item.name;
    itemImage.src = Item.image;
    itemImageContainer.appendChild(itemImage);
    let itemInfoContainer = document.createElement("div");
    mainItem.appendChild(itemInfoContainer);
    let itemName = document.createElement("h4");
    itemName.textContent = Item.name + ' ' + Item.color;
    itemInfoContainer.appendChild(itemName);
    let itemInfo = document.createElement("h5");
    itemInfo.textContent = Item.info;
    itemInfoContainer.appendChild(itemInfo);
    let itemPrice = document.createElement("h5");
    itemPrice.textContent = Item.price;
    itemInfoContainer.appendChild(itemPrice);
    let itemBuyButton = document.createElement("button");
    itemBuyButton.textContent = "Buy";
    // set id of product to button attribute
    itemBuyButton.setAttribute('data-id', Item.id);
    itemBuyButton.addEventListener('click', addItem);
    itemInfoContainer.appendChild(itemBuyButton);


    //  add class to elemnts
    mainItem.className = "item";
    itemImageContainer.className = "item-image-container";
    itemImage.className = "item-image";
    itemInfoContainer.className = "item-info-container";
    itemName.className = "item-name";
    itemInfo.className = "item-info";
    itemPrice.className = "item-price";
    itemBuyButton.className = "item-buy-button button-one";

    itemSection.appendChild(mainItem)
}

function addItem(ev){
  ev.preventDefault();
  let id = parseInt(ev.target.getAttribute('data-id'));
  console.log('add to cart item', id);
  window.alert("Product added to the card");
  CART.add(id, 1);
  showCart();
}

function readMore(ev){
    let id = parseInt(ev.target.getAttribute('data-id'));
    let name  = ev.target.getAttribute('data-name');
    let color = ev.target.getAttribute('data-color');
    let info  = ev.target.getAttribute('data-info');
    let price = ev.target.getAttribute('data-price');
    let image = ev.target.getAttribute('data-image');

    const object = {id: id, name: name , color: color, info: info , price: price, image: image };
    console.log(object)
    sessionStorage.setItem('product', JSON.stringify(object));
}

function errorMessage(err){
  //display the error message to the user
  console.error(err);
}