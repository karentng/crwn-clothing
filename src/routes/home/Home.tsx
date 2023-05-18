import { useEffect, useState } from "react";
import CategoryMenu from "../../components/categories-menu/CategoriesMenu";

export type Category = {
  id: number;
  title: string;
  imageUrl: string;
}

const Home = () => {  
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(()=>{
    const categoriesValue: Category[] = [
      {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
      }
    ]
    
    setCategories(categoriesValue);
  }, []);

  return <CategoryMenu categories={categories} />;
};

export default Home;
