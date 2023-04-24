'use client'
import React, { useState } from 'react'
import styles from './page.module.css'
import axios from 'axios'

const page = () => {
  const [post,setPost] = useState({
    title : '',
    body : ''
  })

  const handleInput = (e) => {
    setPost({...post, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users",{post})
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
  }

  return (
    <>
      <div className={styles.mainDiv}>
        <h3>Axios Post</h3>
        <form className={styles.formDiv} onSubmit={handleSubmit}>
          Title : <input name="title" placeholder='Enter title' onChange={handleInput} className={styles.inputelement}/>
          Body : <input name="body" placeholder='Enter body' onChange={handleInput} className={styles.inputelement}/>
          <button className={styles.btn}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default page