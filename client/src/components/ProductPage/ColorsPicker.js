import React from 'react';
import { CheckIcon } from "../../svg/CheckIcon";

function ColorsPicker({ colors, onChangeColor, mainColor }) {
    return (
        <ul className="mt-4 mb-8 flex items-center flex-wrap gap-4">
              {
                colors.map((item, idx) => (
                  <li key={idx} className="flex-none">
                            <label htmlFor={item.id} className="block relative w-8 h-8">
                                <input 
                                id={item.id} 
                                type="radio"
                                checked={item.colorCode === mainColor.colorCode}
                                name="color" 
                                class="sr-only peer"
                                onChange={() => onChangeColor(item)}
                                />
                                <span className={`inline-flex justify-center items-center w-full border-2 h-full rounded-full peer-checked:ring ring-offset-2 ring-black cursor-pointer duration-150`}
                                style={{
                                   backgroundColor: item.colorCode,
                                }}
                                >
                                </span>
                                <CheckIcon mainColor={mainColor} />
                            </label>
                        </li>
                ))
              }
            </ul>
    )
}

export { ColorsPicker };