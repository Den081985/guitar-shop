// Каждый компонент представляет собой класс со своими методами и свойствами
/*В классе Products создаем метод render,который добавляет в элементы списка
деструктурированные свойства элементов массива CATALOG с помощью метода forEach,затем 
добавляем их в список,помещенный в переменную html,а переменную html в свою очередь
помещаем в блок products на странице с помощью ROOT_PRODUCTS.innerHTML = html  */
class Products {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, price, img }) => {
      htmlCatalog += `
            <li>
                <span>${name}</span>
                <img src="${img}"/>
                <span>${price}</span>
                <button>Добавить в корзину</button>
            </li>

        
        `;
    });

    const html = `
        <ul>${htmlCatalog}</ul>
    
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
