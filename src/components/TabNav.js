import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane></Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane></Tab.Pane> },
]
    const TabExampleBasic = () => <Tab panes={panes} />
    TabExampleBasic();
    return (
    <div className="navLink-wrapper">
        <div class="ui attached tabular menu">
        <NavLink exact to="/character" activeClassName="active item">Characters</NavLink>
        <NavLink to="/location" activeClassName="active item">Location</NavLink>
        <NavLink to="/episode" activeClassName="active item">Episodes</NavLink>
        </div>
        {/* <div class="ui bottom attached segment active tab">Tab 1 Content</div> */}
    </div>
    )
};


