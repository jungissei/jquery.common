// ----------------------------------------------------------------------------
// Page Functions
// ----------------------------------------------------------------------------
// --------------------------------------
// Ajax URLs process
// --------------------------------------
$(function(){
  let curr_path = location.pathname.replace(/\/index.html$|\/$/, '');

  $.ajax({
    url: curr_path + '/url.json',
    type: 'GET',
    dataType: 'json',
  }).done(function (data) {

    append_block_page_items(data);
    click_block_copy_urls(data);
  });
});

// ----------------------------------------------------------------------------
// Page blocks
// ----------------------------------------------------------------------------

// --------------------------------------
// Block page item
// --------------------------------------
function append_block_page_items(data){

  let html = '';

  $.each(data, function(index, value){

    html += '<li><a href="' + value['url'] + '">' + value['text'] + '</a></li>'
  });

  $('#block_page_items').append(html);
}


// --------------------------------------
// Block Copy URLs
// --------------------------------------
function click_block_copy_urls(data){
  let url = '',
      location_origin = location.origin;

  $.each(data, function(index, value){
    url += location_origin + value['url'] + '\n'
  });

  $('#block_copy_url').on('click', function(){

    document.addEventListener('copy' , {url : url, handleEvent : copy_clipboard});
    document.execCommand('copy');
  });
}

function copy_clipboard(e){
  e.clipboardData.setData('text/plain' , this.url);
  e.preventDefault();
  document.removeEventListener('copy', copy_clipboard);
}
