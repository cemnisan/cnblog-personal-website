import React, {useState,useEffect} from 'react';
import {useAuth0} from '@auth0/auth0-react';

export default function(){
    const [text,setText] = useState('');
    const [comment,setComment] = useState([]);
    const [url,setUrl] = useState(null)
    const {getAccessTokenSilently} = useAuth0();


    useEffect(() =>{
        const url = window.location.origin + window.location.pathname
        setUrl(url)
    },[])

    useEffect(() =>{
        if(!url) return
        fetchComment()
    },[url])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const userToken = await getAccessTokenSilently();
        const response = await fetch('/api/v1/comments',{
            method:'POST',
            body:JSON.stringify({text, userToken, url}),
            headers: {
                'Content-Type':'application/json'
            }
        })
        const data = await response.json();
        fetchComment()
        setText('')

    }
    const fetchComment = async() =>{
        const query = new URLSearchParams({ url });
        const newUrl = `/api/v1/comments?${query.toString()}`
        const response = await fetch(newUrl,{
            method: 'GET'
        })
        const data = await response.json();
        setComment(data)
    }
    return [handleSubmit,text,setText,comment]
}