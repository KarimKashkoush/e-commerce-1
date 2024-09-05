import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShopContext } from "../context/ShopContext"
export default function ProductCard(props) {
    const item = props.item
    const { currency } = useContext(ShopContext)

    return (
        <Link className="text-gray-700 cursor-pointer" to={`/product/${item._id}`}>
            <div className=" overflow-hidden">
                <img className="hover:scale-110 transition ease-in-out" src={item.image[0]} alt="" />
            </div>
            <p className="pt-3 pb-1 text-sm">{item.name}</p>
            <p className=" text-sm font-medium">{currency}{item.price}</p>
        </Link>
    )
}
