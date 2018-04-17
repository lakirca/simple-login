module.exports.routes = {

  '/': {
    view: 'pages/homepage'
  },
  'GET /login': {
    view: 'login'
  },
  'POST /login': 'AuthController.login',
  '/logout': 'AuthController.logout',
  'GET /register': {
    view: 'register'
  }

};
