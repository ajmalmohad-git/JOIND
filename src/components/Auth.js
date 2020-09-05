import React,{useState} from 'react';
import '../styles/Auth.scss';
import { Redirect } from 'react-router-dom';

function Login(props) {
    
    let [logged,setLogged] = useState(false); 
    let loginpage = props.login;
    let login = {
        username:'',
        password:''
    }
    let signup = {
        name:'',
        gmail:'',
        password:''
    }

    let handleChange=(e)=>{
        if(e.currentTarget.className ==='form1')
        {
            let elem = e.target;
            switch(elem.name)
            {
                case 'username':  login.username = elem.value; break;
                case 'password': login.password = elem.value; break;
                default:break;
            }
        }else if(e.currentTarget.className ==='form2')
        {
            let elem = e.target;
            switch(elem.name)
            {
                case 'name': signup.name = elem.value; break;
                case 'gmail': signup.gmail = elem.value; break;
                case 'password': signup.password = elem.value; break;
                default:break;
            }
        }
    }

    let handleClick = (form)=>{

        //Fake Auth

        if(form===1)
        {
            if(login.username==='ajmal' && login.password === 'ajmal')
           {
            setLogged(logged=true)
           }
           else
           {
                alert('Not Recognized');
                console.log(login);
           }
        }
        if(form===2)
        {
            if(signup.name==='ajmal'&&signup.password==='ajmal'&&signup.gmail==='ajmal@ajmal.com')
            {
                setLogged(logged=true)
            }
            else
            {
                alert('Not Recognized');
                console.log(signup);
            }
        }
        
    }


    
    return (
        !logged?
        <div className="Auth">
            <h1 className="heading">{loginpage? 'Login' : 'Sign up'}</h1>
            {
            loginpage?
            <div className="form1" onChange={(e)=>{handleChange(e)}}>
                <input className="username" name="username"  type="text" placeholder="Username"/>
                <input className="password" name="password" type="password" placeholder="Password"/>
                <button className="btn" onClick={()=>{handleClick(1)}}>Login</button>
            </div>
            :
            <div className="form2" onChange={(e)=>{handleChange(e)}}>
                <input className="name" name="name" type="text" placeholder="Create a username"/>
                <input className="gmail" name="gmail" type="email" placeholder="Gmail"/>
                <input className="password" name="password" type="password" placeholder="Password"/>
                <button className="btn" onClick={()=>{handleClick(2)}}>Sign up</button>
            </div>
            }
        </div>
        : <Redirect to="/home"></Redirect>
    )
}

export default Login
