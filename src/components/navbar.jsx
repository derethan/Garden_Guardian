/************************************************ 
*   Parent Component for the Navbar
*************************************************/

export default function Navbar() {

    const pages = [
		{id: 'home', name: 'Home', path: '/'}
	];

    return (
        <div className="container flex flex-row">
			{pages.map((page) => {
				return (
					<a href={page.path} key={page.id} className="nav-link">
						{page.name}
					</a>
				);
			})}
        </div>        
    );
}	// end Navbar