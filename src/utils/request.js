import axios from 'axios'


const instance = axios.create({
  baseURL:'http://localhost:5000',
  timeout:10000
});

export const get = (url,params={})=>{
    return new Promise((resolve,reject)=>{
      instance.get(url,{params}).then((response)=>{
          resolve(response);
      },err=>{
          console.log(err);
          reject(err);
      });
    })
} 

export const post=(url,params={})=>{
    return new Promise((resolve,reject)=>{
      instance.post(url,params,{
        headers:{
          'Content-Type':'application/json'
        }}).then((response)=>{
          resolve(response);
        },err=>{
          console.log(err);
          reject(err);
        })
    })
}