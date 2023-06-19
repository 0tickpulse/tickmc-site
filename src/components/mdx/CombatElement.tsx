import React from "react";

export type CombatElementType = "earth" | "ender" | "fire" | "ice" | "light" | "physical" | "shadow" | "thunder" | "water" | "wind";

export type CombatElementProps = {
    element: CombatElementType;
};

export default function CombatElement({ element }: CombatElementProps) {
    return (
        <a
            className="
                inline-flex flex-row gap-2 px-3 rounded-full items-center justify-center
                bg-gray-200
                dark:bg-gray-800
            "
            href={`/docs/Combat/elemental-combat#${element}`}
        >
            <img src={`/img/Combat/elements/element_${element}.png`} width={16} height={16} alt={element} />
            {element.charAt(0).toUpperCase() + element.slice(1)}
        </a>
    );
}
