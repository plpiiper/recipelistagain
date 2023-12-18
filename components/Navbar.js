import Data from "@/Data/Data.json"
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, DropdownSection} from "@nextui-org/react";

export default function SiteNav(){

    return (<div id="NavMain">
        <Navbar className="NavMain-Bar">
            <NavbarBrand>
                <NavbarItem><Link id="nav-title" color="foreground" href="/">
                    RecipeList
                </Link></NavbarItem>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <Dropdown className="navbar-dropdown">
                    <NavbarItem className="navbar-dropdown-item">
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                            >
                                Recipes
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Recipe dropdown"
                        className="w-[300px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                        size={"lg"}
                    >
                        {Data.dropdown.items.map(x => (
                            <DropdownSection title={x.title} key={x.key} showDivider className="navbar-dropdown-section">
                                {x.items.map(y => (
                                    <DropdownItem
                                        key={y.key}
                                        description={y.description ? y.description : undefined}
                                        startContent={
                                            y.startContent ? (<span className="material-symbols-outlined">{y.startContent}</span>) : undefined}
                                        className="navbar-dropdown-item"
                                        href={y.href}
                                        >
                                        {y.text}
                                    </DropdownItem>
                                ))}
                            </DropdownSection>
                            ))}
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem><Link color="foreground" href="#">
                        Settings
                    </Link></NavbarItem>
            </NavbarContent>
        </Navbar>
    </div>)
}


