
if(window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote",
    time: 5000
  });

  new SimpleSlide({
  slide: "portfolio",
  time: 5000,
  nav: true,
  });

}

if(window.SimpleAnime) {
  new SimpleAnime();
}


if(window.SimpleAnime) {
  new SimpleForm({
  form: ".formphp",
  button: "#enviar",
  erro: "<div id='form-erro'><h2>Ocorreu um erro!</h2><p>Tente novamente mais tarde.</p>",
  sucesso: "<div id='form-sucesso'><h2>Mensagem enviada!</h2><p>Obrigado pelo contato =)</p>",
});
}