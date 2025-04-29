// src/components/GymResult/Results/MobileResultsList.tsx

import MobileResultCard from './MobileResultCard';
import { ResultRowData } from '@/components/GymResult/Results/Result.types';

export interface MobileResultsListProps {
	rows: ResultRowData[];
}

export default function MobileResultsList({ rows }: MobileResultsListProps) {
	return (
		<div className="md:hidden space-y-4">
			{rows.map((r) => (
				<MobileResultCard key={r.rank} data={r} />
			))}
		</div>
	);
}
