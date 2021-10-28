import { deleteCartItem } from "../../services/products"

const BinIcon = ({onClick}) => {
    return (
        <div onClick={onClick}>
            <svg  id="Layer_1" height="20px" viewBox="0 0 31.24 36.77"><path d="M28.13,6.33,24.79.78H6.26L2.74,6.33H.33L3.94,36H27.29L30.9,6.33ZM6.81,1.78H24.22L27,6.33h-23ZM26.4,35H4.83L1.46,7.33H29.77Z"/><rect x="15.12" y="10.59" width="1" height="20.42"/><rect x="21.07" y="10.59" width="1" height="20.42"/><rect x="9.17" y="10.59" width="1" height="20.42"/></svg>
        </div>
    )
}

export default BinIcon
