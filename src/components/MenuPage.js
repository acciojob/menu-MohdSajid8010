import React from "react";
import { useState } from "react";

const MenuPage = (props) => {
    console.log(props.menu_arr);

    const [menu_arr, setmenu_arr] = useState(props.menu_arr);

    return (
        <div id="main">
            <main id="categories">
                <div onClick={() => { setmenu_arr([...props.menu_arr]) }}>  All</div>
                <div id="filter-btn-1" onClick={() => { setmenu_arr(props.menu_arr.filter((menu_obj) => menu_obj.category == "breakfast")); }} >Breakfast </div>
                <div
                    id="filter-btn-2"
                    onClick={() => {
                        setmenu_arr(props.menu_arr.filter((menu_obj) => menu_obj.category == "lunch"));
                    }}>Lunch</div>
                <div
                    id="filter-btn-3"
                    onClick={() => {
                        setmenu_arr(props.menu_arr.filter((menu_obj) => menu_obj.category === "shakes"));
                    }}
                > Shakes</div>
            </main>

            <div className="menu-cont">
                {
                    menu_arr.map((obj, i) => {
                        return (
                            <div className="food" key={i}>

                                <img src={obj.img} alt="img" />
                                <div className="right">
                                    <div className="price">
                                        <div>{obj.title}</div>
                                        <strong>${obj.price}</strong>
                                    </div>
                                    <p>{obj.desc}</p>
                                </div>

                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};
export default MenuPage;