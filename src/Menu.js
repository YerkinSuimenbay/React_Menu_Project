import React from "react"

const Menu = ({title, category, price, img, desc, filterItems}) => {
    return (
        <article>
            <img src={img} alt={title}></img>
            <footer>
                <div className="food-info">
                    <h4 className="name">{title}</h4>
                    <h4 className="price">${price}</h4>
                </div>
                <p className="desc">{desc}</p>
            </footer>
        </article>
    )
}

export default Menu;