import Image from 'next/image';
import { ApparatusItemProps } from './Apparatus.types';

export default function ApparatusItem({ name, src, active = false }: ApparatusItemProps) {
	return (
		<div className="flex flex-col items-center">
			<div className={`mb-2 ${active ? 'opacity-100' : 'opacity-50'}`}>
				<Image src={src} alt={name} width={36} height={36} className="md:w-10 md:h-10" />
			</div>
			{active && <div className="text-[10px] md:text-xs">{name}</div>}
		</div>
	);
}
