/*Создаем класс для Header в котором вызываем метод render для
содания структуры блоков,а также вызываем у метода render localStorageUtil.getProducts()
и получаем количество элементов в хранилище roductsStore.length */

class Header {
  render(count) {
    const html = `
        <div class = "header-container">
            <div class = "header-counter">
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
