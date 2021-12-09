// Создаем класс для работы с локальным хранилищем
//Свойство localStorageпозволяет получить доступ к Storageобъекту.
//Ключи и значения всегда строки (так же, как и объекты, целочисленные ключи автоматически будут преобразованы в строки).
/*в конструкторе создаем ключ products, а так же методы getProducts для получения элемента
из хранилища и putProducts для того,чтобы поместить элемент в хранилище.В методе 
getProducts элемент,взятый по ключу,проверяем на равенство null и если он не равен null
распарсим его,если равен-вернем пустой массив.
В методе putProducts в переменную products сохраняем элементы,которые хранятся в локальном
хранилище(getProducts),для того,чтобы узнать что там уже было перед тем как добавить в него 
элемент.Затем добавляем элемент с помощью setItem.Делаем проверку на совпадение элементов,
чтобы не добавлять в хранилище один и тот же элемент(получаем индекс элемента, проверяем
  есть ли элемент с таким индексом в массиве,если нет-добавляем(push),если есть-удаляем
  элемент с этим индексом(splice) )*/

class LocalStorageUtil {
  constructor() {
    this.keyname = "products";
  }

  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyname);

    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }

  putProducts(id) {
    const products = this.getProducts();
    let pushProducts = false;

    const index = products.indexOf(id);
    if (index === -1) {
      products.push(id);
      pushProducts = true;
    } else {
      products.splice(index, 1);
    }

    localStorage.setItem(this.keyname, JSON.stringify(products));

    return { pushProducts, products };
  }
}

const localStorageUtil = new LocalStorageUtil();
