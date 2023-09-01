import React, { useContext } from "react";
import { getContrastYIQ } from "./helpers"
import MainContext from "./MainContext";
import Clipboard from 'react-clipboard.js'

function Brand({ brand, key }) {

    const { selectedBrands, setSelectedBrands, setCopied } = useContext(MainContext)
    const toggleSelected = () => {
        if (selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }

    const setColor = (color) => {
        setCopied(color)
    }

    return (
        <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-colors">
                {brand.colors.map((color) => (
                    <Clipboard data-clipboard-text={color} onSuccess={() => setColor(color)} key={key} component="span" style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}` }}>

                        {color}
                    </Clipboard>
                ))}
            </div>
        </div>
    );
}

export default Brand;
