import './sidebar.css';


export default function Sidebar() {
    return (
        <>
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sideBarTitle">
                    About   </span>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.ish-XHa4LEVCK2MnYWBWtQFNC7&pid=Api&P=0&w=270&h=153" alt="" />
                    <p>DTU Car Rental is the most known car rental in Ethiopia i!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iure deleniti dolores maiores. Quia, autem quas! Ipsum aliquam quasi explicabo nisi, harum ullam beatae iure? Harum quasi illo totam repudiandae.</p>
                   <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus accusantium explicabo, delectus nesciunt ipsa repellendus optio earum reiciendis eveniet animi cupiditate quia sapiente quas, qui eaque nisi possimus.</p>

            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">Catagories               
                </span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Home </li>
                    <li className="sideBarListItem">Constraction</li>
                    <li className="sideBarListItem">Luxury</li>
                
                </ul>
            </div>

        <div className="sideBarItem">
    <span className="sideBarTitle">Follow us</span>
      <div className="sideBarSocial">

     <i className="sideBarIcon fab fa-facebook-square"></i>

     <i className="sideBarIcon fab fa-twitter-square"></i>
     
     <i className="sideBarIcon fab fa-pInterest-square"></i>
     <i className=" searchImage fas fa-search"></i>
     

      </div>


        </div>
        </div>
        
        
        </>
    )
}
