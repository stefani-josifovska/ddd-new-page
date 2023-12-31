import React from "react";
import classes from "./Dropdown.module.scss";
import {
  providersContent,
  enterprisesContent,
  startupContent,
} from "./navbarItems";
import DropdownItem from "./DropdownItem";

const CustomersDropdown: React.FC<{}> = () => {
  return (
    <div
      className={`${classes.container} flex flex-col xl:flex-row xl:gap-4 h-fit`}
    >
      <div className="flex-1">
        <span className={classes.category}>{providersContent.category}</span>
        <div className={classes.linksContWrapper}>
          {providersContent.items.map((item, index) => (
            <DropdownItem
              key={`provider-item-${index}`}
              img={item.icon}
              title={item.title}
              desc={item.description}
              url={item.url}
              customSize={undefined}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex-1">
          <span className={classes.category}>
            {enterprisesContent.category}
          </span>
          <div className={classes.linksContWrapper}>
            {enterprisesContent.items.map((item, index) => (
              <DropdownItem
                key={`provider-item-${index}`}
                img={item.icon}
                title={item.title}
                desc={item.description}
                url={item.url}
                customSize={undefined}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <span className={classes.category}>{startupContent.category}</span>
          <div className={classes.linksContWrapper}>
            {startupContent.items.map((item, index) => (
              <DropdownItem
                key={`provider-item-${index}`}
                img={item.icon}
                title={item.title}
                desc={item.description}
                url={item.url}
                customSize={item.customSize ? item.customSize : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersDropdown;
