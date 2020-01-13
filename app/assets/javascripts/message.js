$(function(){ 
  function buildHTML(message){
   if ( message.image ) {
     var html =
     `<div class="main-chat__middle__message" ${message.id}>
        <div class="main-chat-middle__message__upper-info">
          <p class="upper-info__talker">${message.user_name}</p>
          <p class="upper-info__date">${message.created_at}</p>
        </div>
        <p class="message__text">
          ${message.content}
          <img class="lower-message__image" src=${message.image}>
        </p>
    </div>`
     return html;
   } else {
     var html =
     `<div class="main-chat__middle__message" ${message.id}>
        <div class="main-chat-middle__message__upper-info">
          <p class="upper-info__talker">${message.user_name}</p>
          <p class="upper-info__date">${message.created_at}</p>
        </div>
      <p class="message__text">
        ${message.content}
      </p>
     </div>`
     return html;
   };
 }
$('#new_message').on('submit', function(e){
 e.preventDefault();
 var formData = new FormData(this);
 var url = $(this).attr('action')
 $.ajax({
   url: url,
   type: "POST",
   data: formData,
   dataType: 'json',
   processData: false,
   contentType: false
 })
  .done(function(data){
    var html = buildHTML(data);
    $('.main-chat__middle').append(html);      
    $('form')[0].reset();
    $('.main-chat__middle').animate({ scrollTop: $('.main-chat__middle')[0].scrollHeight});
    $('.new-massage__submit-btn').prop('disabled', false);
    
  })
  .fail(function() {
    alert("メッセージ送信に失敗しました");
});
})
});

