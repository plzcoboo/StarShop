import ProductSearch from '../../components/product/ProductSearch';
import { ProductWrap } from './ProductStyle';
import ProductItem from '../../components/product/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader'

const Product = () => {
  let {products} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [product, setProduct] = useState(products);    
  const [productData, setproductData] = useState([]);    
  const [page, setPage] = useState( 1 );
  const [pageloading, setLoading] = useState(false);
  
  let postsPerPage =  8;

  useEffect(()=>{
  setProduct(products)
      },[products])

  useEffect(() => {
      const lastPost = page * postsPerPage      
      const currentPosts = product.slice( 0 , lastPost )

      setTimeout(() => { 
          setproductData( currentPosts )
           setLoading(false);
      }, 1500);
  }, [page]);

  const scrollToEnd = () => {
      if(productData.length === products.length) return
      setLoading(true);
      setPage( page => page + 1);
  }

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, [pageloading]);


  const handleScroll = () => {
      if(productData.length === products.length) return
     if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
         if(!pageloading) {scrollToEnd()}
      }         
      };


    return (
      <ProductWrap>
        <div className="inner">
        <h2>StarWars shop</h2>

        <ProductSearch NewProductData={productData} SetNewProductData={setproductData}/>

        <div className="cart-box">
                    {productData.map(item => <ProductItem key={item.id} item={item}/>)}
                    {pageloading && <ClipLoader color="#54d1ff" size={50} cssOverride={{margin:'50px auto 50px auto',display:'block'}}/>}
        </div>

        </div>
      </ProductWrap>
    );
};

export default Product;