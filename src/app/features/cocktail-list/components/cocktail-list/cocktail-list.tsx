import React from "react";
import { Cocktail } from "../../../models/cocktail";
import { CocktailItemComponent } from "../cocktail-item/cocktail-item";
import cn from "classnames";
import "./cocktail-list.scss";

export interface CocktailListProps {
  cocktails: Cocktail[];
  className?: string;
}

function CocktailList(props: CocktailListProps) {
  return (
    <ul className={cn("cocktail-list fancy", props.className)}>
      {props.cocktails.map((cocktail) => (
        <li className="cocktail-list_item" key={cocktail.name}>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <CocktailItemComponent cocktail={cocktail} />
        </li>
      ))}
    </ul>
  );
}

export const CocktailListComponent = React.memo(CocktailList);
