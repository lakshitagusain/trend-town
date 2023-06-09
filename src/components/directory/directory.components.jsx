import './directory.styles.scss';
import CategoryItem from '../category-item/category-item.components.jsx'

const Directory = ({categories}) => {

    return(
        <div className = 'directory-container'>
            {categories.map((category) => (
            <CategoryItem key={category.id} category={category}></CategoryItem>
            ))}
        </div>
    )
}

export default Directory;