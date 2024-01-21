import { useNavigate, useParams } from "react-router-dom";
import { CustomerDetailWrap} from "./CustomerStyle";
import { useDispatch, useSelector } from "react-redux";
import { edit, remove } from "../../store/modules/customerSlice";


const CustomerDetail = () => {
  const {customerID} = useParams()
  const { customerData } = useSelector(state => state.customer)
  const newItem = customerData.find(item => item.id === Number(customerID))
  const {id, title, content , date,name } = newItem
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onDel = () => {
    dispatch(remove(id))
    navigate('/customer')
  }

  const onEdit = () => {
    dispatch(edit(newItem))
    navigate(`/customer/customeredit`)
  }

    return (
        <CustomerDetailWrap >
            <div className="inner">
            <h2> FAQ </h2>
            <div className="con">
            <h3>{title}</h3>
                           
                <p className="name">{name}</p>                
                <p className="txt">{content}</p>
                <p className="date">{date}</p>
            </div>
            <p>
                <button onClick={()=>navigate('/customer')}>List</button>
                <button onClick={onEdit}>Edit</button>
                <button onClick={onDel}>Delete</button>
            </p> 
            </div>           
          </CustomerDetailWrap>
    );
};

export default CustomerDetail;