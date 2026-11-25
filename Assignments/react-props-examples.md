# React Props and Object Destructuring

## 1. Single prop

```jsx
import { createRoot } from 'react-dom/client';

function Student({ name }) {
  return <h2>Welcome, {name}!</h2>;
}

createRoot(document.getElementById('root')).render(
  <Student name="John" />
);
```

Output: Welcome, John!

## 2. Multiple props

```jsx
import { createRoot } from 'react-dom/client';

function Employee({ name, department, salary }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Department: {department}</p>
      <p>Salary: ${salary}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <Employee name="Sarah" department="IT" salary={85000} />
);
```

Output: Sarah, IT, $85000.

## 3. Reusing components

```jsx
import { createRoot } from 'react-dom/client';

function Product({ name, price, brand }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Brand: {brand}</p>
      <p>Price: ${price}</p>
      <hr />
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <>
    <Product name="Laptop" brand="Lenovo" price={1200} />
    <Product name="Phone" brand="Apple" price={999} />
    <Product name="Tablet" brand="Samsung" price={650} />
  </>
);
```

## 4. Default prop values

```jsx
import { createRoot } from 'react-dom/client';

function BankAccount({ name, balance = 0, type = "Savings" }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Account Type: {type}</p>
      <p>Balance: ${balance}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <>
    <BankAccount name="John" balance={5000} type="Checking" />
    <BankAccount name="Sarah" />
  </>
);
```

Default values apply when a prop is omitted or undefined, but not when it is null.

## 5. Boolean props and conditional rendering

```jsx
import { createRoot } from 'react-dom/client';

function User({ name, isOnline }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <>
    <User name="John" isOnline={true} />
    <User name="Sarah" isOnline={false} />
  </>
);
```

Output: John — Online; Sarah — Offline.

## 6. Passing arrays as props

```jsx
import { createRoot } from 'react-dom/client';

function Student({ name, grades }) {
  const average = grades.length
    ? grades.reduce((a, b) => a + b, 0) / grades.length
    : null;

  return (
    <div>
      <h2>{name}</h2>
      <p>Grades: {grades.join(", ")}</p>
      <p>Average: {average === null ? "N/A" : `${average}%`}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <Student name="John" grades={[80, 90, 85, 95]} />
);
```

Output: Average: 87.5%.

## 7. Passing objects as props

```jsx
import { createRoot } from 'react-dom/client';

function Course({ course }) {
  return (
    <div>
      <h2>{course.title}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Duration: {course.duration} weeks</p>
      <p>Price: ${course.price}</p>
    </div>
  );
}

const courseData = {
  title: "React Development",
  instructor: "David",
  duration: 6,
  price: 499
};

createRoot(document.getElementById('root')).render(
  <Course course={courseData} />
);
```

## 8. Three ways to receive props

### Using the props object

```jsx
function Car(props) {
  return <h2>{props.brand} - {props.color}</h2>;
}
```

### Destructuring inside the function

```jsx
function Car(props) {
  const { brand, color } = props;
  return <h2>{brand} - {color}</h2>;
}
```

### Destructuring in function parameters

```jsx
function Car({ brand, color }) {
  return <h2>{brand} - {color}</h2>;
}
```

All three produce the same result when given the same props.

## Props syntax cheat sheet

| Data type | Example |
|---|---|
| String | `name="John"` |
| Number | `age={25}` |
| Boolean | `isActive={true}` |
| Array | `grades={[80, 90, 95]}` |
| Object | `user={{ name: "John", age: 25 }}` |
| Variable | `name={studentName}` |
| Expression | `total={price * quantity}` |
| Function | `onClick={handleClick}` |
| Default value | `function Car({ color = "red" })` |

## Student practice exercises

| Exercise | Component | Props |
|---|---|---|
| 1 | `Book` | title, author, price |
| 2 | `Movie` | title, year, rating |
| 3 | `Job` | title, company, salary, location |
| 4 | `Restaurant` | name, cuisine, rating, isOpen |
| 5 | `ShoppingCart` | product, price, quantity |
| 6 | `Flight` | airline, origin, destination, price |
| 7 | `StudentReport` | name, grades, passingGrade |
| 8 | `Hotel` | name, location, price, amenities |

## Key concepts

- Props pass data from parent to child components.
- Props are read-only.
- Components can receive multiple props.
- Components can selectively destructure only the props they need.
- The same component can be reused with different data.
- JavaScript expressions and non-string values are passed using curly braces.


