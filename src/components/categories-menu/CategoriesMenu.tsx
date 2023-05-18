import { Category } from '../../routes/home/Home';
import CategoryCard from '../category-card/CategoryCard';
import './categories-menu.scss';

type CategoriesMenuProps = {
  categories: Category[];
}

const CategoryMenu = ({ categories }: CategoriesMenuProps) => {
  return(
    <div className="categories-container">
      { categories.map((category) => {
        return <CategoryCard category={category} key={category.id}/>
      })}
    </div>
  );
};

export default CategoryMenu;