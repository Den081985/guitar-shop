/*Создаем класс для Header в котором вызываем метод render для
содания структуры блоков,а также вызываем у метода render localStorageUtil.getProducts()
и получаем количество элементов в хранилище roductsStore.length 
Добавляем метод handlerOpenShoppingPage() для взаимодействия с классом Shopping
и помещаем его в обработчик onclick class = "header-counter"*/

class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }
  render(count) {
    const html = `
        <div class = "header-container">
        <h2 class = "header-paragraph">Guitar Shop</h2>
            <div class = "header-counter" onclick = "headerPage.handlerOpenShoppingPage();">
                <img src="./image/icons8-задание-выполнено-48.png">${count}
            </div>
        </div>
        
        `;
    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);
