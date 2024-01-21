import { useDispatch, useSelector } from "react-redux";
import { CustomerAddWrap } from "./CustomerStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { update } from "../../store/modules/customerSlice";

const CustomerEdit = () => {
    let {current} = useSelector(state => state.customer)
    let [user, setUser] = useState(current)
    let {name, title, content ,date} = user
    let [now , setNow] = useState(new Date())
    let dispatch = useDispatch()
    let navigate = useNavigate()

    const changeInput = e => {
        const {name , value} = e.target
        setUser({
            ...user,
            [name]:value
        })

    }
    const onSubmit = e => {
        e.preventDefault()
        if(!title || !content || !name) return
        date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`
        dispatch(update(user))
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
                <h2> Edit </h2>
                <form  className="customer-add" onSubmit={onSubmit}>
                    <p>  <input type="text" placeholder="Title" onChange={changeInput} name="title" value={title} /></p>
                    <p>  <input type="text" placeholder="User" onChange={changeInput} name="name" value={name}/></p>
                    <p>  
                        <textarea cols="100" rows="10" 
                        placeholder="" 
                        onChange={changeInput} name="content" value={content}
                        ></textarea></p>
                    <p>
                        <button type="submit">Save</button>
                        <button onClick={onGo}>Cancel</button>
                    </p>
                </form>
            </div>
        </CustomerAddWrap>
    );
};

export default CustomerEdit;