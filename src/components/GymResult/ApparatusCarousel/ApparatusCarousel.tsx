import ApparatusItem from './ApparatusItem';

export interface ApparatusCarouselProps {
	items: { name: string; src: string; active?: boolean }[];
}
export default function ApparatusCarousel({ items }: ApparatusCarouselProps) {
	return (
		<div className="relative mb-8 md:mb-12">
			<div className="flex justify-start md:justify-center gap-8 pb-2 w-max mx-auto">
				{items.map((it) => (
					<ApparatusItem key={it.name} {...it} />
				))}
			</div>
		</div>
	);
}
