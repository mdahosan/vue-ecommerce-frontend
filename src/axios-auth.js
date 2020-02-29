import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://laravel6.test/'
})

// instance.defaults.headers.common['SOMETHING'] = 'something'

export default instance
