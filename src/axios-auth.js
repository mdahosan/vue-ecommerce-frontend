import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://laravel6.test/'
})

axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('token');

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
