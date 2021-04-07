import { Link, Redirect } from "react-router-dom";
import React ,{useState} from 'react';

export default function ConditionalLink({ children, to, condition }) {
      const [redirect,setRedirect] = useState(false);

      const myOnClick = () => {
            setRedirect(condition());
      }

      return (
            <>
                  <button onClick={myOnClick}>{children}</button>
                  {redirect && <Redirect to={to}/>}
            </>
      )
}