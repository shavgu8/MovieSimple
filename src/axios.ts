import axios from "axios";
const BaseUrl = 'https://api.themoviedb.org/'

const api = axios.create({
   baseURL:BaseUrl,
   timeout:20 * 1000,
   timeoutErrorMessage:"timed out",
   
})
api.interceptors.request.use(async(req)=>{
   req.headers['Accept'] = 'aplication/json',
   req.headers['Content-Type'] = 'aplication/json'
   req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzczMGFjODY4NzM0N2I3OWZjMzIyOWM5ZTYzNTdjMSIsIm5iZiI6MTczNzEyNTQyMy4yMiwic3ViIjoiNjc4YTZlMmY5M2Y3NDJjYzI5YWQxNWRiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.uTuDN7o4wGtgLtQzpf_Ijlm8-QqscVMBOOv_TQNnfoI'

   return req
})

export default api