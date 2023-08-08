import RestaurantItemCategory from "./RestaurantItemCategory";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";


const RestaurantMenuList = (props) => {
    const { menu, btnVeg, info } = props;

    // console.log(menu);

    return(<div className="__bdsdg">
            {menu.map((item, index) => (
                <div key={index}>
                    {item.categories ? (
                        <RestaurantNestedItemCategory nestedCategory={item} btnVeg={btnVeg} info={info} />
                    ) : (
                        <RestaurantItemCategory itemCategory={item} btnVeg={btnVeg} info={info} />
                    )}
                    {menu.length == index + 1 ? ("")
                        :(<div className="main_border"></div>)
                    }
                </div>
            ))}
        </div>
    )
}

export default RestaurantMenuList;