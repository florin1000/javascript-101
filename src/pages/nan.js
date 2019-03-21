import React from 'react'
import Helmet from 'react-helmet'


import Layout from '../components/layout'

const Nan = () => (
  <Layout>
    <Helmet
      meta={[
        {
          name: 'description', content: 'What is NaN, Infinity, -Infinity in Javascript. In this tutorial it is ' +
            'discussed about special numbers in Javascript',
        },
      ]}
    >
      <html lang="en"/>
    </Helmet>
    <h1>NaN</h1>

    <p className="tldr"><span>[TL ; DR]</span><br/>
      <code>NaN</code> is not a number of type Number. It can be obtained when some math
      operations fails or built in <code>Math</code> functions are called with wrong arguments. It can be properly
      tested since ECMAScript 6 arrived with <code>Number.isNaN()</code> that replaced
      the <code>isNaN()</code> which was prone to coercion errors
    </p>
    {/*<Link to="/">Go back to the homepage</Link>*/}
    <p className="teacher">Professor : Hi Toto, today we will going to talk about <code>NaN</code> which stands
      for <code>Not a Number</code></p>
    <p className="student">Toto : So if it is not a number, it a <code>string</code> or a <code>boolean</code> right?
    </p>
    <p className="teacher">Professor : No, <code>NaN</code>is actually a number, data type <code>number</code></p>
    <p className="student">Toto : I am confused, Not a Number is type of <code>number</code></p>
    <p className="teacher">Yes you are right, it may sound peculiar but this is the reality, NaN is of type number</p>
    <p className="student">Toto : Why would you need something like that ?</p>
    <p className="teacher">Well, it is high unlikely to use it in your code but it may be obtained in some cases, when
      some built in functions that supposed to return a type number failed or simple operations between numbers and
      other non numbers values. NaN it is a property of the global object</p>
    <pre>
      Math.cos()     // NaN<br/>
      Math.acos(12)   // NaN<br/>
      parseFloat("Toto")  // NaN<br/>
      "abc" / 2           //NaN <br/>
      </pre>

    <p className="student">Toto : I understand now</p>
    <pre>
          "abc" + 2 // NaN
      </pre>
    <p className="student"> right? </p>
    <p className="teacher">Not exactly, here we have an exception and there are many execeptions like this in js.</p>
    <pre>
        "abc" + 2 // "abc2" <br/>
      {
        /** <br/>
         * because here the second value is treated as a <br/>
         * string and the result is the concatenation of those values <br/>
         * */
      }
         </pre>
    <p> Operations between arrays </p>
    <pre>
        [0,1]*[1] //NaN<br/>
        [0,1]+[1] //"0,11"<br/>
        [1]*[2] //2<br/>
        ....<br/>
        Infinity * "abc" // NaN<br/>
        Infinity + 2 // Infinity<br/>
       </pre>
    <p>As you can see sometimes you get <code>NaN</code> , sometimes a string or a number, you can find more about this
      <a href="#"> here</a>. It is
      the way JS convert from one type to another and it is called <code> type coercion</code>. As a rule of thumb
      when it si expected a number and the values can't be converted to a number you will end up with <code>NaN</code>
    </p>

    <p className="student">Toto : I see <code>Infinity</code> , what is this?</p>
    <p className="teacher">Professor : <code>Infinity</code> and <code>-Infinity</code> are special numbers in
      JS and you can obtain them dividing by zero. <code>Infinity</code> is the bigest number in
      JS <code>-Infinity</code> is the smallest number in JS</p>
    <pre>
          1 / 0   // Infinity<br/>
          -4 / 0  // -Infinity<br/>
          Infinity + 1000 // Infinity<br/>
          Infinity + Infinity // Infinity<br/>
          -Infinity + 1000 // -Infinity<br/>
    </pre>
    <p> and of course we have other exceptions , which can't be really explained, it is NaN because it has no reasonable
      explanation</p>
    <pre>
        0 / 0 // NaN<br/>
        Infinity - Infinity // NaN<br/>
    </pre>
    <h3>Testing for <code>NaN</code></h3>
    <p className="teacher">Now that we have understand what <code>NaN</code> is we need some methods to test for it,
      to see whether the value is <code>NaN</code> or not.</p>
    <p>1) <code>isNaN()</code></p>
    <p>This method checks if a certain value evaluates to <code>NaN</code>
      How it works:</p>
    <ol>
      <li> checks if the value is a number</li>
      <li>if not tries to convert it</li>
      <li>checks if the resulting value is <code>NaN</code></li>
    </ol>
    <p className="student">Toto : So</p>
    <pre>
         isNaN(NaN) // should return true<br/>
         isNaN("abc") // should return true<br/>
      </pre>

    <p className="teacher">Wait, as you should know we have exceptions in JS, the second step may conduct to undesired
      behaviors:</p>
    <pre>
        isNaN(NaN) // true<br/>
        isNaN(1) // false<br/>
        isNaN(true) // false<br/>
        isNaN([0,1]) // true conversion fails<br/>
        isNaN("abc") // true conversion fails<br/>
       </pre>
    <p> So when the conversion fails then the result is true, even the value tested is not <code>NaN</code></p>
    <p>2)<code>Number.isNaN()</code><br/>
      With ECMAScript 6 it is available a new method <code>Number.isNaN()</code> which will avoid type conversion
      problem from the prior method.
    </p>
    <p> Let's see how it works:</p>
    <ol>
      <li>if type of the argument is not <code>Number</code> , return <code>false</code>.</li>
      <li>if the argument is <code>NaN</code>, return <code>true</code></li>
      <li>return <code>false</code></li>
    </ol>
    <p> Basically it checks NaN amoung <code>Type(Number)</code></p>
    <p className="student">Toto : I understand, the second method is the one we should use</p>
    <p className="teacher">Yes , it should be the only one . Another thing you should know is that</p>
    <pre>
        NaN === NaN // false <br/>
      {
        // the only value in JS that has this behavior , and it is something related to<br/>
        // the way floating numbers works that specify NaN is never equal to another NaN
      }
        </pre>
    <p> Ok, now you know a lot about <code>NaN</code></p>
    <p className="student">Toto : Thank you, see you in the next js topic</p>

    <p className="tags">
      <span>NaN</span>
      <span>falsy values</span>
      <span>Infinity</span>
      <span>-Infinity</span>
      <span>type coercion</span>
      <span>Javascript</span>
    </p>
  </Layout>
)

export default Nan