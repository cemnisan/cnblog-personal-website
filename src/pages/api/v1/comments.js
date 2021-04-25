import {nanoid} from "nanoid";
import Redis from 'ioredis';

export default async  function handler(req,res){

    // CREATE
   if (req.method === "POST"){
       const {text, userToken, url} = req.body
       if (!text || !userToken || !url){
           return res.status(400).json({message:'opss.. something wrong'})
       }
       // is user True?
       const userResponse = await fetch(`http://${process.env.NEXT_PUBLIC_AUTH0_DOMAIN}/userinfo`,{
           headers:{
               'Content-Type':'application/json',
               Authorization: `Bearer ${userToken}`
           }
       })

       // Yes, user is true.
       const data = await userResponse.json()

       const comment = {
           id:nanoid(),
           createdAt: Date.now(),
           text,
           user:{
               name:data.name,
               picture:data.picture
           }
       }

       // redis connection
       let redis = new Redis(`${process.env.NEXT_PUBLIC_UPTASH_URL}`);

       // redis write
       redis.lpush(url,JSON.stringify(comment));

       // redis quit
       redis.quit();

       // response
       res.status(200).json(comment);

   }
   if (req.method === "GET"){
       const { url } = req.query;

       let redis = new Redis(`${process.env.NEXT_PUBLIC_UPTASH_URL}`);
       const comments = await redis.lrange(url,0,-1) // all comments.

       redis.quit();

       const data = comments.map(obj => JSON.parse(obj))

       res.status(200).json({data})

   }
}