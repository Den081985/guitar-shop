/*Создаем класс Shopping с методами render для рендеринга html и handleClear
для очистки div Shopping при нажатии на кнопку очистки*/

class Shopping {
  handleClear() {
    ROOT_SHOPPING.innerHTML = "";
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
                <tr>
                    <td class = "shopping-element-name">${name}</td>
                    <td class = "shopping-element-price">${price.toLocaleString()}</td>
                
                </tr>
            
            `;
        sumCatalog += price;
      }
    });
    const html = `
        <div class = "shopping-container">
            <p>Guitar Shop:</p>
            <div class = "shopping-close" onclick = "shoppingPage.handleClear();">
                <img src = "./image/cancel.png">
            </div>
            <table>
                ${htmlCatalog}
                <td class = "shopping-element-name">Сумма:</td>
                    <td class = "shopping-element-price">${sumCatalog.toLocaleString()}</td>
            </table>
        
        </div>
    
    `;
    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
