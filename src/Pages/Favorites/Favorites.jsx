import { useEffect } from "react";
import { useState } from "react";

import FavoritesPhones from "./FavoritesPhones";

const Favorites = () => {
    const [favorites, setFavorites] = useState([])
    const [noFound, setNoFound] = useState('')

    const [isShow, setIsShow] = useState(false)
    // all amount set use reduce 
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const favoritesItems = JSON.parse(localStorage.getItem('favorites'))

        if (favoritesItems) {
            setFavorites(favoritesItems)
            const total = favoritesItems.reduce((preValue,currentItem)=> 
            preValue + currentItem.price,0)
           // console.log(total);
           setTotalPrice(total)
        } else {
            //console.log('no data found');
            setNoFound('No data found')
        }

    }, [])
    //console.log(favorites);
    const handelRemove = () => {
        localStorage.clear()
        setFavorites([])
        setNoFound('No data found')
    }
    return (
        <div>
            {
                noFound ? <p className="h-screen flex justify-center items-center">{noFound}</p> :
                    <div>
                       
                        {favorites.length > 0 && (
                          <div>
                              <h1 className="flex justify-center items-center text-xl">Total Price:{totalPrice}</h1>
                             <button onClick={handelRemove} className="px-5 bg-green-200 block mx-auto">
                            Deleted All Favorites</button>
                           
                          </div>
                        )
                        
                          
                            }
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-5">
                            {
                                isShow ? favorites.map(phone =>
                                    <FavoritesPhones key={phone.id} phone={phone}>

                                    </FavoritesPhones>) :
                                    favorites.slice(0, 2).map(phone =>
                                        <FavoritesPhones key={phone.id} phone={phone}>

                                        </FavoritesPhones>)
                            }

                        </div>
                        {favorites.length > 2 && <button onClick={() => setIsShow(!isShow)}
                            className="px-5 bg-green-200 block mx-auto">
                            {isShow ? 'see less' : 'See More'}
                        </button>}
                    </div>

            }
        </div>
    );
};

export default Favorites;