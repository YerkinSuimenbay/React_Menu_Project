import React from "react"

const Categories = ({category, filterItems}) => {
    return (
        <li onClick={() => filterItems(category)}>{category}</li>
    )
}

export default Categories;