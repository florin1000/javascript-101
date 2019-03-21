import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'


import Layout from '../components/layout'

const Lesson1 = () => (
  <Layout>
    <Helmet
      meta={[
        {
          name: 'description', content: 'Primitives values in JS: Boolean, Number, String',
        },
      ]}
    >
      <html lang="en"/>
    </Helmet>
    {/*<Link to="/">Homepage</Link>*/}
    <h1>Number, string and boolean</h1>
    <p className="tldr"><span>[TL ; DR]</span><br/>
      <code>number</code>, <code>string</code>, <code> boolean </code>are 3 primitives, data types that can't be
      mutated. All numbers are <i>floating point</i> and format is <i>binary64</i> and there is no <i>integer</i> type.
      Working with big number may lead to unexpected errors , hence there are some special constant that can keep you
      safe. Those constants can be accessed thru an <code>Object wrapper</code> specific to
      each <i>primitive</i>: <i>Number</i> for numbers, <i>String</i> for strings and <i>Boolean</i> for booleans. The
      second primitive, <code>string</code>, represent a set of elements written in <i>Single
        quotes <code>''</code></i>, <i>Double quotes <code>"""</code></i> or <i>backticks <code>``</code></i><br/>
      The last <i>primitive</i> is <code>boolean</code> and is the logical entity, that can
      be <code>true</code> or <code>false</code>.
    </p>
    <p className="teacher">Hello again Toto, today we will going to talk about 3 JS <code>Primitives</code></p>
    <ol>
      <li>Boolean</li>
      <li>Number</li>
      <li>String</li>
    </ol>
    <p className="student">TOTO : I remember that there are 5 <code>primitives</code> in JS, am I right?</p>
    <p className="teacher">Yes, you are right, these 3, <code>null</code> and <code>undefined</code>
      which are covered <Link
        to="/null-and-undefined"
        activeStyle={{ color: 'blue' }}
      >here
      </Link>
    </p>
    {/*<p className="teacher">*/}
    {/*<code>Primitives</code> are <code>immutable values</code> which means that they cannot change, because they don't*/}
    {/*have methods attached that can mutate it */}
    {/*</p>*/}
    <p className="teacher">
      <code>Number</code><br/>
      In JS, all <i>numbers </i>are <code>floating-point</code> according with <code><i>
      <a href="https://en.wikipedia.org/wiki/Double-precision_floating-point_format">IEE 754 value</a></i></code> and
      the format is <i>binary64</i> or <i>double precision</i>.<br/>
    </p>
    <p className="student">How do I know if there is of <i>type integer</i>?</p>
    <p className="teacher">There is no <i>type integer</i> in JS, all numbers are <i>floating-point</i> and all the
      mathematically operations act as you expected</p>
    <pre>
      let a = 4;<br/>
      let b = 5;<br/>

      a + b // 9<br/>
      b - 1 // 1<br/>
      a * b // 20<br/>
      a / b // 0.8<br/>
    </pre>
    <p className="teacher">
      There is still a special case of <code>0</code>, basically <code>0</code> is actually <code>+0</code>, and we can
      have also <code>-0</code>.
    </p>
    <p className="student">Why it exists <code>-0</code> since <code>0</code> is just <code>0</code></p>
    <p className="teacher">There isn't much to talk about this just that </p>
    <pre>
      1 / +0  // Infinity<br/>
      1 / -0  // -Infinity<br/>
    </pre>
    <p className="student">Now what is <code>Infinity</code> and <code>-Infinity</code>?</p>
    <p className="teacher"><code>Infinity</code> is the number type that represents <i> infinity</i>. In JS working with
      large numbers is not that safe so there are some limits, like the biggest/smallest number in JS
      is</p>
    <pre>
      console.log(Number.MAX_VALUE) // 1.7976931348623157e + 308 <br/>
      console.log(Number.MIN_VALUE)  // -1.7976931348623157e + 308 <br/>
      1.7976931348623157e + 308 * 2 // Infinity<br/>
     </pre>
    <p className="teacher">
      As you can see operation the goes beyond this limit return <code>Infinity</code>. There is also a safe limit
      for numbers in JS</p>
    <pre>
       console.log(Number.MAX_SAFE_INTEGER)    2<sup>53</sup>   - 1  or // <span
      className="comment">max safe integer</span><br/>
      console.log(Number.MIN_SAFE_INTEGER) - (2<sup>53</sup>   - 1) // <span className="comment">min safe integer</span><br/>
      </pre>
    <p className="teacher">
      JS is not really built for sophisticated and large math operations. You can check <a href="#numbers">here</a> how
      math operations are made in JS
    </p>
    <p className='student'> Wait .... !!I see you have used <i> methods </i> to obtain those limit values
      and <i>methods</i> are specific to <i> objects </i> and not to primitives as we are talking about here. How could
      you access a method since primitives don 't have <i>methods</i>???
    </p>
    <p className="teacher">JS is slickly in this situation and uses <code>type coercion</code> (read
      more <a href="#coercion">here</a>). Let's see what has happened</p>
    <ol>
      <li>JS converted the primitives to an object wrapper</li>
      <li><code>number, string, boolean</code> have <code>Object wrappers</code> that contain useful methods and
        properties, like the ones used in previous examples
      </li>
      <li>After the method / property of that <code>Object wrapper</code> returned a value, the <code>object</code> is
        flushed away to the garbage collector
      </li>
    </ol>
    <p className="teacher">You can check more about object wrappers for each primitive <Link to="/Number"
                                                                                             activeStyle={{ color: 'blue' }}>Number</Link>,
      <Link to="/String"
            activeStyle={{ color: 'blue' }}>String</Link> and
      <Link to="/Boolean" activeStyle={{ color: 'blue' }}> Boolean </Link>.
      As <code>Number type</code> was used for <i>numbers</i>, there is also a <i>data type</i> for textual
      data, <code>String type</code> and as <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type">MDN</a> says <i>It is
        a set of elements of 16-bit unsigned integer values</i>. Strings can be enclosed in <i>Double quotes ->
        ""</i> , <i>Single quotes -> ''</i> and <i>backticks -> ``</i>.
    </p>
    <pre>
      let a = 'Hello World' <br/>
      let b = "Hello World" <br/>
      let c = `Hello World` <br/>
    </pre>
    <p>
      The <code>String</code><i>Object wrapper</i> can easily
      help us get the length of the string, using <i>length</i> property.
    </p>
    <pre>
      let name = "Toto";<br/>
      console.log(name.length) // 4<br/>
      console.log(Toto[2])  // "t"<br/>
    </pre>
    <p className="student">I understand that "Toto" has 4 elements hence <code>length</code> property returned <i>4</i>,
      but what is the problem with the third line ? Why is <i>2</i> when it should be <i>0</i> since it is the second
      element in that <i>string</i>?
    </p>
    <p className="teacher"> In JS, the strings and arrays are indexed with <i>0</i>, this means that the first element
      has index 0, the second, index 1 and so on an so forth and yes, the square brackets help us obtain the element
      that has the index specified inside. <br/> In the above example the element with index 2 is "t"
    </p>
    <pre>
      T  -> index 0<br/>
      o  -> index 1<br/>
      t  -> index 2<br/>
      o  -> index 3<br/>
    </pre>
    <p className="teacher"> The last primitive that we will going to talk about is <code>Boolean</code>. Boolean is a
      logical entity that can be only <code>true</code> or <code>false</code>
    </p>
    <pre>
      typeof  true // <span className="comment">boolean</span><br/>
      typeof  false // <span className="comment">boolean</span><br/>
    </pre>
    <p className="student">Pretty straightforward!</p>
    <p className='tags'>
      <span> Javascript </span>
      <span>null</span>
      <span> undefined </span>
      <span>Falsy Values</span>
    </p>
  </Layout>
)

export default Lesson1