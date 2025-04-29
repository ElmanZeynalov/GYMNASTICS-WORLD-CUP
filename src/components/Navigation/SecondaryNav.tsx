import SecondaryNavItem from './SecondaryNavItem';
import { SecondaryNavProps } from '@/components/Navigation/Nav.types';

export default function SecondaryNav({ items }: SecondaryNavProps) {
	return (
		<div className="w-full mb-6">
			<div className="flex gap-2 pb-1 w-max">
				{items.map((it) => (
					<SecondaryNavItem key={it.label} label={it.label} active={it.active} />
				))}
			</div>
		</div>
	);
}
