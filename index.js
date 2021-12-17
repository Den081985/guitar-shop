/*В этом файле функция,которая рендерит первоначальные данные
переменная с пустым массивом CATALOG заменит предыдущий каталог, в нее сохраняем 
данные полученные с локального или удаленного сервера, используя fetch запрос.
В fetch запросе делаем запрос на сервер,полученные данные в формате json добавляем в CATALOG 
 и затем вызываем метод render в котором рендерятся компоненты header и products.
 spinnerPage.render() загружается в превую очередь,чтобы отображать спиннер во время 
 загрузки данных с сервера,а затем удаляется spinnerPage.heandleClear() после загрузки данных*/

function render() {
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);
  productsPage.render();
}

spinnerPage.render();

let CATALOG = [];
//http://myjson.dit.upm.es/api/bins/5aoh
//server/catalog.json

fetch("http://myjson.dit.upm.es/api/bins/5aoh")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    spinnerPage.heandleClear();
    render();
  })
  .catch((error) => {
    spinnerPage.heandleClear();
    errorPage.render();
  });

/*setTimeout(() => {
      spinnerPage.heandleClear();
      render();
    }, 1000); */
