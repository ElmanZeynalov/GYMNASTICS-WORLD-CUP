// src/components/GymResult/Results/DesktopResultsTable.tsx
import React from 'react';
import { ResultRowData } from '@/components/GymResult/Results/Result.types';
import ResultRow from '@/components/GymResult/Results/ResultRow';

export interface DesktopResultsTableProps {
	rows: ResultRowData[];
}

export default function DesktopResultsTable({ rows }: DesktopResultsTableProps) {
	return (
		<div className="hidden md:block overflow-x-auto">
			<table className="w-full">
				<thead>
					<tr className="text-left border-b border-[#1a1635]">
						<th className="pb-4 font-normal">Rank</th>
						<th className="pb-4 font-normal">Team</th>
						<th className="pb-4 font-normal">Bib</th>
						<th className="pb-4 font-normal">Name</th>
						<th className="pb-4 font-normal text-right">D</th>
						<th className="pb-4 font-normal text-right">E</th>
						<th className="pb-4 font-normal text-right">Pen</th>
						<th className="pb-4 font-normal text-right">Total</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<ResultRow key={row.rank} data={row} />
					))}
				</tbody>
			</table>
		</div>
	);
}
