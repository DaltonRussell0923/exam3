Vue.component('person', {
    props: ['name','id','bio','place'],
    template: `
    <div>
    <h3>{{ name }}</h3>
    <p>{{bio}}</p>
    <button>get {{ name }} bio</button>
    </div>`,
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'famous pepole!',
        pepole: [],
    },
    created: function () {
        this.useApi();
      },
    methods: {
        useApi(){
            console.log('working')
            axios.get('https://api.themoviedb.org/3/person/popular?api_key=7c0def495914433614f8c6b1889d9136&language=en-US&page=1')
            .then((response)=>{
                console.log(response);
                for (i =0; i < 10; i++){
                    this.pepole.push(response.data.results[i]);
                    this.pepole[i].bio = " ";
                    this.pepole[i].place = i;
                }
                console.log(this.pepole);
            })
            
        },
        getdetails(id){
            path = 'https://api.themoviedb.org/3/person/' + {person_id} + '?api_key=7c0def495914433614f8c6b1889d9136&language=en-US'
            axios.get(path)
            .then((response)=>{
                console.log(response);
                for (i =0; i < 10; i++){
                    this.pepole.push(response.data.results[i]);
                    this.pepole[i].bio = " ";
                }
                console.log(this.pepole);
            })
        }
    }
  })