import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./SidebarItem";
import profile from "./profile.png";

const Side = styled.div`
  display: flex;
  border-right: 1px solid #e0e0e0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
`
const Profile = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
`
const Menu = styled.div`
  margin-left: 100px;
  margin-top: 30px;
  width: 200px;
  display: flex;
  flex-direction: column;
`

const SubMenu = styled.div`
  margin-left: 30px;
`

function Sidebar() {
  const menus = [
    { name: "심사 신청", path: "/" },
    { name: "투자 확인", path: "/setting" },
  ];
  const subMenusForApplication = [
    { name: "신규 신청", path: "/mylist" },
    { name: "심사 확인", path: "/likedlist" },
  ];
  const subMenusForInvestment = [
    { name: "투자 진행", path: "/mylist" },
    { name: "투자 완료", path: "/likedlist" },
  ];

  return (
    <Side>
      <Profile src={profile}></Profile>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              style={{color: "gray", textDecoration: "none"}}
              to={menu.path}
              key={index}
              activeStyle={{color: "black"}}
            >
              <SidebarItem
                menu={menu}
              />
            </NavLink>
          );
        })}
        <SubMenu>
          {subMenusForApplication.map((subMenu, index) => {
            return (
              <NavLink
                exact
                style={{color: "gray", textDecoration: "none"}}
                to={subMenu.path}
                key={index}
                activeStyle={{color: "black"}}
              >
                <SidebarItem
                  menu={subMenu}
                />
              </NavLink>
            );
          })}
        </SubMenu>
        <SubMenu>
          {subMenusForInvestment.map((subMenu, index) => {
            return (
              <NavLink
                exact
                style={{color: "gray", textDecoration: "none"}}
                to={subMenu.path}
                key={index}
                activeStyle={{color: "black"}}
              >
                <SidebarItem
                  menu={subMenu}
                />
              </NavLink>
            );
          })}
        </SubMenu>
      </Menu>
    </Side>
  );
}

export default Sidebar;
