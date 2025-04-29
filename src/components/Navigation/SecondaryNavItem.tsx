import React from 'react';
import { SecondaryNavItemProps } from '@/components/Navigation/Nav.types';

export default function SecondaryNavItem({ label, active = false }: SecondaryNavItemProps) {
	return (
		<div
			className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm whitespace-nowrap ${
				active ? 'bg-[#1a1635]' : 'bg-[#080915]'
			}`}
		>
			{label}
		</div>
	);
}
