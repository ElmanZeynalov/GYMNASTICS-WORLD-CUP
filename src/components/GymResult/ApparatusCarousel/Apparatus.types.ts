export interface ApparatusItemProps {
	name: string;
	src: string;
	active?: boolean;
}

export interface ApparatusCarouselProps {
	items: ApparatusItemProps[];
}
