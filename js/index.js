function ativaScrollSuave(selector) {
  // console.log('tudo certo');
  $(selector).click(function (event) {
    event.preventDefault();
    var target = $(this).attr('href');

    $('html, body').animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
  });
}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');
