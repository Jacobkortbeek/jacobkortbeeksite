
app.get('/', (req, res, next) => {
  res.render('login', {title: 'Login'});
});
