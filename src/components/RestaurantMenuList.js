import RestaurantItemCategory from "./RestaurantItemCategory";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";


const RestaurantMenuList = (props) => {
    const { menu, btnVeg } = props;

    // console.log(menu);

    return(<div className="__bdsdg">
            {menu.map((item, index) => (
                <div key={index}>
                    {item.categories ? (
                        <RestaurantNestedItemCategory nestedCategory={item} />
                    ) : (
                        <RestaurantItemCategory itemCategory={item} btnVeg={btnVeg} />
                    )}
                    <div className="main_border"></div>
                </div>
            ))}
        </div>
    )
}

export default RestaurantMenuList;