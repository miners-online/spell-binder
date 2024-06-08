import * as React from "react";
import {
  Hamburger,
  NavCategory,
  NavCategoryItem,
  NavDrawer,
  NavDrawerBody,
  NavDrawerFooter,
  NavDrawerHeader,
  NavDrawerHeaderNav,
  NavDrawerProps,
  NavItem,
  NavSectionHeader,
  NavSubItem,
  NavSubItemGroup,
} from "@fluentui/react-nav-preview";


export const Navigation = () => {
    const [isOpen, setIsOpen] = React.useState(true);

    return (
        <>
            {!isOpen && <Hamburger onClick={() => setIsOpen(true)} />}
        
            <NavDrawer
                defaultSelectedValue="2"
                defaultSelectedCategoryValue="1"
                open={isOpen}
                type={"inline"}
            >
                <NavDrawerHeader>
                    <NavDrawerHeaderNav>
                        <Hamburger onClick={() => setIsOpen(false)} />
                    </NavDrawerHeaderNav>
                </NavDrawerHeader>
                <NavDrawerBody>
                    <NavSectionHeader>Files</NavSectionHeader>
                    <NavItem href="#" value="1">
                        example.txt
                    </NavItem>
                </NavDrawerBody>
            </NavDrawer>
        </>
    )
}