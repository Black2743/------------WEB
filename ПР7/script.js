$(document).ready(function() {
    var header = $('h1').text();
    $('h1').text('"' + header + '"');
  
    $('a').each(function(index) {
      var linkNumber = index + 1;
      var linkText = $(this).text();
      $(this).append(' (' + linkNumber + ')');
    });
  
    var linkCount = $('a').length;
    var linkCountBlock = $('<div>').text('Количество ссылок: ' + linkCount);
    $('body').append(linkCountBlock);
  
    $('a').css('font-style', 'italic');
  
    var linkListItems = $('a').wrap('<li></li>');
    var orderedList = $('<ol>').append(linkListItems);
    $('body').append(orderedList);
  
    $('img').attr('alt', 'Новое значение атрибута alt');
  
    var headerElement = $('#header');
    var newHeaderElement = $('<header>').html(headerElement.html());
    headerElement.replaceWith(newHeaderElement);
  
    var table = $('table').clone();
    $('body').append(table);
  
    $('body > *:nth-child(2)').remove();
  });
  