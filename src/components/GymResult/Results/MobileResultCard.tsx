// src/components/GymResult/Results/MobileResultCard.tsx
import React from 'react';
// import { ResultRowData, ScoreItem } from "./Results.types";
import CountryFlag from '../../CountryFlag';
import { ResultRowData, ScoreItem } from './Result.types';

export interface MobileResultCardProps {
	data: ResultRowData;
}

export default function MobileResultCard({ data }: MobileResultCardProps) {
	const { rank, country, bib, name, scores } = data;

	return (
		<div className="bg-[#1a1635] rounded-md overflow-hidden">
			<div className="flex items-center p-3 border-b border-[#080915]">
				<div className="bg-[#0a8bec] text-white w-7 h-7 flex items-center justify-center mr-3">{rank}</div>
				<div className="flex items-center">
					<CountryFlag country={country} />
					<span className="ml-2 text-sm">{country}</span>
				</div>
				<div className="ml-auto text-xs text-gray-400">Bib: {bib}</div>
			</div>

			<div className="p-3">
				<div className="text-sm font-medium mb-2">{name}</div>

				<div className="space-y-2">
					{scores.map((score: ScoreItem, idx: number) => (
						<div key={idx} className="grid grid-cols-4 text-xs">
							{score.label ? (
								<>
									<div className="col-span-3 text-right text-gray-400">{score.label}</div>
									<div className={`text-right ${score.highlight ? 'text-[#ff9c07] font-medium' : ''}`}>
										{score.total}
									</div>
								</>
							) : (
								<>
									<div className="text-center text-gray-400">D</div>
									<div className="text-center text-gray-400">E</div>
									<div className="text-center text-gray-400">Pen</div>
									<div className="text-center">Total</div>

									<div className="text-center">{score.d}</div>
									<div className="text-center">{score.e}</div>
									<div className="text-center">{score.pen}</div>
									<div className={`text-center ${score.highlight ? 'text-[#ff9c07] font-medium' : ''}`}>
										{score.total}
									</div>
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
