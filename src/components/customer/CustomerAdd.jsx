import { useDispatch } from "react-redux";
import { CustomerAddWrap } from "./CustomerStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { add } from "../../store/modules/customerSlice";


const CustomerAdd = () => {    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState({name:'',title:'',content:'',date:''})
    const {name , title, content, date} = user
    const [now , setNow] = useState(new Date())
 
    const changeInput = e => {
     const {value , name} = e.target 
     setUser({
         ...user,
         [name]:value
     })
    }
    const onSubmit = (e) => {
     e.preventDefault()
     if(!title || !content || !name) return
     user.date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
     dispatch(add(user))
     setUser({name:'',content:'',title:''})
     navigate(`/customer`)
    }

    const onGo = (e) => {
        e.preventDefault()
        navigate(`/customer`)
    }

    return (
        <CustomerAddWrap>  
            <div className="inner">    
                <h2>FAQ</h2>
                <form  className="customer-add" onSubmit={onSubmit}>
                    <p>  <input type="text" placeholder="Title"  onChange={changeInput} name="title" value={title}/></p>
                    <p>  <input type="text" placeholder="User" onChange={changeInput} name="name" value={name}/></p>
                    <p>  
                        <textarea cols="100" rows="10" 
                        placeholder=""
                        onChange={changeInput} name="content" value={content} 
                        ></textarea></p>
                    <p>
                        <button onClick={onGo}>List</button>
                        <button type="submit">Save</button>
                        <button onClick={onGo}>Cancel</button>
                    </p>
                </form>
                </div>       
        </CustomerAddWrap>
    );
};

export default CustomerAdd;