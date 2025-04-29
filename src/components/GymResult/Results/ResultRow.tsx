// src/components/GymResult/Results/ResultRow.tsx
import React from 'react';

import CountryFlag from '../../CountryFlag';
import { ResultRowData, ScoreItem } from '@/components/GymResult/Results/Result.types';

export interface ResultRowProps {
	data: ResultRowData;
}

export default function ResultRow({ data }: ResultRowProps) {
	const { rank, country, bib, name, scores } = data;

	return (
		<>
			{scores.map((score: ScoreItem, index: number) => (
				<tr
					key={`${rank}-${index}`}
					className={index === scores.length - 1 ? 'border-b border-[#1a1635]' : ''}
				>
					{index === 0 && (
						<>
							<td className="py-3" rowSpan={scores.length}>
								<div className="bg-[#0a8bec] text-white w-8 h-8 flex items-center justify-center">{rank}</div>
							</td>
							<td className="py-3" rowSpan={scores.length}>
								<div className="flex items-center">
									<CountryFlag country={country} />
									<span className="ml-2">{country}</span>
								</div>
							</td>
							<td className="py-3" rowSpan={scores.length}>
								{bib}
							</td>
							<td className="py-3" rowSpan={scores.length}>
								{name}
							</td>
						</>
					)}

					{score.label ? (
						<>
							<td colSpan={3} className="text-right py-1 text-sm">
								{score.label}
							</td>
							<td className={`text-right py-1 ${score.highlight ? 'text-[#ff9c07]' : ''}`}>{score.total}</td>
						</>
					) : (
						<>
							<td className="text-right py-1">{score.d}</td>
							<td className="text-right py-1">{score.e}</td>
							<td className="text-right py-1">{score.pen}</td>
							<td className={`text-right py-1 ${score.highlight ? 'text-[#ff9c07]' : ''}`}>{score.total}</td>
						</>
					)}
				</tr>
			))}
		</>
	);
}
