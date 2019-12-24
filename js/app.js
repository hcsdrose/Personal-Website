//Item
Vue.component('portfolio-item', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

//Define Vue
new Vue({
  el: '#portfolio'
})
