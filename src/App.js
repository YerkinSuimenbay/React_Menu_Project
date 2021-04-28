import React, {useState} from "react";
import Menu from "./Menu"
import Categories from "./Categories"
import data from "./data"

const categories = data.reduce((a, b) => {
  return a.includes(b.category)
      ? a
      : a.concat(b.category);
}, ["all"])

function App() {
    const [items,
        setItems] = useState(data)

    const filterItems = (category) => {
        if (category === "all") {
            setItems(data)
        } else {
            const newItems = data.filter(item => item.category === category)
            setItems(newItems)
        }
    }

    return (
        <main>
            <h2 className="title">Our menu</h2>
            <div className="underline"></div>
            <ul className="options">
                {/* <li onClick={() => setItems(data)}>All</li>
        <li onClick={() => filterItems("breakfast")}>breakfast</li>
        <li onClick={() => filterItems("lunch")}>lunch</li>
        <li onClick={() => filterItems("shakes")}>shakes</li> */}
                {categories.map(category => {
                    return <Categories key={category[0]} category={category} filterItems={filterItems}/>
                })}

            </ul>
            <section className="grid">
                {items.map(item => {
                    return <Menu key={item.id} {...item}/>
                })}
            </section>
        </main>
    );
}

export default App;
