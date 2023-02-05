import React from 'react'

export default function Contact () {
    return (
        <div className='contact'>
            <h2>Contact</h2>
            <form>
                <label>Name:</label>
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    size={50}
                />
                <label>Email:</label>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    size={50}
                />
                <label>Message:</label>
                <textarea
                    id='message'
                    name="message"
                    type="textarea"
                    placeholder="Message"
                    rows={6}
                    cols={49}
                /><br></br>
            </form>
            <button className='button'>Submit</button>
        </div>
    )
}