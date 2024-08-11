import React from "react";

function SizesPicker({ sizes, onChangeSize, mainSize }) {

      return (
        <ul className="mt-4 flex items-center flex-wrap gap-4">
              {
                sizes.map((item, idx) => (
                  <li key={idx} className="flex-none">
                    <label htmlFor={item.size.size} className="block relative w-12 h-12">
                      <input 
                      id={item.size.size} 
                      type="radio" 
                      checked={item.size.size === mainSize.size.size} 
                      name="sizes" 
                      className="sr-only peer"
                      onChange={() => onChangeSize(item)} />
                      <span 
                      className='inline-flex justify-center items-center w-full h-full rounded-full border-2 peer-checked:ring ring-offset-2 cursor-pointer duration-150 peer-checked:bg-black ring-black peer-checked:text-white'>
                        {item.size.size}
                      </span>
                    </label>
                  </li>
                ))
              }
            </ul>
      );
}

export { SizesPicker };