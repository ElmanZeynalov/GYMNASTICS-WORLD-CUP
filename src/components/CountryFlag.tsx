// src/components/GymResult/CountryFlag.tsx
import React from 'react';

export interface CountryFlagProps {
	country: string;
}

export default function CountryFlag({ country }: CountryFlagProps) {
	return (
		<div className="w-6 h-4 bg-gray-700 flex items-center justify-center overflow-hidden rounded-sm">
			<span className="text-[8px] uppercase font-bold text-white">{country}</span>
		</div>
	);
}
