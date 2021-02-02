import Link from 'next/link';

const links = [
    { href: '/about', label: 'about' },
    { href: '/projects', label: 'projects' },
    { href: '/talks', label: 'talks' },
    { href: '/work', label: 'work' }
];

export default function Nav() {
    return (
        <nav>
            <ul className="flex items-center justify-between p-8">
                <li>
                    <Link href="/">
                        <a className="text-black no-underline text-accent-1 text-lg font-bold dark:text-black ">
                            <p className="px-4 py-2 text-black font-bold">dwvicy</p>
                        </a>
                    </Link>
                </li>
                <div className="text-black border border-black shadow-lg">
                    <ul className="px-4 py-2 flex items-center justify-between space-x-4">
                        {links.map(({ href, label }) => (
                            <li key={`${href}${label}`}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </ul>
        </nav>
    );
}
