import React from 'react';
import { NavItemProps } from '@/components/Navigation/Nav.types';
import Link from 'next/link';

export default function NavItem({ label, active = false, hasLiveIndicator = false, href }: NavItemProps) {
	return (
		<Link
			href={href}
			className={`px-4 md:px-6 py-3 relative cursor-pointer ${active ? 'border-b-2 border-white' : ''}`}
		>
			<div className="flex items-center">
				{hasLiveIndicator && <span className="w-2 h-2 bg-[#fb0000] rounded-full mr-2" />}
				<span className="whitespace-nowrap">{label}</span>
			</div>
		</Link>
	);
}
