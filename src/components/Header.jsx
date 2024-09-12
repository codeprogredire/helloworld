import { Counter } from "./Counter";

export function Header(props){
    return (
        <div>
            <center>
                <h1>Hello world</h1>
                <img src="https://images.pexels.com/photos/2007660/pexels-photo-2007660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" style={{width:400, height:400}}/>
                <p>{props.text}</p>
                <Counter/>
            </center>
        </div>
    )
}
