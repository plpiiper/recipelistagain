import {Tabs, Tab, NavbarItem} from "@nextui-org/react";
import { Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, DropdownSection } from "@nextui-org/react";
import Data from "@/Data/Data.json"

export default function SearchSection(){
    return (<div id="search-section">
        <div className="search-section-main">Categories</div>
        <div className="search-section-all"><a>ALL</a></div>
        <div className="search-section-dropdown">
            <Dropdown className="navbar-dropdown">
                    <DropdownTrigger>
                        <Button
                            disableRipple
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent search-section-dropdown-button"
                            endContent={<span className="material-symbols-outlined" style={{fontSize: '1.25em'}}>arrow_drop_down</span>}
                        >
                            Recipes
                        </Button>
                    </DropdownTrigger>
                <DropdownMenu
                    aria-label="Recipe dropdown"
                    className="w-[300px]"
                    itemClasses={{
                        base: "gap-4",
                    }}
                    size={"lg"}
                >
                    {Data.dropdown.items.filter(it => it.key === "categories").map(x => (
                        <DropdownSection title={x.title} key={x.key} showDivider className="navbar-dropdown-section">
                            {x.items.map(y => (
                                <DropdownItem
                                    key={y.key}
                                    description={y.description ? y.description : undefined}
                                    startContent={
                                        y.startContent ? (<span className="material-symbols-outlined">{y.startContent}</span>) : undefined}
                                        y.startContent ? (<span className="material-symbols-outlined">{y.startContent}</span>) : undefined}
                                    className="navbar-dropdown-item"
                                >
                                    {y.text}
                                </DropdownItem>
                            ))}
                        </DropdownSection>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>)
}


