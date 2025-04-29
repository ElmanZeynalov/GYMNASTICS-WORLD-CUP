import { ArrowLeft } from 'lucide-react';
import { HeaderProps } from '@/components/Header/Header.types';

export default function Header({ title, location, dateRange, onBack }: HeaderProps) {
	return (
		<div className="flex items-start md:items-center mb-4 gap-2 md:gap-4">
			<button onClick={onBack} className="mt-1 md:mt-0">
				<ArrowLeft className="h-5 w-5 md:h-6 md:w-6" />
			</button>
			<div>
				<h1 className="text-lg md:text-2xl font-medium">{title}</h1>
				<div className="flex flex-col md:flex-row md:items-center text-xs md:text-sm text-gray-400 mt-1">
					<span>{location}</span>
					<span className="hidden md:inline mx-2">|</span>
					<span>{dateRange}</span>
				</div>
			</div>
		</div>
	);
}
