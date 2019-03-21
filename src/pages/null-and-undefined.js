import React from 'react'
import Helmet from 'react-helmet'


import Layout from '../components/layout'

const Lesson1 = () => (
  <Layout>
    <Helmet
      meta={[
        {
          name: 'description',
          content: 'What is null and undefined in Javascript. In this tutorial it is discussed about special falsy values in Javascript, null and undefined',
        },
      ]}
    >
      <html lang="en"/>
    </Helmet>
    <h1>Null and Undefined</h1>
    <p className="tldr"><span>[TL ; DR]</span><br/>
      <code>null</code> and <code>undefined</code> represent the absence of value in JS. <code>null</code> is mainly
      used for non-existing <code>objects</code> and <code>undefined</code> for the absence of value assignable to a
      variable. Double equal comparison between them will lead to <code>true</code> while strict comparison will
      return <code>false</code> since <code>null</code>is of type <code>object</code> and <code>typeof
        undefined</code> will
      return <code>"undefined"</code>
    </p>
    <p className="teacher">Professor : Hi Toto, today we will going to talk about 2 primitives <code>null</code> and
      <code>undefined</code> which are often mistaken</p>
    <p className="student">Toto : At first glance, for me they seem identical, looks like something is missing and it is
      used one or another
    </p>
    <p className="teacher">You are very close. Yes , both represent the lack of value, lack of content but, are still
      used in different contexts. The first one, <code>null</code> is a primitive used for describing the absence of an
      <code>Object</code>
    </p>
    <p className="student">Toto : that means that</p>
    <pre>
      tyepeof null //null
    </pre>
    <p className="teacher">Wait, no, this is a JS exception, <code>null</code> is <code>object</code> type and of course
    </p>
    <pre>
    tyepeof null // object and not null
    </pre>
    <p className="teacher">It is something that you wouldn't expect since we have a clear primitive null that should be
      the
      type of null value but this is a <code>historical JS bug</code> and the chances of changing the type
      from <code>null</code>
      to <code>object</code>, are null. Got the point?
    </p>
    <p className="student">Why is that?</p>
    <p className="teacher">There is too much js code on the web that relies on that type and making such a radical
      change
      to a primitive will lead to a lot of bugs.
    </p>
    <p><code>null</code>is a <code>falsy</code> value and in mathematical computations will be converted to 0</p>
    <pre>
      null + 0 // 0 <br/>
      null - 1 // -1 <br/>
      null * 1 // 0 <br/>
      null / 1 // 0 <br/>
    </pre>
    <p className="teacher">Negate it or compare it <code>undefined</code> will lead to <code>true</code>.</p>
    <pre>
      !null // true <br/>
      null == undefined // true <br/>
    </pre>
    <p className="student">How about strict? still <code>true</code>?</p>
    <p className="teacher">Strict comparison will lead to false since we have 2 type , <code>null(object)</code> and
      <code>undefined(undefined)</code></p>
    <pre>
      null === undefined // false
    </pre>
    <h3><code>undefined</code></h3>
    <p className="teacher"><code>undefined</code> represents the absence of value and as you expected it is
      a <code>falsy</code> value
    </p>
    <pre>
      let a;<br/>
      typeof a; // 'undefined'<br/>
      typeof b; // 'undefined'<br/>
      a; // 'undefined'<br/>
      b; // 'ReferenceError: b is not defined'<br/>
    </pre>
    <p className="student">I am again confused, to much <code>undefined</code> around, and i can see also <code>not
      defined</code></p>
    <p>Let's see what we have above</p>
    <ol>
      <li>first statement is a <code>variable declaration</code> and not a <code>variable assignation</code>, this mean
        that we only have reserved in memory the identifier <code>a</code>
      </li>
      <li>in the next line, if we check the type of the variable and we get <code>undefined</code>, because the variable
        has no value but it was declared previously.
      </li>
      <li>it may be confusing but the same response we get if we check , using <code>typeof</code>, for any variable
        even it hasn't been declared, so this method can't make any difference between a variable that has been
        declared
        but not initialized with a value and a non-declared variable.
      </li>
      <li>in the last 2 statements when we just call the variable using their identifiers we can see a difference, the
        variable that has been declared will return as expected <code>undefined</code> and the non-existing variable
        will
        return an error message
      </li>
    </ol>
    <p className="student">Toto : I will use <code>typeof</code> with caution then</p>
    <p className="teacher">To check if a variable exist in memory and has no value assigned you can use</p>
    <pre>
      <i>variableName</i> === undefined;<br/>
    </pre>
    <p className="teacher">you will obtain <code>false</code> if the value hasn't been declared
      otherwise <code>true</code></p>
    <p className="teacher"><code>undefined</code> it also returned when trying to access non-existing properties of an
      object or when a <code>function</code> has <code>return</code>omitted
    </p>
    <pre>
      let obj=&#123;
      'name':'ToTo',
     }<br/>
      console.log(obj.age) // undefined<br/>
      let value = (function()&#123;})()<br/>
      //undefined
    </pre>

    <p className="teacher"> This is it now I think you can make a difference
      between <code>null</code> and <code>undefined</code></p>
    <p className="tags">
      <span>Javascript</span>
      <span>null</span>
      <span>undefined</span>
      <span>Falsy Values</span>
    </p>
  </Layout>
)

export default Lesson1