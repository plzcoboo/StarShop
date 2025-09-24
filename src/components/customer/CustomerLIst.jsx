import { useDispatch, useSelector } from "react-redux";
import { CustomerLIstWrap } from "./CustomerStyle";
import CustomerItem from "./CustomerItem";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addData } from "../../store/modules/paginationSlice";

const CustomerLIst = () => {
   const {customerData} = useSelector(state => state.customer)
   const navigate = useNavigate()
   const { currPage, postsPerpage } = useSelector(state => state.pagination)
   const dispatch = useDispatch()
   const lastPost = currPage * postsPerpage // 1 * 10 => 10
   const firstPost = lastPost - postsPerpage ;
   const currentPosts = customerData.slice(firstPost,lastPost)
   
   useEffect(()=>{
    dispatch(addData(customerData))
   },[])

   
   return (
        <CustomerLIstWrap>
        <div className="table-scroll">
        <table className="customerTable">
        <caption>게시판</caption>
        <colgroup>
            <col className="num" />
            <col className="title" />
            <col className="name" />
            <col className="date" />
        </colgroup>
        <thead>
            <tr>
                <th>Number</th>
                <th>Content</th>
                <th>User</th>
                <th>Date Created</th>
            </tr>
        </thead>
        <tbody>
             {currentPosts.map(item => <CustomerItem key={item.id} item={item}/>)}
       </tbody>
       </table>
       </div>
            <p><button onClick={()=>navigate('customeradd')}>Create</button></p>
       </CustomerLIstWrap>
    );
};

export default CustomerLIst;
