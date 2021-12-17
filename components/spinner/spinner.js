/*Создаем класс Spinner метод  render которого, рендерит в узел  ROOT_SPINNER
спиннер(вращающийся элемент) для отображения во время загрузки данных с сервера */

class Spinner {
  heandleClear() {
    ROOT_SPINNER.innerHTML = "";
  }
  render() {
    const html = `
        <div class = "spinner-container">
            <img class = "spinner-img" src="image/Eclipse-1.9s-200px.svg"/>
        </div>
    
    `;

    ROOT_SPINNER.innerHTML = html;
  }
}

const spinnerPage = new Spinner();
