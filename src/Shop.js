import Cake from './img/cake-trans.png';
import Cookies from './img/cookies-trans.png';
import Cupcakes from './img/cupcake-trans.png';
import Creampuff from'./img/creampuff.png';
import Donut from'./img/donut-trans.png';
import Macarons from'./img/whitemacarons.png';
import Shortcake from'./img/shortcake.png';
import Chococake from'./img/chococake.png';
import Cart from './img/shoppingcart.png';

const Shop = () =>{
    
    return(
        <div className="shop">
            <p id="content-title">Products</p>
            <p id="results">
                Showing 1-8 of 8 results

                <select name="product-sort" id="product-sort">
                    <option value="bestselling">Bestselling</option>
                    <option value="low-high">Low to high</option>
                    <option value="high-low">High to low</option>
                </select>
                <label for="product-sort">Filter by: </label>
            </p>

            
            
            <div className="grid-container">
                <div className="item">
                    <img src={Chococake} alt="cart" className="product" />
                    <button className="addcart"><img src={Cart} alt="cart" id="cart" /></button>
                    <p>Chocolate Cake</p>
                    <p>$6.50</p>
                </div>
                <div className="item">
                    <p id="new-alert">NEW</p>
                    <img src={Shortcake} alt="shortcake" className="product" />
                    <button className="addcart"><img src={Cart} alt="cart" id="cart"/></button>
                    <p>Strawberry Shortcake</p>
                    <p>$6.50</p>
                </div>
                <div className="item">
                    <img src={Cake} alt="fudge cake" className="product" />
                    <button className="addcart"><img src={Cart} alt="cart" id="cart" /></button>
                    <p>Fudge Cake</p>
                    <p>$6</p>
                </div>
                <div className="item">
                    <img src={Cookies} alt="cookies" className="product" />
                    <button className="addcart"><img src={Cart} alt="cart" id="cart" /></button>
                    <p>Heart Shaped Cookies</p>
                    <p>$8</p>
                </div>
                <div className="item">
                    <img src={Cupcakes} alt="cupcakes" className="product" />
                    <button className="addcart"><img src={Cart} alt="cart" id="cart" /></button>
                    <p>Assorted Cupcakes</p>
                    <p>$8</p>
                </div>
               
                <div className="item">
                    <img src={Creampuff} alt="creampuffs" className="product" />
                    <button className="addcart"><img src={Cart} alt="cart" id="cart" /></button>
                    <p>Creampuff</p>
                    <p>$4.50</p>
                </div>
                <div className="item">
                    <img src={Macarons} alt="macarons" className="product" />
                    <button className="addcart"><img src={Cart} alt="cart" id="cart" /></button>
                    <p>Macarons</p>
                    <p>$6.50</p>
                </div>
                <div className="item">
                    <img src={Donut} alt="donuts" className="product" />
                    <button className="addcart"><img src={Cart} alt="cart" id="cart" /></button>
                    <p>Jelly Filled Donut</p>
                    <p>$5</p>
                </div>
            </div>
        </div>
    );
}

export default Shop;