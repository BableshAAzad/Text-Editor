import React from 'react'
import { Link } from 'react-router-dom'

export default function Errorpage(props) {
    const style = {
        textAlign: 'center'
    }
    const styles = {
        color : 'red'
    }
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
      }
    return (
        <div style={style}>
            <br />
            <br />
            <h3 style={styles}>Exeption Error (: 404</h3>
            <br />
            <br />
            <p><Link to='/' style={myStyle}>Go to Home page..... </Link></p>
        </div>
    )
}
