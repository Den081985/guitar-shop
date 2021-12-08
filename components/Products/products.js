// Каждый компонент представляет собой класс со своими методами и свойствами
/*В классе Products создаем метод render,который добавляет в элементы списка
деструктурированные свойства элементов массива CATALOG с помощью метода forEach,затем 
добавляем их в список,помещенный в переменную html,а переменную html в свою очередь
помещаем в блок products на странице с помощью ROOT_PRODUCTS.innerHTML = html 
CSS-классы указываем с помощью БЭМ,поэтому в элементе списка используем '__'*/
class Products {
  render() {
    let htmlCatalog = "";

    CATALOG.forEach(({ id, name, price, img }) => {
      htmlCatalog += `
            <li class = "products-element">
                <span class= "products-element-name">${name}</span>
                <img class = "products-element-img" src="${img}"/>
                <span class = "products-element-price">
                ${price.toLocaleString()}
                </span>
                <button class = "products-element-btn">Добавить в корзину</button>
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
