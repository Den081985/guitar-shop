class Error {
  render() {
    const html = `
   
    <div class = "error-container">
    <div class = "error-message">
    <h3>Ресурс не доступен</h3>
    <p>Перезагрузите страницу и дождитесь соединения</p>
  </div>
    
    </div>
     
    `;
    ROOT_ERROR.innerHTML = html;
  }
}

const errorPage = new Error();
