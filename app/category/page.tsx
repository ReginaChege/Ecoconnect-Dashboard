import {Category, Subcategory, SubcategoryName} from '@components'

const Categories = () => {
    return (
        <>
            <Category/>
            <SubcategoryName selectedSubcategory={'organic'} />
            <Subcategory/>
        </>
    );
};
export default Categories;
