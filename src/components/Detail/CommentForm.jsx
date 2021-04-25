import React, {useEffect, useState} from 'react';
import { DateTime} from 'luxon';
import {useAuth0} from "@auth0/auth0-react";
import styles from './Detail.module.css';

function CommentForm(){
    const [text,setText] = useState('');
    const [comment,setComment] = useState([]);
    const [url,setUrl] = useState(null)
    const {loginWithRedirect , isAuthenticated, logout, user, getAccessTokenSilently} = useAuth0();

    const fetchComment = async() =>{
        const query = new URLSearchParams({ url });
        const newUrl = `/api/v1/comments?${query.toString()}`
        const response = await fetch(newUrl,{
            method: 'GET'
        })
        const data = await response.json();
        setComment(data)
    }
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

    return(
        <React.Fragment>
            <form>
                <h4 className={'mt-3'}>Yorumlar</h4>
                <hr className={'mt-3'}/>
                <div className={'comments'}>
                    {comment.data && comment.data.sort((a,b)  => a.createdAt - b.createdAt).map((item,index) =>(
                        <React.Fragment key={index}>
                            <div className={'user d-flex'}>
                                <img className={'rounded-circle'} width={40} src={item.user.picture}/>
                                <span className={'mx-2 my-2'}>{item.user.name}</span>
                            </div>
                            <div className={'comment'}>
                                <p className={'mt-2 mx-1'}>{item.text}<span className={`mx-2 ${styles.date}`} >{DateTime.fromMillis(item.createdAt).toRelative()}</span></p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <div className={'mt-3'}>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} className={`rounded ${styles.textArea}`}></textarea>
                </div>
                {isAuthenticated ?
                    <div className={'buttons d-flex mt-3'}>
                        <button onClick={handleSubmit} className={'btn btn-dark'}>Send</button>
                        <div className={'user mx-2'}>
                            <img width={40} className={'rounded-circle'} src={user.picture} alt={user.name}/>
                            <span className={'mx-2'}>{user.name}</span>
                        </div>
                        <button typeof={'button'} className={'btn btn'} onClick={() => logout()} >x</button>
                    </div> : <button onClick={() => loginWithRedirect()} className={'btn btn-primary'}>Login</button>
                }
            </form>
        </React.Fragment>

    )

}

export default CommentForm