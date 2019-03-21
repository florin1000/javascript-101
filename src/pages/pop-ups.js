import React from 'react'
import Helmet from 'react-helmet'


import Layout from '../components/layout'

const Lesson1 = () => (
  <Layout>
    <Helmet
      meta={[
        {
          name: 'description', content: 'Javascript pop-ups',
        },
      ]}
    >
      <html lang="en"/>
    </Helmet>
    <h1>alert, prompt and confirm</h1>
    <p className="tldr"><span>[TL ; DR]</span><br/>
      <code>alert(), confirm(), prompt()</code> are special functions that block a script execution and show modal
      messages with which the user can interact.
      <ol>
        <li><code>alert()</code> is used to inform the user</li>
        <li><code>confirm()</code> is used to receive from the user a <i>yes / no</i> boolean value</li>
        <li><code>prompt</code> to receive an input value</li>
      </ol>
      These dialog boxes are styled by default by the browser and can't
      be enhanced with <code>CSS</code>
    </p>
    <p className="teacher">Hello Toto, are you ready for a new JS lesson?</p>
    <p className="student">TOTO : I'm always ready, what are we dealing with today?</p>
    <p className="teacher">
      <ol>
        <li><code>alert</code></li>
        <li><code>prompt</code></li>
        <li><code>confirm</code></li>
      </ol>
      These are special functions that show dialog boxes on the page with which the user may interact.
    </p>
    <p className="teacher"><code><b>alert('message')</b></code></p>
    <p className="teacher">This function shows a message and, very important, pauses the script execution until the
      user interacts with it. The argument of this function is a string, that represents the text that will be shown in
      the dialog box.
    </p>
    <p className="student">How can the user interact with this dialog box?</p>
    <p className="teacher">The user can press the <i>OK</i> button. This is used to give the user very important
      information since the page is blocked until the <i>OK</i> button, <i>esc</i> or <i>enter</i> is pressed, so you
      can't scroll, select page texts, click other buttons, access links etc</p>
    <p className="student">Read it or leave it!</p>
    <p className="teacher">Something like this, it is a very straight message. Pressing <i>OK</i> will let you get back
      to full access to the page, so it is just an informative dialog box!</p>
    <p className="teacher"><code><b>prompt('message',default)</b></code></p>
    <p className="teacher">This dialog box is a bit more complex than the previous one. The user can now add input in
      the dialog window. In this case, the <i>message</i> parameter is the message the user will see in the box. The
      second is optional and represents <i>default value</i> for the input.</p>
    <p className="student">Where can I use this type of function ?</p>
    <p className="teacher">Let's say you want to collect from the user, the age, and use it later in your script. </p>
    <pre>
      let age = prompt("Please enter your age");<br/>
      console.log(age) // what the user have entered<br/>
    </pre>
    <p className="student">What is happening if there is no <i>default value</i> and the user just
      press <i>OK</i>, <i>enter</i> or <i>esc</i>, without adding anything to that input field</p>
    <p className="teacher">The above variable will then be an empty string.</p>
    <p className="student">This means that you can't really force the user to add
      something solely with this <code>prompt()</code>.</p>
    <p className="teacher">You can force a repeated dialog box until the user adds what you
      want to be added, but is not the most elegant solution, it is a bit out of the scope of this lesson and anyway you
      won't be using this.</p>

    <p className="teacher"><code><b>confirm('message')</b></code></p>
    <p className="teacher">The last one it is used to <i>confirm</i> as you may have expected, so it will be a message
      box that will have 2 buttons with <i>cancel</i> or <i>ok</i>. The same as previous, the value can be stored in a
      variable and it will be a boolean. If you won't choose <i>cancel</i> the value stored will be <code>true</code></p>
    <p className="student">Really useful, but I don't really like the way these modals are colored, nor the buttons
      dimension, they don't fit to what I am working right now. How can I change the style of these boxes?</p>
    <p className="teacher">The problem with these dialog boxes is that you have little control over design and
      validation. You will have to stick with that rectangular with some text and buttons, you can't modify anything,
      colors, buttons position, dialog box position, entry-exit animations, input validation etc. This is why aren't
      used very often, the way to go solution is to make a modal by yourself in <code>HTML, CSS, JS</code> with control
      on everything.
    </p>

    <p className='tags'>
      <span>Modals</span>
      <span>alert</span>
      <span>prompt</span>
      <span>confirm</span>
    </p>
  </Layout>
)

export default Lesson1