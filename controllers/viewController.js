function Controller () {
  this.home = home
}

let home = (req, res) => {
  let data = {

  }

  let vueOptions = {
    head: {
      title: 'Todo!'
    }
  }

  return res.renderVue('home.vue', data, vueOptions);
}

exports.Controller = new Controller()
