1. What do props help us accomplish?

help us receive data instead of hard-coded it like property

Make a component more reusable.

2. How do you pass a prop into a component?

pass props in bracket () in function then in place want to display put props.property inside curly bracket {}

<MyAwesomeHeader title="???" />

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?
   
in div and HTML don't have property blahblabla then we can not pass a custom prop it

No, because the JSX we use to describe native DOM elements will
be turned into REAL DOM elements by React. And real DOM elements
only have the properties/attributes specified in the HTML specification.
(Which doesn't include properties like `blahblahblah`)

4. How do I receive props in a component?
function Navbar() {
    return (
        <header>
            ...
        </header>
    )
}

function Navbar(props) {
    console.log(props.blahblahblah)
    return (
        <header>
            ...
        </header>
    )
}

in Navbar(props) and use this

5. What data type is `props` when the component receives it?

string that it property in object

An object!