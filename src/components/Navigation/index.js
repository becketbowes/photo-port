import React from 'react';

const Nav = () => {
    const categories = [
        { name: "commercial", description: "Photos of grocery stores, food trucks, and other commerical projects" },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        { name: "landscape", description: "Fields, farmhouses, waterfalls, and the beauty of nature"}
    ];

    const handleClick = (name) => { console.log(`${name} clicked`) };

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera" data-testid="link">📸 O Snap!</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" data-testid="about" onClick={() => handleClick()}>About Me</a>
                    </li>
                    <li>
                        <span data-testid="contact" onClick={() => handleClick()}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                            <span onClick={() => handleClick(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;