// Каждый компонент представляет собой класс со своими методами и свойствами
/*В классе Products создаем метод render,который добавляет в элементы списка
деструктурированные свойства элементов массива CATALOG с помощью метода forEach,затем 
добавляем их в список,помещенный в переменную html,а переменную html в свою очередь
помещаем в блок products на странице с помощью ROOT_PRODUCTS.innerHTML = html 
Для работы с локальным хранилищем в классе Products добавляем переменные
 productsStore - для получения элементов из хранилища,activeClass-для изменения стиля
 кнопки и activeText-для изменения текста кнопки,а так же делаем проверку элемента
 по индексу на его наличие или отсутствие в хранилище.Добавляем метод  handleSetLocationStorage
 для обработки события onclick на кнопке   */
class Products {
  constructor() {
    this.classNameActive = "products-element-btn-active";
    this.labelAdd = "Добавить в корзину";
    this.labelRemove = "Удалить из корзины";
  }

  handleSetLocationStorage(element, id) {
    const { pushProducts, products } = localStorageUtil.putProducts(id);

    if (pushProducts) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
    headerPage.render(products.length);
  }
  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, price, img }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = " " + this.classNameActive;
        activeText = this.labelRemove;
      }
      htmlCatalog += `
            <li class = "products-element">
                <span class= "products-element-name">${name}</span>
                <img class = "products-element-img" src="${img}"/>
                <span class = "products-element-price">
                ${price.toLocaleString()}
                </span>
                <button class = "products-element-btn${activeClass}" onclick = "productsPage.handleSetLocationStorage(this, '${id}');">
                ${activeText}
                </button>
            </li>

        
        `;
    });

    const html = `
        <ul class = "products-container">${htmlCatalog}</ul>
    
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
