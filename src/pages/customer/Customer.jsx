 
import CustomerLIst from '../../components/customer/CustomerLIst';
import Pagination from '../../components/pagination/Pagination';
import { CustomerWrap } from './CustomerStyle';
 
 
const Customer = () => {
 
 
    return (        
    <CustomerWrap>
        <div className="inner">
             <h2> Customer Service Forum </h2>
            <CustomerLIst />
            <Pagination />
        </div>
    </CustomerWrap>        
    );
};

export default Customer;